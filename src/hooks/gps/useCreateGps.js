import { useState, useCallback } from 'react';
import { create } from '@/services/gpsServices'; 
import { useGpsStore } from "@/stores/gpsStore";

export const useCreateAddress = () => {
  const setCoordinates = useGpsStore((state) => state.setCoordinates);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const isPending = status === 'pending';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  const mutate = useCallback(async (address,{ onSuccess, onError }) => {
    try {
      setData(null);
      setError(null);
      setStatus('pending');

      const response = await create({ address });
      setData(response);
      setCoordinates(response.coordinates);
      setStatus('success');
      if (onSuccess) {
        onSuccess(response);
      }
      return response;
    } catch (err) {
      setStatus('error');
      setError(err.response ? err.response.data : 'Error desconocido'); 
      if (onError) {
        onError(err);
      }
      throw err; 
    } 
  }, []);

  return {
    mutate,
    data,
    error,
    isPending,
    isSuccess,
    isError,
  };
};