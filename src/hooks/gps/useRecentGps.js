import { useEffect, useState, useCallback } from "react";
import { getRecent } from "@/services/gpsServices"; 
import { useGpsStore } from "@/stores/gpsStore";

export const useRecentGps = () => {
  const setAddresses = useGpsStore((state) => state.setAddresses);
  const addresses = useGpsStore((state) => state.addresses);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecentGps = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getRecent();
      setAddresses(response.address); 
    } catch (error) {
      setError(error.response ? error.response.data : 'Malformed error');
    } finally {
      setIsLoading(false);
    }
  }, [setAddresses]);

  useEffect(() => {
    fetchRecentGps(); 
  }, [fetchRecentGps]);

  return { addresses, isLoading, error, fetchRecentGps };
};