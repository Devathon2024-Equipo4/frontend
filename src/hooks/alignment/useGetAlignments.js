import { useState } from "react";
import { useCallback } from "react";
import alignmentStore from "@/stores/alignmentStore"
import { getAlignments } from "@/services/alignmentService";
import { useEffect } from "react";

export const useGetAlignments = () => {
  const alignments = alignmentStore((state) => state.alignments);
  const setAlignments = alignmentStore((state) => state.setAlignments);
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(null);

  const fetchAlignments = useCallback( async () => {
    setIsLoading(true);
    setError(null);
    try{
      const response = await getAlignments();
      if (response.alignments) {
        setAlignments(Object.values(response.alignments));
      } else {
        throw new Error('La respuesta no contiene datos de las alineaciones');
      }
    }catch(error){
      setError(error.message || 'Error desconocido');
    }
    finally{
      setIsLoading(false);
    }
  }, [setAlignments]);

  useEffect(() => {
    fetchAlignments();
  }, [fetchAlignments]);

  return { alignments, isLoading, Error, fetchAlignments };
};