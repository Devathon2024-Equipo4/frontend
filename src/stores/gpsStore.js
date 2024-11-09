import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const GpsApi = (set) => ({
  addresses : [],
  coordinates: [],
  setAddresses: (newAddresses) => set({ addresses: newAddresses }, false, "SET_GPS_ADDRESSES"),
  setCoordinates: (newCoordinates) => set({ coordinates: newCoordinates }, false, "SET_GPS_COORDINATES"),
});

export const useGpsStore = create(
  devtools(
    persist(GpsApi, {
      name: "gps-store",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);