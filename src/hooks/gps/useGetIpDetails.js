import { useState, useEffect, useCallback } from "react";
import { useGpsStore } from "@/stores/gpsStore";
import { getIpDetails } from "@/services/gpsServices";

export const useGetIpDetails = () => {
  const setIpDetails = useGpsStore((state) => state.setIpDetails);
  const ipDetails = useGpsStore((state) => state.ipDetails);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const fetchIpDetails = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getIpDetails();
      setIpDetails(response);
    } catch (error) {
      setIsError(error ? error.message : 'Malformed error');
    } finally {
      setIsLoading(false);
    }
  }, [setIpDetails]);

  useEffect(() => {
    if (ipDetails.length === 0) {
      fetchIpDetails();
    }
  }, [fetchIpDetails, ipDetails]);
  return { ipDetails, isLoading, isError, fetchIpDetails }
}