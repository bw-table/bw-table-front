import { END_POINT } from '@/constants/endPoint';
import { DB } from '@/mocks/db/db';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(END_POINT.EXAMPLE, () => {
    return HttpResponse.json(DB.example, {});
  }),
  // 예약 정보 POST 핸들러
  http.post(END_POINT.RESERVATION, (req) => {
    return HttpResponse.json(
      {
        message: '예약이 성공적으로 완료되었습니다.',
      },
      { status: 200 }
    );
  }),
];
  
