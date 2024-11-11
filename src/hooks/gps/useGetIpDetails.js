import { useState, useEffect, useCallback } from "react";
import { useGpsStore } from "@/stores/gpsStore";

export const useGetIpDetails = () => {
  const setIpDetails = useGpsStore((state) => state.setIpDetails);
  const ipDetails = useGpsStore((state) => state.ipDetails);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const fetchIpDetails = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getIpDetails();
      setIpDetails(response.ipDetails);
    } catch (error) {
      setIsError(error ? error.message : 'Malformed error');
    } finally {
      setIsLoading(false);
    }
  }, [setIpDetails]);

  useEffect(() => {
    fetchIpDetails();
  }, [fetchIpDetails]);
  return { ipDetails, isLoading, isError, fetchIpDetails }
}