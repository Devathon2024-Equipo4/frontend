import { useGetWeather } from "@/hooks/weather/useGetWeather";
import { Loader } from "lucide-react";
import { TriangleAlertIcon } from "lucide-react";

export const Weather = () => {
  const { isLoading, isError, weather, fetchWeather } = useGetWeather();

  if (isLoading) {
    return (
      <div className=" flex flex-col items-center justify-center">
        <Loader className="animate-spin size-5 text-muted-foreground  " />
      </div>
    );
  }

  if (isError) {
    return ( 
      <div className=" flex flex-col items-center justify-center" >
        <TriangleAlertIcon className="size-4" />
        {isError}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Weather</h1>
      </div>
    </div>
  );
};
