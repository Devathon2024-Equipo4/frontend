import api from "@/utils/api";
import { URI_LETTERS } from "./endpoints";

export const getTotalLetters = async () => {
  try {
    const response = await api.get(URI_LETTERS+"?limit=40");
    return response.data.letters;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const toggleLetterStatusAPI = async (id) => {
  try {""
    const response = await api.patch(URI_LETTERS+"/readLetter/"+id);
    return response.data.letter;
  } catch (error) {
    throw new Error(error.message);
  }
};