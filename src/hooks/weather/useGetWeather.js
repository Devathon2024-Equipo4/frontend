import { useEffect, useState, useCallback } from "react"
import weatherStore from "@/stores/weatherStore"
import { getWeather } from "@/services/weatherServices"

export const useGetWeather = () => {
const setWeather = weatherStore((state) => state.setWeather)
const weather = weatherStore((state) => state.weather)
const [isLoading, setIsLoading] = useState(true)
const [isError, setIsError] = useState(null)

const fetchWeather = useCallback(async (query) => {
  setIsLoading(true)
  try {
    const response = await getWeather(query)
    setWeather(response.weather)
  } catch (error) {
    setIsError(error ? error.message : 'Malformed error');
  } finally {
    setIsLoading(false)
  }
},[setWeather])

useEffect(() => {
  fetchWeather()
}, [fetchWeather])


return { weather, isLoading, isError, fetchWeather }
}