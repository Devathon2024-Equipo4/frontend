import api from "@/utils/api";
import { URI_TOTAL_LETTERS, URI_UPDATE_LETTERS } from "./endpoints";

export const getTotalLetters = async () => {
  try {
    const response = await api.get(URI_TOTAL_LETTERS+"?limit=40");
    return response.data.letters;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const toggleLetterStatusAPI = async (id) => {
  try {""
    const response = await api.patch(URI_UPDATE_LETTERS+"/"+id);
    return response.data.letter;
  } catch (error) {
    throw new Error(error.message);
  }
};