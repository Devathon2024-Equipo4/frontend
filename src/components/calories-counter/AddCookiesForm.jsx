import { useForm } from "react-hook-form";
import { Input } from "../ui/input";

const defaultValues = {
  type: "",
  quantity: 0,
};

const AddCookiesForm = ({ handleSubmitForm, cookies }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleSubmitForm(data);
    reset(defaultValues);
  };
  return (
    <div className="flex flex-col-reverse md:flex-row justify-evenly gap-5 items-center">
      <form
        className=" w-full md:w-1/2 py-5 space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
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
            <span className="text-red-500 text-sm">{errors.type.message}</span>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="quantity" className="mb-5">
            Cantidad de galletas:
          </label>
          <Input
            type="number"
            placeholder="Cantidad"
            {...register("quantity", {
              valueAsNumber: true,
              required: "No olvides ingresar este campo",
              min: {
                value: 1,
                message: "El número mínimo de galletas es 1",
              },
              max: {
                value: 1000,
                message: "El número máximo de galletas es 1000",
              },
              pattern: {
                value: /^[1-9]\d*$/,
                message: "Solo se aceptan números enteros",
              },
            })}
          />
          {errors.quantity && (
            <span className="text-red-500 text-sm">
              {errors.quantity.message}
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
      <img src="/img/calories/cookies_add.png" alt="creating cookie" className="h-60" />
      </div>
    </div>
  );
};

export default AddCookiesForm;
