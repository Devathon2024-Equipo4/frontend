import { create } from 'zustand';

const weatherStore = create((set) => ({
  weather: [],
  setWeather: (weather) => set({ weather }),
}));

export default weatherStore;