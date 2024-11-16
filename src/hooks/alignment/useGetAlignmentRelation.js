import { getAlignmentRelationId } from "@/services/alignmentRelationService";
import reindeerStore from "@/stores/reindeerStore";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";



export const useGetAlignmentRelation = () => {
  const setReindeers = reindeerStore((state) => state.setReindeers);
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(null);

  const fetchAlignmentRelation = useCallback( async (id) => {
    setIsLoading(true);
    setError(null);
    try{
      const response = await getAlignmentRelationId(id);
      if (response.relation) {
        const simplifiedReindeerData = response.relation.map(item => ({
          id: item.reindeerId,
          name: item.reindeer.name,
          order: item.order
        })).sort((a, b) => a.order - b.order);;
        console.log(simplifiedReindeerData);
        setReindeers(simplifiedReindeerData);
      } else {
        throw new Error('La respuesta no contiene datos de las alineaciones');
      }
    }catch(error){
      setError(error.message || 'Error desconocido');
    }
    finally{
      setIsLoading(false);
    }
    }, []);

  useEffect(() => {
    fetchAlignmentRelation();
  }, [fetchAlignmentRelation]);

  return {  isLoading, Error, fetchAlignmentRelation };
};