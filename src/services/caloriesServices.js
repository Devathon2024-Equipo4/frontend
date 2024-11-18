import api from "@/utils/api";
import { URI_COOKIES, URI_RESET_CALORIES, URI_TOTAL_CALORIES } from "./endpoints";

export const getTotalCaloriesService = async () => {
  try {
    const response = await api.get(URI_TOTAL_CALORIES);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Unknown error');
  }
};

export const createCookieService = async (data) => {
  try {
    const response = await api.post(URI_COOKIES, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Unknown error');
  }
}

export const getCookieTypesService = async () => {
  try {
    const response = await api.get(URI_COOKIES);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Unknown error');
  }
}

export const editCookieService = async (id, data) => {
  try {
    const response = await api.put(`${URI_COOKIES}/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Unknown error');
  }
}

export const resetCaloriesService = async () => {
  try {
    const response = await api.get(URI_RESET_CALORIES);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Unknown error');
  }
}

export const deleteCookieService = async (id) => {
  try {
    const response = await api.delete(`${URI_COOKIES}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Unknown error');
  }
}
