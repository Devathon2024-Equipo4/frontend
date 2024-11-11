import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initialState = {
  totals: {
    calories: 0,
    cookies: 0,
  },
  cookies: [],
};

export const useCaloriesStore = create(
  devtools((set) => ({
    totals: initialState.totals,
    cookies: initialState.cookies,
    getTotals: (data) =>
      set({
        totals: {
          calories: data.totalCalories,
          cookies: data.totalQuantity,
        },
      }),
    getCookies: (data) => set(() => ({ cookies: data })),
  }))
);
