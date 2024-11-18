import { useForm } from "react-hook-form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { useState } from "react";

const defaultValues = {
  type: "",
};

const DeleteCookiesForm = ({
  cookies,
  handleSubmitForm,
  open,
  handleCloseDialog,
  handleOpenDialog,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleOpenDialog();
  };

  const handleConfirmSubmit = () => {
    handleSubmitForm(getValues());
    reset(defaultValues);
  };
  return (
    <div>
      <AlertDialog open={open}>
        <AlertDialogTrigger asChild>
          <form className="mx-auto w-full md:w-1/2 py-10 space-y-5">
            <div className="space-y-2 flex flex-col">
              <label htmlFor="type">Tipo de galleta:</label>
              <select
                {...register("type", {
                  required: "Este campo es requerido",
                })}
                placeholder="Tipo de galleta"
                defaultValue=""
                className="p-2"
                id="type"
                name="type"
              >
                <option value="" disabled defaultChecked>
                  Selecciona un tipo de galleta
                </option>
                {cookies &&
                  cookies.map((cookie) => (
                    <option key={cookie.id} value={cookie.id}>
                      {cookie.cookiesName}
                    </option>
                  ))}
              </select>
              {errors.type && (
                <span className="text-red-500 text-sm">
                  {errors.type.message}
                </span>
              )}
            </div>
            <Button
              className="bg-plantation text-white hover:cursor-pointer hover:opacity-85 w-full"
              onClick={handleSubmit(onSubmit)}
            >
              Eliminar galleta
            </Button>
          </form>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-baliHai text-black font-DynaPuff">
          <AlertDialogHeader>
            <AlertDialogTitle>Eliminar galleta</AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col text-black">
              <span>¿Estás seguro de que quieres eliminar la galleta?</span>
              <span>Se perderán la cantidad y calorías</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCloseDialog}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmSubmit}>
              Confirmar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteCookiesForm;
