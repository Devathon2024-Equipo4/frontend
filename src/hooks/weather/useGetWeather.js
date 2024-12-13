import { useState, useCallback } from "react"
import weatherStore from "@/stores/weatherStore"
import { getWeather } from "@/services/weatherServices"
import reindeerStore from "@/stores/reindeerStore"

export const useGetWeather = () => {
const setWeather = weatherStore((state) => state.setWeather)
const weather = weatherStore((state) => state.weather)
const reindeers = reindeerStore((state) => state.reindeers)
const setReindeers = reindeerStore((state) => state.setReindeers)
const [isLoading, setIsLoading] = useState(false)
const [Error, setError] = useState(null)

const fetchWeather = useCallback(async (coordinates) => {
  setIsLoading(true);
  setError(null); 
  try {
    const response = await getWeather(`${coordinates.latitude},${coordinates.longitude}`);
  
    if (response.weather) {
      setWeather(Object.values(response.weather));
    } else {
      throw new Error('La respuesta no contiene datos meteorológicos');
    }
    if (response.reindeers) {
      setReindeers(Object.values(response.reindeers));
    } else {
      throw new Error('La respuesta no contiene datos de los renos');
    }
  } catch (error) {
    setError(error.message || 'Error desconocido');
  } finally {
    setIsLoading(false);
  }
}, [setWeather]);

return { weather, isLoading, Error, fetchWeather }
}