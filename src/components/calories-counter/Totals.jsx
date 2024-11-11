import AmountDisplay from "./AmountDisplay";
import { useCaloriesStore } from "@/stores/caloriesStore";

const Totals = () => {
  const totals = useCaloriesStore((state) => state.totals);
  return (
    <section className="p-5 flex items-center justify-center gap-10 bg-stiletto text-white text-center rounded-lg mt-10">
      <AmountDisplay label="Total de calorias" quantity={totals.calories} />
      <AmountDisplay label="Cantidad de galletas" quantity={totals.cookies} />
    </section>
  );
};

export default Totals;
