import api from "@/utils/api";
import { URI_TOTAL_CALORIES } from "./endpoints";

export const getTotalCalories =() => api.get(URI_TOTAL_CALORIES);