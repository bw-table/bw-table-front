import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

export interface RootStore {}

export const useStore = create<RootStore>()(
  devtools(persist((...a) => ({}), {name: 'root-store'})),
);
