import { createSelectors } from '@/store/creatSelectors';
import { DuplicateSlice } from '@/types';
import { create, StateCreator } from 'zustand';
import { createDuplicateSlice } from './slice/duplicateSlice';

export interface DuplicateStore extends DuplicateSlice {}

export const createAuthStore: StateCreator<DuplicateStore> = (...a) => ({
  ...createDuplicateSlice(...a),
});

export const authStoreBase = create<DuplicateStore>()((...a) => ({
  ...createAuthStore(...a),
}));

export const useAuthStore = createSelectors(authStoreBase);
