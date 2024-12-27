import { create } from 'zustand';


interface ReservationState {
  reservationData: any | null;
  setReservationData: (data: any) => void;
}

export const useReservationStore = create<ReservationState>((set) => ({
  reservationData: null,
  setReservationData: (data) => set({ reservationData: data }),
}));