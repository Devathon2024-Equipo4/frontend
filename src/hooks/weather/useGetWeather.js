import { useEffect, useState, useCallback } from "react"
import weatherStore from "@/stores/weatherStore"
import { getWeather } from "@/services/weatherServices"
import { useGpsStore } from "@/stores/gpsStore"

export const useGetWeather = () => {
const setWeather = weatherStore((state) => state.setWeather)
const weather = weatherStore((state) => state.weather)
const [isLoading, setIsLoading] = useState(true)
const [isError, setIsError] = useState(null)
const ipDetails = useGpsStore((state) => state.ipDetails)

const fetchWeather = useCallback(async () => {
  setIsLoading(true)
  try {
      
      const response = await getWeather(ipDetails.country_name);
      if (response.weather) {
        setWeather(Object.values(response.weather));
      } else {
        throw new Error('La respuesta no contiene datos meteorológicos');
      }
    
  } catch (error) {
    setIsError(error ? error.message : 'Unknown error');
  } finally {
    setIsLoading(false)
  }
},[setWeather, ipDetails])

useEffect(() => {
  fetchWeather();
}, [fetchWeather]);


return { weather, isLoading, isError, fetchWeather }
}