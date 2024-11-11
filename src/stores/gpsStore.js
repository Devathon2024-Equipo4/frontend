import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const GpsApi = (set) => ({
  ipDetails: [],
  latitude: 0.00,
  longitude: 0.00, 
  addresses : [],
  coordinates: [],
  position: [51.505, -0.09],
  setAddresses: (newAddresses) => set({ addresses: newAddresses }, false, "SET_GPS_ADDRESSES"),
  setCoordinates: (newCoordinates) => set({ coordinates: newCoordinates }, false, "SET_GPS_COORDINATES"),
  setPosition: (newPosition) => set({ position: newPosition }, false, "SET_GPS_POSITION"),
  setIpDetails: (newIpDetails) => set({ ipDetails: newIpDetails }, false, "SET_GPS_IP_DETAILS"),
  setLatitude: (newLatitude) => set({ latitude: newLatitude }, false, "SET_GPS_LATITUDE"),
  setLongitude: (newLongitude) => set({ longitude: newLongitude }, false, "SET_GPS_LONGITUDE"),
});

export const useGpsStore = create(
  devtools(
    persist(GpsApi, {
      name: "gps-store",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);