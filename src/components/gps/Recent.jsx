import { useRecentGps } from "@/hooks/gps/useRecentGps";
import { useEffect } from "react";
import { useGpsStore } from "@/stores/gpsStore";
 
export const Recent = () => {
  const setPosition = useGpsStore((state) => state.setPosition);
  const {  coordinates, isLoading, error } = useRecentGps();

  useEffect (() => {
    console.log(coordinates);
  }, [coordinates]);
 
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="flex flex-col mx-4 w-6/12">
     
     <h3>Resultados:</h3>
        <ul  className="">
          {Array.isArray(coordinates) && coordinates.length > 0 && coordinates.map((result, index) => (
            <li key={index}  className="max-h-72 overflow-y-auto border border-gray-300 rounded-md bg-white shadow-lg hover:bg-slate-300/80">
              <button onClick={() => {
                setPosition([result.lat, result.lon]);
              
              }}  className="w-full text-left px-4 py-2 focus:outline-none" >
                {result.display_name}
              </button>
            </li>
          ))}
        </ul>
        
    </div>
  );
};