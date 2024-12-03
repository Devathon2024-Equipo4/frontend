import api from "@/utils/api";
import { URI_ELVES } from "./endpoints";
import { handleError } from "@/utils/errorHandler";

export const getElves = async () => {
  try{
    const response = await api.get(URI_ELVES);
    return response.data;
  } catch (error) {
    handleError(error);
  } 
};

export const createElf = async (data) => {

  try {
   
    const response = await api.post(URI_ELVES, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateStatus = async (id,status) => {
  try {
    
    const response = await api.put(`${URI_ELVES}/${id}`, { status });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};