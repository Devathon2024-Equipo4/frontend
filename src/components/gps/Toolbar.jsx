import { useState } from "react";
import { useCreateAddress} from "../../hooks/gps/useCreateGps";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { toast } from "sonner";


export const Toolbar = () => {
  const [inputValue, setInputValue] = useState(""); 
  const { mutate,  isPending} = useCreateAddress();
  const [shouldRefetch, setShouldRefetch] = useState(false);
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value); 
  };
  const handleSubmit = async (event) => {
    event.preventDefault(); 
   
    try {
      await mutate(inputValue);
      toast.success("Dirección guardada"); 
      setShouldRefetch(prev => !prev);
    } catch (error) {
    
      toast.error("Error al guardar la dirección");
     ;
    }
    
    
  };
  return (
    <nav className="flex items-center justify-center h-10 p-1.5 bg-[#594f4d]">
      <div className="flex-1" />
      <div className="min-w-[280px] max-[642px] flex justify-center grow-[2] shrink border ">
      <form onSubmit={handleSubmit} className="flex items-center w-full">
          <Button disabled={isPending} type="submit" size="sm" className="bg-accent/25 hover:bg-accent-25 h-7 px-2  rounded-none ">
            <SearchIcon className="size-4 text-white" />
          </Button>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Escribe aquí..."
            className="h-7 w-full px-2 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:border-transparent"
          />
        </form>
      </div>
      <div className="flex-1" />
    </nav>
  );
};