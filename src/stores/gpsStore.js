import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const GpsApi = (set) => ({
  addresses : [],
  address: "",
  setAddress: (value) => set({ address: value }, false, "SET_GPS_ADDRESS"),
  addAddress: (newAddress) => set((state) => ({
    addresses: [...state.addresses, newAddress] 
  }), false, "ADD_GPS_ADDRESS"),
});

export const useGPSStore = create(
  devtools(
    persist(GpsApi, {
      name: "gps-store",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);