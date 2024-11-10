import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (shouldSearch) {
      handleSearch();
      setShouldSearch(false); 
    }
  }, [shouldSearch, inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setRecentSearchesVisible(false);
  };

  const handleSubmit =  (event) => {
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
    }else{
      console.log(addresses);
      setRecentSearchesVisible(true);
    }
  }

  const handleButtonClickHistory =  (value) => {
    setInputValue(value);
    setShouldSearch(true); 
   
  };

  return (
    <>
      <nav className="flex items-center justify-center h-10 p-1.5 bg-donJuan">
        <div className="flex-1" />
        <div className="min-w-[280px] max-[642px] flex justify-center grow-[2] shrink border ">
          <form onSubmit={handleSubmit} className="flex items-center w-full">
            <Button
              disabled={isPending}
              type="submit"
              size="sm"
              className="bg-accent/25 hover:bg-accent-25 h-7 px-2  rounded-none "
              onClick={handleButtonClick}
            >
              <SearchIcon className="size-4 text-white" />
            </Button>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onClick={handleButtonClick}
              placeholder="Busca una dirección"
              className="h-7 w-full px-2 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:border-transparent"
            />
          </form>
        </div>
        <div className="flex-1" />
      </nav>

      <div  className={`fixed w-full flex items-center justify-center top-10 left-1/2 transform -translate-x-1/2   z-[9999] ${
          recentSearchesVisible ? 'block' : 'hidden'
        }`}>
          <div className="flex-1" />
           <div className="min-w-[280px] max-[650px] grow-[2] shrink bg-[#453e3e] text-white p-4 rounded-md shadow-lg">
          <ul className="space-y-2">
            {addresses.map((result, index) => (
              <li key={index} className="text-sm flex"  onClick={() => handleButtonClickHistory(result.address)} >
                <HistoryIcon className="size-4 mr-2 text-white" />
                <span>{result.address}</span>
              </li>
            ))}
          </ul>
          </div>
          <div className="flex-1" />
      </div>
   
    </>
  );
};
