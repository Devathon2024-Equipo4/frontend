import { useEffect } from "react";
import { toast } from "sonner";
import {
  createCookieService,
  editCookieService,
  getCookieTypes,
  getTotalCaloriesService,
} from "@/services/caloriesServices";
import { useCaloriesStore } from "@/stores/caloriesStore";

export const useCalories = () => {
  const { getTotals, getCookies, cookies } = useCaloriesStore();
  useEffect(() => {
    getTotalCalories();
  }, []);

  const getTotalCalories = async () => {
    try {
      const cookies = await getTotalCaloriesService();
      getTotals(cookies);
    } catch (error) {
      console.error("Error al obtener las calorias:", error);
    }
  };

  const handleChangeValueTab = async (value) => {
    if (value === "add") {
      try {
        const cookies = await getCookieTypes();
        getCookies(cookies.calories);
      } catch (error) {
        console.error("Error al obtener el catalogo de galletas:", error);
        toast.error("No se ha podido obtener el catalogo de galletas");
      }
    }
  };

  const handleSubmitCreateCookie = (data) => {
    try {
      const reqBody = {
        name: data.name?.trim(),
        quantity: 0,
        calories: +data.calories,
      };
      const resp = createCookieService(reqBody);
      if (resp) toast.success("Galleta creada con éxito");
    } catch (error) {
      console.error("Error al crear la galleta:", error);
      toast.error("No se ha podido crear la galleta");
    }
  };

  const handleSubmitAddCookies = async (data) => {
    try {
      const { type, quantity } = data;
      const cookie = cookies.find((cookie) => cookie.id === type);
      if (!cookie) {
        toast.error("No se ha encontrado la galleta");
        return;
      }
        const reqBody = {
          id: cookie.id,
          name: cookie.name,
          quantity: +quantity,
          calories: cookie.calories,
        }
        const resp = await editCookieService(cookie.id, reqBody);
        if (resp) toast.success("Galleta agregada con éxito");
        getTotalCalories();
    } catch (error) {
      console.error("Error al agregar la galleta:", error);
      toast.error("No se ha podido agregar la galleta");
    }
  };

  return {
    handleChangeValueTab,
    handleSubmitCreateCookie,
    handleSubmitAddCookies,
    cookies,
  };
};
