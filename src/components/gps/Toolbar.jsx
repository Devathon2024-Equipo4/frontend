import { useState, useEffect, useRef } from "react";
import { useCreateAddress } from "@/hooks/gps/useCreateGps";
import { useRecentGps } from "@/hooks/gps/useRecentGps";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { toast } from "sonner";
import { useGpsStore } from "@/stores/gpsStore";
import { HistoryIcon } from "lucide-react";

export const Toolbar = () => {
  const [inputValue, setInputValue] = useState("");
  const { mutate, isPending } = useCreateAddress();
  const { fetchRecentGps } = useRecentGps();
  const [recentSearchesVisible, setRecentSearchesVisible] = useState(false);
  const addresses = useGpsStore((state) => state.addresses);
  const [shouldSearch, setShouldSearch] = useState(false);
  const searchBarRef = useRef(null);
  const recentSearchesRef = useRef(null);

  useEffect(() => {
    if (shouldSearch) {
      handleSearch();
      setShouldSearch(false); 
    }
  }, [shouldSearch, inputValue]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        recentSearchesVisible &&
        !searchBarRef.current.contains(event.target) &&
        !recentSearchesRef.current.contains(event.target)
      ) {
        setRecentSearchesVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [recentSearchesVisible]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setRecentSearchesVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  const handleButtonClick = () => {
    handleSearch();
  };

  const handleSearch = async () => {
    const trimmedInput = inputValue.trim();
    if (trimmedInput) {
      await mutate(inputValue, {
        onSuccess: () => {
          toast.success("Dirección guardada");
          fetchRecentGps();
          setInputValue("");
          setRecentSearchesVisible(false);
        },
        onError: (error) => {
          toast.error("Error al guardar la dirección");
        },
      });
    } else {
      setRecentSearchesVisible(true);
    }
  };

  const handleButtonClickHistory = (value) => {
    setInputValue(value);
    setShouldSearch(true); 
  };

  return (
    <>
      <nav className="min-w-[220px] flex items-center justify-center relative bg-akaroa">
        <div className="sm:flex-1" />
        <div ref={searchBarRef} className="flex justify-center grow-[2] shrink border border-stiletto rounded-sm">
          <form onSubmit={handleSubmit} className="flex items-center w-full">
            <Button
              disabled={isPending}
              type="submit"
              size="sm"
              className="bg-accent/25 hover:bg-accent-25 h-7 px-2 rounded-none"
              onClick={handleButtonClick}
            >
              <SearchIcon className="size-4 text-white" />
            </Button>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onClick={() => setRecentSearchesVisible(true)}
              placeholder="Busca una dirección"
              className="h-7 w-full px-2 bg-slate rounded-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-transparent"
            />
          </form>
        </div>
        <div className="sm:flex-1" />
        <div
          ref={recentSearchesRef}
          className={`absolute flex items-center justify-center top-8 lg:top-12 z-[1001] ${
            recentSearchesVisible ? "block" : "hidden"
          }`}
        >
          <div className="flex-1" />
          <div className="min-w-[240px] sm:w-[450px] lg:w-[220px] grow-[2] shrink bg-akaroa/90  border border-stiletto p-2 rounded-md shadow-lg">
            <ul className="space-y-2">
              {addresses.map((result, index) => (
                <li
                  key={index}
                  className="text-sm flex"
                  onClick={() => handleButtonClickHistory(result.address)}
                >
                  <HistoryIcon className="size-4 mr-2 mt-0.5" />
                  <span>{result.address}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1" />
        </div>
      </nav>
    </>
  );
};