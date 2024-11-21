import { getChildById, getTotalChildren, updateChild, updateStatusChild } from "@/services/childrenBehaviorService";
import childrenStore from "@/stores/childrenStore";

export const useChildren = () => {
  const {
    data,
    loading,
    loadingChild,
    error,
    selectedChild,
    setData,
    setLoading,
    setLoadingChild,
    setError,
    setSelectedChild,
  } = childrenStore();

  const loadChildren = async () => {
    setLoading(true);
    try {
      const children = await getTotalChildren();
      setData(children);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getChild = async (id) => {
    setLoadingChild(true);
    try {
      // const childFromStore = data.find((child) => child.id === id);
      // if (childFromStore) {
      //   setSelectedChild(childFromStore);
      //   return childFromStore;
      // }
      const child = await getChildById(id);
      setSelectedChild(child);
      return child;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoadingChild(false);
    }
  };

  const updateStatusChildById = async (id) => {
    setLoadingChild(true);
    try {
      // Llamada a la API para actualizar el estado del niño
      await updateStatusChild(id);
  
      // Obtener el niño actualizado desde la API
      const updatedChild = await getChild(id);
  
      // Actualizar localmente el niño en la lista de `data`
      const updatedData = data.map((child) =>
        child.id === id ? updatedChild : child
      );
      setData(updatedData);
  
      // Si el niño actualizado es el seleccionado, actualiza también su estado
      if (selectedChild && selectedChild.id === id) {
        setSelectedChild(updatedChild);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoadingChild(false);
    }
  };

  const editChild = async(id, child) =>{
    setLoadingChild(true);
    try {
      const childEdited = await updateChild(id, child);
      setSelectedChild(childEdited);
      return childEdited;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoadingChild(false);
    }
  }

  return {
    data,
    selectedChild,
    setSelectedChild,
    loading,
    loadingChild,
    error,
    loadChildren,
    getChild,
    updateStatusChildById,
    editChild
  };
};