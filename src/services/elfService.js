import api from "@/utils/api";
import { URI_ELVES } from "./endpoints";

export const getElves = async () => {
  try{
    const response = await api.get(URI_ELVES);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Error en la respuesta del servidor');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error en la configuración de la solicitud: ' + error.message);
    }
  } 
};

export const createElf = async (data) => {

  try {
   
    const response = await api.post(URI_ELVES, data);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Error en la respuesta del servidor');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error en la configuración de la solicitud: ' + error.message);
    }
  }
};

export const updateElf = async (data) => {
  try {
    const { id, name, age, address, height, email } = data.data;
    const response = await api.put(`${URI_ELVES}/${id}`, { name, age, address, height, email });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Error en la respuesta del servidor');
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor');
    } else {
      throw new Error('Error en la configuración de la solicitud: ' + error.message);
    }
  }
};