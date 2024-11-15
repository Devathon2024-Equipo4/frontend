import api from "@/utils/api";
import { URI_ALIGNMENTS } from "./endpoints";

export const getAlignments = async () => {
  try {
    const response = await api.get(URI_ALIGNMENTS);
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