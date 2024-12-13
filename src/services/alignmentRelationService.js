import api from "@/utils/api";
import { URI_ALIGNMENT_RELATION } from "./endpoints";
import { handleError } from "@/utils/errorHandler";

export const createAlignmentRelation = async (data) => {
  try {
    const response = await api.post(URI_ALIGNMENT_RELATION, data);
    return response.data;
  } catch (error) {
    handleError(error);
  } 

};

export const getAlignmentRelationId = async (id) => {
  try {
    const response = await api.get(`${URI_ALIGNMENT_RELATION}/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const removeAlignmentRelation = async (id) => {
  try {
    const response = await api.delete(`${URI_ALIGNMENT_RELATION}/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateAlignmentRelation = async (data) => {
  try {
    const response = await api.put(URI_ALIGNMENT_RELATION, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};