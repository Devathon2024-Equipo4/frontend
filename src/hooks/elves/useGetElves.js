import { useState } from "react";
import { useCallback } from "react";
import elvesStore from "@/stores/elvesStore"
import {getElves} from "@/services/elfService";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";

export const useGetElves = () => {
  const elves = elvesStore(useShallow(state => state.elves));
  const setElves = elvesStore((state) => state.setElves);
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(null);

  const fetchElves = useCallback( async () => {
    setIsLoading(true);
    setError(null);
    try{
      const response = await getElves();
      if (response.elves) {
        setElves(Object.values(response.elves));
      } else {
        throw new Error('La respuesta no contiene datos de los elfos');
      }
    }catch(error){
      setError(error.message || 'Error desconocido');
    }
    finally{
      setIsLoading(false);
    }
  }, [setElves]);

  useEffect(() => {
    fetchElves();
  }, [fetchElves]);

  return { elves, isLoading, Error, fetchElves };
};