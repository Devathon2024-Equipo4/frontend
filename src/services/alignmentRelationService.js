import api from "@/utils/api";
import { URI_ALIGNMENT_RELATION } from "./endpoints";

export const createAlignmentRelation = async (data) => {
  try {
    const response = await api.post(URI_ALIGNMENT_RELATION, data);
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

export const getAlignmentRelationId = async (id) => {
  try {
    const response = await api.get(`${URI_ALIGNMENT_RELATION}/${id}`);
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

export const removeAlignmentRelation = async (id) => {
  try {
    const response = await api.delete(`${URI_ALIGNMENT_RELATION}/${id}`);
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

export const updateAlignmentRelation = async (data) => {
  try {
    const response = await api.put(URI_ALIGNMENT_RELATION, data);
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