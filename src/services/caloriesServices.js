import api from "@/utils/api";
import { URI_TOTAL_CALORIES } from "./endpoints";

export const getTotalCalories = async () => {
  let data = null;
  let error = null;
  try {
    const response = await api.get(URI_TOTAL_CALORIES);
    data = response.data;
  } catch (e) {
    error = e;
  } finally {
    return { data, error };
  }
};
