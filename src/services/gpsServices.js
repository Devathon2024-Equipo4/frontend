import api from "@/utils/api";
import { URI_GPS } from "./endpoints";
import { handleError } from "@/utils/errorHandler";

export const create = async ({ address }) => {
  try{
    const response = await api.post(URI_GPS, { address });
    return response.data;
  }catch(error){
    handleError(error);
  } 

};

export const getRecent = async() => {
  try{
    const response = await api.get(URI_GPS);
    return response.data;
  }catch(error){
    handleError(error);
  }
};