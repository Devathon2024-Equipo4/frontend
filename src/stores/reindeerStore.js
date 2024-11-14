import { create } from 'zustand';

const reindeerStore = create((set) => ({
  reindeers: [],
  setReindeers: (reindeers) => set({ reindeers }),
}));

export default reindeerStore;