import api from "@/utils/api";
import { URI_COOKIES, URI_TOTAL_CALORIES } from "./endpoints";

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

export const getCookieTypes = async () => {
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
