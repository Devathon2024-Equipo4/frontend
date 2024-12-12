import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetElves } from "@/hooks/elves/useGetElves";
import { Loader } from "lucide-react";
import { TriangleAlertIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useElfTranslation } from "./useElfTranslation";
import { useUpdateStatus } from "@/hooks/elves/useUpdateStatus";
import { toast } from "sonner";

export function CardElf() {
  const { t } = useTranslation();
  const { getStatus, getGender } = useElfTranslation();
  const { isLoading: isLoadingElves, Error: ErrorElves, elves } = useGetElves();
  const { mutate: updateStatus, isPending: updatePending } = useUpdateStatus();

  const toggleStatus = async (id, status) => {
    const newStatus = (status === "HIRED") ? "FIRED" : "HIRED";
    const data = {
      id: id,
      status: newStatus
    }
    await updateStatus(data,{
      onSuccess: () => {
        toast.success("El elfo se ha actualizado");
      },
      onError: () => {
        toast.error("Error al actualizar el elfo");
      },
    })
  };

  if (isLoadingElves) {
    return (
      <div className=" flex items-center justify-center mt-[20%] h-full w-full overflow-hidden">
        <Loader className="animate-spin size-5 text-muted-foreground " />
      </div>
    );
  }

  if (ErrorElves) {
    return (
      <div className=" flex items-center justify-center mt-[20%] h-full w-full overflow-hidden">
        <TriangleAlertIcon className="size-5 mr-4 text-red-500" />
        {ErrorElves}
      </div>
    );
  }

  return (
    <div className="mt-10 font-DynaPuff grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mx-auto ">
      {elves.map((elf) => (
        <Card
          key={elf.id}
          className={`max-w-[350px] max-h-[350px] border-2 rounded-lg flex flex-col justify-between card ${
            elf.status === "HIRED"
              ? "bg-loblolly/50 border-plantation shadow-plantation/50"
              : "bg-akaroa border-stiletto shadow-stiletto/50"
          }`}
        >
          <CardHeader>
            <CardTitle className="text-xl text-center">{elf.name}</CardTitle>
          </CardHeader>

          <CardContent className="text-donJuan text-sm   ">
            <p>
              <span className="font-bold">Edad:</span> {elf.age}
            </p>
            <p>
              <span className="font-bold">Genero:</span> {getGender(elf.gender)}
            </p>
            <p>
              <span className="font-bold">Dirección:</span> {elf.address}
            </p>
            <p>
              <span className="font-bold">Estatura:</span> {elf.stature} cm
            </p>
            <p>
              <span className="font-bold">Correo Electrónico:</span> {elf.email}
            </p>
            <p>
              <span className="font-bold">Status:</span> {getStatus(elf.status)}
            </p>
          </CardContent>

          <CardFooter className="flex flex-col">
            <Button
              disabled = {updatePending}
              variant={elf.status === "HIRED" ? "destructive" : "default"}
              onClick={() => toggleStatus(elf.id, elf.status)}
            >
              {elf.status === "HIRED"
                ? "Dar de Baja"
                : "Reingresar a la plantilla"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default CardElf;
