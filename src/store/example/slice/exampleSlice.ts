import {StateCreator} from 'zustand';
import {ExampleSlice} from '@/types';

export const createExampleSlice: StateCreator<ExampleSlice> = (set) => ({
  init: '',
  setData: () => set(() => ({init: 'data'})),
});
