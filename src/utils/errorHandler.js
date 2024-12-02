export const handleError = (error) => {
  if (error.response) {
    throw new Error(error.response.data.message || 'Error en la respuesta del servidor');
  } else if (error.request) {
    throw new Error('No se recibió respuesta del servidor');
  } else {
    throw new Error('Error en la configuración de la solicitud: ' + error.message);
  }
};