import { DuplicateSlice } from '@/types';
import { StateCreator } from 'zustand';

const initialState = {
  isEmailDuplicate: false,
  isNicknameDuplicate: false,
  isTelDuplicate: false,
  isBusinessDuplicate: false,
};

export const createDuplicateSlice: StateCreator<DuplicateSlice> = (set) => ({
  ...initialState,

  setEmailDuplicate: (value: boolean) =>
    set(() => ({ isEmailDuplicate: value })),

  setNicknameDuplicate: (value: boolean) =>
    set(() => ({ isNicknameDuplicate: value })),

  setTelDuplicate: (value: boolean) => set(() => ({ isTelDuplicate: value })),

  setBusinessDuplicate: (value: boolean) =>
    set(() => ({ isBusinessDuplicate: value })),

  resetDuplicateStates: () => set(initialState),
});
