import { DateSlice } from '@/types';
import { StateCreator } from 'zustand';

export const createDateSlice: StateCreator<DateSlice> = (set) => ({
  date: new Date(),
  setDate: (date) => set(() => ({ date })),
});
