import api from "@/utils/api";
import { URI_GPS } from "./endpoints";

export const create = async ({ address }) => {
  try{
    const response = await api.post(URI_GPS, { address });
    return response.data;
  }catch(error){
    if (error.response) {
      throw new Error(error.response.data.message || 'Error en la respuesta del servidor');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error en la configuración de la solicitud: ' + error.message);
    }
  } 

};

export const getRecent = async() => {
  try{
    const response = await api.get(URI_GPS);
    return response.data;
  }catch(error){
    if (error.response) {
      throw new Error(error.response.data.message || 'Error en la respuesta del servidor');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error en la configuración de la solicitud: ' + error.message);
    }
  } 

};