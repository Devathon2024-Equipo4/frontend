import { create } from 'zustand';

const letterStore = create((set) => ({
  data: [],
  loading: false,
  error: null,
  setData: (data) => set({ data }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

export default letterStore;