import api from "@/utils/api";
import { URI_WEATHER } from "./endpoints";
import { handleError } from "@/utils/errorHandler";


export const getWeather = async (query) => {
  try{
    const response = await api.get(`${URI_WEATHER}/${query}`);
    return response.data;
  }catch(error){
    handleError(error);
  } 

};