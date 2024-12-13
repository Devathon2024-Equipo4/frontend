import { removeAlignmentRelation } from "@/services/alignmentRelationService";
import { useCallback } from "react";
import { useState } from "react";


export const useRemoveAlignmentRelation = () => {
  const [Error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const isPending = status === "pending";
  const isSuccess = status === "success";
  const isError = status === "error";
  
  const mutate = useCallback(async(obj,{onSuccess,onError}) => {
    try{
      setError(null);
      setStatus("pending");
      const response = await removeAlignmentRelation(obj.id);
      setStatus("success");
      if(onSuccess){
        onSuccess(response);
      }
      return response;
    }catch(err){
      setStatus("error");
      setError(err.response ? err.response.data : "Error desconocido");
      if(onError){
        onError(err);
        throw err;
      }
    }
  }, []) ;
  return { mutate, Error, isPending, isSuccess, isError };
};