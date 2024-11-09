import { useState, useCallback } from 'react';
import { create } from '../../services/gpsServices'; 

export const useCreateAddress = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const isPending = status === 'pending';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  const mutate = useCallback(async (address) => {
    try {
      setData(null);
      setError(null);
      setStatus('pending');

      const response = await create({ address });
      setData(response);
      setStatus('success');
      return response;
    } catch (err) {
      setStatus('error');
      setError(err.response ? err.response.data : 'Error desconocido'); 
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