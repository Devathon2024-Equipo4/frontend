import { createElf } from "@/services/elfService";
import { useState } from "react";
import { useCallback } from "react";


export const useCreateElf = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const isPending = status === "pending";
  const isSuccess = status === "success";
  const isError = status === "error";

  const mutate = useCallback(async(data,{onSuccess,onError}) =>{
    try {
      setError(null);
      setStatus("pending");

      const response = await createElf(data);
      setStatus("success");
      if(onSuccess){
        onSuccess(response);
      }
      return response;
    }
     
    catch (err) {
      setStatus("error");
      setError(err.response ? err.response.data: "Error Desconocido");
      if(onError){
        onError(error);
      }
      throw err;
    }
  },[])


  return { mutate, error, isPending, isSuccess, isError };
};