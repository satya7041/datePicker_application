// src/app/store/useStore.js
import {create} from 'zustand';

const useStore = create((set) => ({
  startDate: null,
  recurrence: { type: 'none', interval: 1, specificDays: [], nthDay: null },
  setStartDate: (date) => set({ startDate: date }),
  setRecurrence: (recurrence) => set({ recurrence }),
}));

export default useStore;
