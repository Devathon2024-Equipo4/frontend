import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const reindeerStore = create(devtools((set) => ({
  reindeers: [],
  setReindeers: (reindeers) => set({ reindeers }),
}),{name: 'ReindeerStore'}));

export default reindeerStore;