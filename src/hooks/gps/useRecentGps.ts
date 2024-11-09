import { useEffect, useState } from "react";
import { getRecent } from "../../services/gpsServices"; 

export const useRecentGps = (shouldRefetch) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    
    const fetchRecentGps = async () => {
      setIsLoading(true);
      try {
        const response = await getRecent();
        setData(response);
      } catch (error) {
        setError(error.response ? error.response.data : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentGps();
  }, [shouldRefetch]); 

  return { data, isLoading, error };
};  
