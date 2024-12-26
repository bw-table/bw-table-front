import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';

interface ReservationState {
  reservationData: {
    restaurant?: any;
    reservation?: any;
  } | null;
  setReservationData: (data: { restaurant: any; reservation: any }) => void;
  clearReservationData: () => void;
}

// persist의 타입을 정의
type ReservationPersist = (
  config: StateCreator<ReservationState>,
  options: PersistOptions<ReservationState>
) => StateCreator<ReservationState>;

export const useReservationStore = create<ReservationState>(
  (persist as ReservationPersist)(
    (set) => ({
      reservationData: null,
      setReservationData: (data) => set({ reservationData: data }),
      clearReservationData: () => set({ reservationData: null }),
    }),
    {
      name: 'reservation-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
