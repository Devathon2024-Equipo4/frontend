import { useEffect } from "react";
import { toast } from "sonner";
import {
  createCookieService,
  deleteCookieService,
  editCookieService,
  getCookieTypesService,
  getTotalCaloriesService,
  resetCaloriesService,
} from "@/services/caloriesServices";
import { useCaloriesStore } from "@/stores/caloriesStore";
import { useState } from 'react';
import { set } from "react-hook-form";

export const useCalories = () => {
  const { getTotals, getCookies, cookies } = useCaloriesStore();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tabValue, setTabValue] = useState("create");
  useEffect(() => {
    getTotalCalories();
  }, []);

  const getTotalCalories = async () => {
    setLoading(true);
      try {
        const cookies = await getTotalCaloriesService();
        getTotals(cookies);
      } catch (error) {
        console.error("Error al obtener las calorias:", error);
      } finally {
        setLoading(false);
      }
  };

  const getCookieTypes = async () => {
    setLoading(true);
    try {
      const cookies = await getCookieTypesService();
      getCookies(cookies.calories);
    } catch (error) {
      console.error("Error al obtener el catalogo de galletas:", error);
      toast.error("No se ha podido obtener el catalogo de galletas");
    } finally {
      setLoading(false);
    }
  };

  const handleChangeValueTab = async (value) => {
    setTabValue(value);
    if (value !== "create") {
      getCookieTypes();
    }
  };

  const handleSubmitCreateCookie = (data) => {
    setLoading(true);
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
    } finally {
      setLoading(false);
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
      setLoading(true);
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
      setLoading(false);
    }
  };

  const handleResetCalories = async () => {
    try {
      setLoading(true);
      const resp = await resetCaloriesService();
      if (resp) toast.success("Contador reiniciado con éxito");
      getTotalCalories();
    } catch (error) {
      console.error("Error al reiniciar el contador:", error);
      toast.error("No se ha podido reiniciar el contador");
      setLoading(false);
    }
  }

  const handleDeleteCookie = async (data) => {
    try {
      const cookie = cookies.find((cookie) => cookie.id === data.type);
      if (!cookie) {
        toast.error("No se ha encontrado la galleta");
        return;
      }
      setLoading(true);
      const resp = await deleteCookieService(cookie.id);
      if (resp) toast.success("Galleta eliminada con éxito");
      getTotalCalories();
      getCookieTypes();
    } catch (error) {
      console.error("Error al eliminar la galleta:", error);
      toast.error("No se ha podido eliminar la galleta");
      setLoading(false);
    }
    setOpenDeleteDialog(false);
  }

  const handleOpenDialog = () => {
    setOpenDeleteDialog(true);
  }

  const handleCloseDialog = () => {
    setOpenDeleteDialog(false);
  }

  return {
    handleChangeValueTab,
    handleSubmitCreateCookie,
    handleSubmitAddCookies,
    cookies,
    handleResetCalories,
    handleDeleteCookie,
    openDeleteDialog,
    handleCloseDialog,
    handleOpenDialog,
    loading,
    tabValue
  };
};
