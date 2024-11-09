import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const GpsApi = (set) => ({
  addresses : [],
  address: "",
  setAddress: (value) => set({ address: value }, false, "SET_GPS_ADDRESS"),
  setAddresses: (newAddresses) => set({ addresses: newAddresses }, false, "SET_GPS_ADDRESSES"),
});

export const useGpsStore = create(
  devtools(
    persist(GpsApi, {
      name: "gps-store",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);