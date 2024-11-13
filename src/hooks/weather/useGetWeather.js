import { useEffect, useState, useCallback } from "react"
import weatherStore from "@/stores/weatherStore"
import { getWeather } from "@/services/weatherServices"
import { useGpsStore } from "@/stores/gpsStore"

export const useGetWeather = () => {
const setWeather = weatherStore((state) => state.setWeather)
const weather = weatherStore((state) => state.weather)
const [isLoading, setIsLoading] = useState(false)
const [isError, setIsError] = useState(null)

const fetchWeather = useCallback(async (coordinates) => {
  setIsLoading(true);
  setIsError(null); 
  try {
    const response = await getWeather(`${coordinates.latitude},${coordinates.longitude}`);
  
    if (response.weather) {
      setWeather(Object.values(response.weather));
    } else {
      throw new Error('La respuesta no contiene datos meteorológicos');
    }
  } catch (error) {
    setIsError(error.message || 'Error desconocido');
  } finally {
    setIsLoading(false);
  }
}, [setWeather]);

return { weather, isLoading, isError, fetchWeather }
}