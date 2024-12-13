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
import { Button } from "@/components/ui/button";
import AmountDisplay from "./AmountDisplay";
import { useCaloriesStore } from "@/stores/caloriesStore";
import { useMemo } from "react";

const Totals = ({ handleResetCalories }) => {
  const totals = useCaloriesStore((state) => state.totals);
  const isResetDisabled = useMemo(() => totals.calories === 0, [totals]);
  return (
    <section className="text-white text-center">
      <div className="bg-stiletto rounded-lg mb-5 shadow-xl">
      <div className="flex flex-col sm:flex-row items-center justify-evenly gap-10 mt-10 p-2">
        <AmountDisplay label="Calorías" quantity={totals.calories} img={"/calories/santa_calories.png"} />
        <AmountDisplay label="Galletas" quantity={totals.cookies} img={"/calories/santa_cookies.png"} />
      </div>
      </div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="mb-5 bg-plantation" disabled={isResetDisabled}>
            Restablecer contador
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-baliHai text-black font-DynaPuff">
          <AlertDialogHeader>
            <AlertDialogTitle>Reestablecer contador</AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col text-black">
              <span>
                ¿Estás seguro de que quieres restablecer el contador?
              </span>
              <span>Santa Claus puede quedarse sin energía</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleResetCalories}>
              Confirmar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default Totals;
