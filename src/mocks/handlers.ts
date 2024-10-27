import { END_POINT } from '@/constants/endPoint';
import { DB } from '@/mocks/db/db';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(END_POINT.EXAMPLE, () => {
    return HttpResponse.json(DB.example, {});
  }),
];
