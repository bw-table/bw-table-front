import { DB } from '@/mocks/db/db';

export type ExampleType = (typeof DB)['example'][0];

export type ReservationType = (typeof DB)['reservations'][0];
