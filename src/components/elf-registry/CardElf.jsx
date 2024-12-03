import { useState } from "react";
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



export function CardElf() {
  const {
    isLoading: isLoadingElves,
    Error: ErrorElves,
    elves
  } = useGetElves();

  const toggleStatus = (id) => {
    setElves((prevElves) =>
      prevElves.map((elf) =>
        elf.id === id
          ? {
              ...elf,
              status: elf.status === "En nomina" ? "De baja" : "En nomina"
            }
          : elf
      )
    );
  };

  const handleToggleStatus = (id, status) => {
    if (status === "En nomina") {
      const confirm = window.confirm("¿Estás seguro de que deseas dar de baja a este empleado?");
      if (confirm) {
        toggleStatus(id);
      }
    } else {
      toggleStatus(id);
    }
  };

  if (isLoadingElves) {
    return (
      <div className=" flex flex-col items-center justify-center mx-4 w-full">
        <Loader className="animate-spin size-5 text-muted-foreground  " />
      </div>
    );
  }

  if (ErrorElves) {
    return (
      <div className=" flex items-center justify-center mx-4 w-full" >
        <TriangleAlertIcon className="size-5 mr-4 text-red-500" />
        {ErrorElves}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 font-DynaPuff">
      {elves.map((elf) => (
        <Card
          key={elf.id}
          className={`max-w-[350px] max-h-[350px] border-2 rounded-lg flex flex-col justify-between ${
            elf.status ===  "En nomina"
            ? "bg-loblolly/50 border-plantation shadow-plantation/50"
            : "bg-akaroa border-stiletto shadow-stiletto/50"
          }`}
        >
          <CardHeader>
            <CardTitle className="text-xl text-center">{elf.name}</CardTitle>
          </CardHeader>
          <CardContent className="text-donJuan text-sm">
            <p><span className="font-bold">Edad:</span> {elf.age}</p>
            <p><span className="font-bold">Dirección:</span> {elf.address}</p>
            <p><span className="font-bold">Estatura:</span> {elf.height} cm</p>
            <p><span className="font-bold">Correo Electrónico:</span> {elf.email}</p>
            <p><span className="font-bold">Status:</span> {elf.status}</p>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button
              variant={elf.status === "En nomina" ? "destructive" : "default"}
              onClick={() => handleToggleStatus(elf.id, elf.status)}
            >
              {elf.status === "En nomina" ? "Dar de Baja" : "Reingresar a la plantilla"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default CardElf;
