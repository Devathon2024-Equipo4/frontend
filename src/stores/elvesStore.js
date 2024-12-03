import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const elvesStore = create(devtools((set) => ({
  elves: [],
  setElves: (elves) => set({ elves }),
  setElf: (updatedElf) => set((state) => ({
    elves: state.elves.map(elf =>
      elf.id === updatedElf.id ? updatedElf : elf
    )
  })),
}), { name: 'ElvesStore' }));

export default elvesStore;