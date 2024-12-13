import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "../ui/input";

const CreateCookiesForm = ({ handleSubmitForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleSubmitForm(data);
    reset();
  };

  const onSubmitFail = (errors) => {
    console.error("Error al enviar el formulario: ", errors);
    toast.error("Verifica los datos y vuelve a intentarlo");
  };

  return (
    <div className="flex flex-col-reverse md:flex-row justify-evenly gap-5 items-center">
      <form
        className=" w-full md:w-1/2 py-5 space-y-5"
        onSubmit={handleSubmit(onSubmit, onSubmitFail)}
      >
        <div className="space-y-2">
          <label htmlFor="name">Nombre de la galleta:</label>
          <Input
            type="text"
            placeholder="Nombre de la galleta"
            {...register("name", {
              required: "No olvides ingresar este campo",
              maxLength: {
                value: 20,
                message: "Ups!. Has superado el número de caracteres",
              },
              pattern: {
                value: /^(?!\s*$).+/,
                message: "Debes capturar un nombre",
              },
            })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="quantity">Calorias por galleta: </label>
          <Input
            type="number"
            placeholder="Calorias"
            {...register("calories", {
              valueAsNumber: true,
              required: "No olvides ingresar este campo",
              min: {
                value: 1,
                message: "El número mínimo de calorias es 1",
              },
              max: {
                value: 1000,
                message: "El número máximo de calorias es 1000",
              },
              pattern: {
                value: /^[1-9]\d*$/,
                message: "Solo se aceptan números enteros",
              },
            })}
          />
          {errors.calories && (
            <span className="text-red-500 text-sm">
              {errors.calories.message}
            </span>
          )}
        </div>
        <div className="">
          <Input
            type="submit"
            value="Guardar"
            className="bg-plantation text-white hover:cursor-pointer hover:opacity-85"
          />
        </div>
      </form>
      <div>
        <img src="/img/calories/cookies_chef.png" alt="creating cookie" className="h-60" />
      </div>
    </div>
  );
};

export default CreateCookiesForm;
