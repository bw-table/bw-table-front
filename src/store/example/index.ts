import {ExampleSlice} from '@/types';
import {create, StateCreator} from 'zustand';
import {createSelectors} from '@/store/creatSelectors';
import {createExampleSlice} from '@/store/example/slice/exampleSlice';

export interface ExampleStore extends ExampleSlice {}

export const createExampleStore: StateCreator<ExampleStore> = (...a) => ({
  ...createExampleSlice(...a),
});

export const exampleStoreBase = create<ExampleStore>()((...a) => ({
  ...createExampleStore(...a),
}));

export const useExampleStore = createSelectors(exampleStoreBase);
