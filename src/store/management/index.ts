import { createSelectors } from '@/store/creatSelectors';
import { createDateSlice } from '@/store/management/slice/dateSlice';
import { DateSlice } from '@/types';
import { create, StateCreator } from 'zustand';

export interface DateStore extends DateSlice {}

export const createDateStore: StateCreator<DateStore> = (...a) => ({
  ...createDateSlice(...a),
});

export const dateStoreBase = create<DateStore>()((...a) => ({
  ...createDateStore(...a),
}));

export const useDateStore = createSelectors(dateStoreBase);
