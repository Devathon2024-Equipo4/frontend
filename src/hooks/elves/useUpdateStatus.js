import { updateStatus } from "@/services/elfService";
import { useState } from "react";
import { useCallback } from "react";
import  elvesStore  from "@/stores/elvesStore";


export const useUpdateStatus = () => {
  const setElf = elvesStore((state) => state.setElf);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const isPending = status === "pending";
  const isSuccess = status === "success";
  const isError = status === "error";

  const mutate = useCallback(async(data,{onSuccess,onError}) =>{
    try {
      setError(null);
      setStatus("pending");
      console.log(data)
      const response = await updateStatus(data.id,data.status);
      setStatus("success");
      if(onSuccess){
        onSuccess(response);
        setElf(response.elf);
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