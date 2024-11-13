import {create} from 'zustand';

interface MenuFormData {
  image: File | null;
  name: string;
  price: string;
  description: string;
}

interface MenuStore {
  menuItems: MenuFormData[];
  addMenu: (menu: MenuFormData) => void;
  clearMenu: () => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  menuItems: [],
  addMenu: (menu) => set((state) => ({ menuItems: [...state.menuItems, menu] })),
  clearMenu: () => set({ menuItems: [] }),
}));