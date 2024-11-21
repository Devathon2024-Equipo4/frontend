import { create } from 'zustand';

const childrenStore = create((set) => ({
  data: [],
  loading: false,
  loadingChild: false, 
  error: null,
  selectedChild: null,
  setData: (data) => set({ data }),
  setLoading: (loading) => set({ loading }),
  setLoadingChild: (loadingChild) => set({ loadingChild }),
  setError: (error) => set({ error }),
  setSelectedChild: (child) => set({ selectedChild: child }),
}));

export default childrenStore;