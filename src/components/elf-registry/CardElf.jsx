import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

//Datos de prueba
const initialElves = [
  { id: 1, name: "Snowball Alabastro", age: 18, address: "Bosque Encantado #123", height: 120, email: "snowball@santa.com", status: "En nomina" },
  { id: 2, name: "Jingle McSprinkle", age: 22, address: "Colina Nevada #42", height: 115, email: "jingle@santa.com", status: "En nomina" },
  { id: 3, name: "Twinkle Frostypaws", age: 19, address: "Camino Estrella #5", height: 118, email: "twinkle@santa.com", status: "En nomina" },
  { id: 4, name: "Sparkle Sugarplum", age: 21, address: "Villa Mágica #77", height: 122, email: "sparkle@santa.com", status: "En nomina" },
  { id: 5, name: "Peppermint Snowspark", age: 25, address: "Sendero de Hadas #99", height: 116, email: "peppermint@santa.com", status: "En nomina" },
  { id: 6, name: "Bells Tinkertoes", age: 20, address: "Bosque Festivo #14", height: 119, email: "bells@santa.com", status: "En nomina" },
  { id: 7, name: "Glimmer Twinkletop", age: 23, address: "Calle Copo de Nieve #8", height: 117, email: "glimmer@santa.com", status: "De baja" },
  { id: 8, name: "Cinnamon Glitterfoot", age: 24, address: "Avenida Navidad #101", height: 121, email: "cinnamon@santa.com", status: "En nomina" },
  { id: 9, name: "Chestnut Jingleberry", age: 18, address: "Cabaña Inviernal #33", height: 114, email: "chestnut@santa.com", status: "De baja" },
  { id: 10, name: "Frost Hollybloom", age: 22, address: "Camino de Luz #202", height: 123, email: "frost@santa.com", status: "En nomina" }
];

export function CardElf() {
  const [elves, setElves] = useState(initialElves);

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
//Mensaje de confirmación para el usuario que debe ser sustituido
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 font-DynaPuff">
      {elves.map((elf) => (
        <Card
          key={elf.id}
          className={`max-w-[350px] max-h-[350px] border-2 rounded-lg flex flex-col justify-between ${
            elf.status ===  "En nomina"
            ? "bg-green-200 border-green-800 text-green-800"
            : "bg-red-200 border-red-800 text-red-700"
          }`}
        >
          <CardHeader>
            <CardTitle className="text-xl text-center">Empleado #{elf.id}</CardTitle>
          </CardHeader>
          <CardContent className="text-donJuan text-sm">
            <p><span className="font-bold">Nombre:</span> {elf.name}</p>
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
