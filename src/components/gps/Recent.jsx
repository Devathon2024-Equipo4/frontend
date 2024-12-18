import { useRecentGps } from "@/hooks/gps/useRecentGps";
import { useGpsStore } from "@/stores/gpsStore";
import { Loader } from "lucide-react";
import { TriangleAlertIcon } from "lucide-react";
 
export const Recent = () => {
  const setPosition = useGpsStore((state) => state.setPosition);
  const {  coordinates, isLoading, error } = useRecentGps();
 
  if (isLoading) {
    return (
      <div className=" flex flex-col items-center justify-center mx-4 w-6/12">
        <Loader className="animate-spin size-5 text-muted-foreground  " />
      </div>
    );
  }

  if (error) {
    return ( 
      <div className=" flex items-center justify-center mx-4 w-6/12" >
        <TriangleAlertIcon className="size-5 mr-4 text-red-500" />
        {error}
      </div>
    );
  }
  return (
    <div className="flex flex-col pt-4">
     
     <h3>Resultados:</h3>
        <ul  className="">
          {Array.isArray(coordinates) && coordinates.length > 0 && coordinates.map((result, index) => (
            <li key={index}  className="max-h-72 w-min-[220px] m-1 border border-stiletto rounded-sm ring-inset ring-stiletto hover:ring-1">
              <button onClick={() => {
                setPosition([result.lat, result.lon]);
              
              }}  className=" text-left px-4 py-2 focus:outline-none" >
                {result.display_name}
              </button>
            </li>
          ))}
        </ul>
        
    </div>
  );
};