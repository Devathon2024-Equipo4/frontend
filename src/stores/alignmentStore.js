import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const alignmentStore = create(devtools((set) => ({
  alignments: [],
  setAlignments: (alignments) => set({ alignments }),
}),{name: 'AlignmentStore'}));

export default alignmentStore;