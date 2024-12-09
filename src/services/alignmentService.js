import api from "@/utils/api";
import { URI_ALIGNMENTS } from "./endpoints";
import { handleError } from "@/utils/errorHandler"; 

export const getAlignments = async () => {
  try {
    const response = await api.get(URI_ALIGNMENTS);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};  

export const createAlignment = async (name) => {
  try {
    const response = await api.post(URI_ALIGNMENTS, name);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const removeAlignment = async (id) => {
  try {
    const response = await api.delete(`${URI_ALIGNMENTS}/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateAlignment = async (data) => {
    try {
      const { id, name } = data.data;
      
      const response = await api.put(`${URI_ALIGNMENTS}/${id}`, { name });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  };  