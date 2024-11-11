import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const GpsApi = (set) => ({
  addresses : [],
  coordinates: [],
  position: [51.505, -0.09],
  setAddresses: (newAddresses) => set({ addresses: newAddresses }, false, "SET_GPS_ADDRESSES"),
  setCoordinates: (newCoordinates) => set({ coordinates: newCoordinates }, false, "SET_GPS_COORDINATES"),
  setPosition: (newPosition) => set({ position: newPosition }, false, "SET_GPS_POSITION"),
});

export const useGpsStore = create(
  devtools(
    persist(GpsApi, {
      name: "gps-store",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);