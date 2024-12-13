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
import DialogEdit from "@/components/elf-registry/DialogEdit";
import { useState } from "react";

export function CardElf() {
  const { t } = useTranslation();
  const { getStatus, getGender } = useElfTranslation();
  const { isLoading: isLoadingElves, Error: ErrorElves, elves } = useGetElves();
  const { mutate: updateStatus, isPending: updatePending } = useUpdateStatus();

  const [open, setOpen] = useState(false);
  
  const handleDialog = (elf) => {
    setSelectedElf(elf);
    setOpen(true);
  };
  const [selectedElf, setSelectedElf] = useState(null);


  const Button = ({ variant, children, ...props }) => {
    const variantClass = {
      active: "bg-plantation hover:bg-plantation/50",
      inactive: "bg-stiletto hover:bg-stiletto/50",
    }[variant] || "";
  
    return (
      <button
        className={`flex gap-x-2 text-white border-donJuan hover:border-white max-w-[200px] justify-center border-2 py-2 px-4 mt-2 rounded-full ${variantClass}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  
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
      <div className=" flex items-center justify-center mx-4 h-[60vh] w-full">
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
    <div className="mt-10 font-DynaPuff grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 justify-items-center gap-6">
      {elves.map((elf) => (
        <Card
          key={elf.id}
          className={`max-w-[300px] max-h-[450px] border-2 rounded-lg flex flex-col justify-between shadow-lg card ${
            elf.status === "HIRED"
              ? "bg-loblolly/50 border-plantation shadow-plantation/50"
              : "bg-akaroa border-stiletto shadow-stiletto/50"
          }`}
        >
          <CardHeader>
          <CardTitle className="flex flex-wrap text-xl text-center">{elf.name}</CardTitle>
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

          <CardFooter className="flex flex-row flex-wrap justify-center content-center gap-2">
            <Button
              disabled={updatePending}
              variant={elf.status === "HIRED" ? "active" : "inactive"}
              onClick={() => toggleStatus(elf.id, elf.status)}
            >
              {elf.status === "HIRED" ? "Dar de Baja" : "Reincorporar"}
            </Button> 
            {/* <Button 
              variant="active"
              onClick={() => handleDialog(elf)}
            >
              Editar
            </Button> */}
          </CardFooter>
        </Card>
      ))}
        <DialogEdit 
          open={open} 
          setOpen={setOpen} 
          elf={selectedElf}
          className="align-end" />
    </div>
  );
}

export default CardElf;
