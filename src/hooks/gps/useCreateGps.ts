import { useState, useCallback } from 'react';
import { create } from '../../services/gpsServices'; // Ajusta la ruta según tu estructura

export const useCreateAddress = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const isPending = status === 'pending';
  const isSuccess = status === 'success';
  const isError = status === 'error';
  const isSettled = status === 'settled';

  const mutate = useCallback(async (address) => {
    try {
      setData(null);
      setError(null);
      setStatus('pending');

      const response = await create({ address });
      setData(response);
      setStatus('success');
      return response;
    } catch (error) {
      setStatus('error');
      setError(error);
      throw error; 
    } finally {
      setStatus('settled');
    }
  }, []);

  return {
    mutate,
    data,
    error,
    isPending,
    isSuccess,
    isError,
    isSettled,
  };
};