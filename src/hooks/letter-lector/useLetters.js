import letterStore from "@/stores/letterStore";
import { getTotalLetters, toggleLetterStatusAPI } from "@/services/lettersServices";
import { useState } from "react";

export const useLetters = () => {
  const { data, loading, error, setData, setLoading, setError } = letterStore();
  const [loadingItems, setLoadingItems] = useState({});

  const loadLetters = async () => {
    setLoading(true);
    try {
      const letters = await getTotalLetters();
      setData(letters);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (id) => {
    setLoadingItems((prev) => ({ ...prev, [id]: true }));
    try {
      const updatedLetter = await toggleLetterStatusAPI(id);
      setData(
        data.map((item) =>
          item.id === updatedLetter.id ? updatedLetter : item
        )
      );
    } catch (error) {
      console.error("Error al actualizar el estado:", error);
    } finally {
      setLoadingItems((prev) => ({ ...prev, [id]: false }));
    }
  };

  return { data, loading, error, loadLetters, toggleStatus, loadingItems };
};