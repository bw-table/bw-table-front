import { END_POINT } from '@/constants/endPoint';
import { DB } from '@/mocks/db/db';
import { SignInRequestType, SignUpRequestType } from '@/types';
import { http, HttpResponse } from 'msw';

const isFirstCall = true;

export const handlers = [
  http.get(END_POINT.EXAMPLE, () => {
    return HttpResponse.json(DB.example, {});
  }),
  // 예약 정보 POST 핸들러
  http.post(END_POINT.RESERVATIONS, (req) => {
    return HttpResponse.json(
      {
        message: '예약이 성공적으로 완료되었습니다.',
      },
      { status: 200 },
    );
  }),
  // 가게 등록 POST 핸들러
  http.post(END_POINT.NEW_RESTAURANTS, (req) => {
    return HttpResponse.json(
      {
        message: '예약이 성공적으로 완료되었습니다.',
      },
      { status: 200 },
    );
  }),

  // 나의 예약 GET 핸들러
  http.get(END_POINT.RESERVATIONS, async ({ request }) => {
    const url = new URL(request.url);
    const { searchParams } = url;

    const page = searchParams.get('page');
    const size = searchParams.get('size');
    const restaurantId = searchParams.get('restaurantId');
    const memberId = searchParams.get('memberId');
    const reservationStatus = searchParams.get('reservationStatus');
    const reservationDate = searchParams.get('reservationDate');
    const reservationTime = searchParams.get('reservationTime');

    // 필터링 로직
    const filteredReservations = DB.reservations.filter((reservation) => {
      return (
        (!restaurantId || reservation.restaurantId === Number(restaurantId)) &&
        (!memberId || reservation.memberId === Number(memberId)) &&
        (!reservationStatus ||
          reservation.reservationStatus === reservationStatus) &&
        (!reservationDate || reservation.reservationDate === reservationDate) &&
        (!reservationTime || reservation.reservationTime === reservationTime)
      );
    });

    return HttpResponse.json({
      content: filteredReservations,
      totalElements: filteredReservations.length,
      totalPages: Math.ceil(
        filteredReservations.length / (size ? Number(size) : 10),
      ),
      number: page ? Number(page) : 0,
    });
  }),

  // 식당 상세 정보 가져오기
  http.get(`${END_POINT.RESTAURANTS}/:restaurantId`, ({ params }) => {
    const { restaurantId } = params;
    const restaurant = DB.restaurant.find(
      (rest) => rest.restaurantId === Number(restaurantId),
    );

    if (restaurant) {
      return HttpResponse.json(restaurant, { status: 200 });
    }
    return HttpResponse.json(
      { error: 'Restaurant not found' },
      { status: 404 },
    );
  }),

  // 특정식당 리뷰 리스트 불러오기
  http.get(`${END_POINT.RESTAURANTS}/:restaurantId/reviews`, ({ params }) => {
    const { restaurantId } = params;
    const reviews = DB.reviews.filter(
      (review) => review.restaurantId === Number(restaurantId),
    );

    if (reviews.length > 0) {
      return HttpResponse.json({ data: reviews }, { status: 200 });
    }
    return HttpResponse.json({ error: 'Reviews not found' }, { status: 404 });
  }),

  // 식당 공지사항
  http.get(
    `${END_POINT.RESTAURANTS}/:restaurantId/announcements`,
    ({ params }) => {
      const { restaurantId } = params;
      const announcements = DB.announcements.filter(
        (announcement) => announcement.restaurantId === Number(restaurantId),
      );

      if (announcements.length > 0) {
        return HttpResponse.json({ data: announcements }, { status: 200 });
      }
      return HttpResponse.json({ error: 'Reviews not found' }, { status: 404 });
    },
  ),

  http.post(END_POINT.EMAIL_DUPLICATE, async ({ request }) => {
    const { email } = (await request.json()) as { email: string };

    if (email === 'test123@email.com') {
      return HttpResponse.json(DB.emailDuplicateFail, {});
    }

    return HttpResponse.json(DB.emailDuplicateSuccess, {});
  }),

  http.post(END_POINT.NICKNAME_DUPLICATE, async ({ request }) => {
    const { nickname } = (await request.json()) as { nickname: string };

    if (nickname === 'testuser') {
      return HttpResponse.json(DB.nicknameDuplicateFail, {});
    }

    return HttpResponse.json(DB.nicknameDuplicateSuccess, {});
  }),

  http.post(END_POINT.TEL_DUPLICATE, async ({ request }) => {
    const { tel } = (await request.json()) as { tel: string };

    if (tel === '01012345678') {
      return HttpResponse.json(DB.telDuplicateFail, {});
    }

    return HttpResponse.json(DB.telDuplicateSuccess, {});
  }),

  http.post(END_POINT.BUSINESS_DUPLICATE, async ({ request }) => {
    const { business } = (await request.json()) as { business: string };

    if (business === '1234567890') {
      return HttpResponse.json(DB.businessDuplicateFail, {});
    }

    return HttpResponse.json(DB.businessDuplicateSuccess, {});
  }),

  http.post(END_POINT.SIGNUP, async ({ request }) => {
    const { email, password, name, nickname, phone, role } =
      (await request.json()) as SignUpRequestType;

    if (!email || !password || !name || !nickname || !phone || !role) {
      return HttpResponse.json(
        {
          status: 'error',
          message: '필수값이 누락되었습니다.',
          data: null,
          error: 'MISSING DATA',
        },
        { status: 400 },
      );
    }

    if (role === 'GUEST') {
      return HttpResponse.json(DB.guestSignup);
    }

    if (role === 'OWNER') {
      return HttpResponse.json(DB.ownerSignup);
    }

    return HttpResponse.json(
      {
        status: 'error',
        message: '알 수 없는 오류',
        data: null,
        error: 'UNKNOWN ERROR',
      },
      { status: 400 },
    );
  }),

  http.post(END_POINT.SIGN_IN, async ({ request }) => {
    const body = (await request.json()) as SignInRequestType;

    if (body.email === 'guest@example.com' && body.password === 'Qwerty123@@') {
      return HttpResponse.json(DB.signIn);
    }

    return HttpResponse.json(DB.signInError, {
      status: 400,
    });
  }),

  http.post(END_POINT.TOKEN_REFRESH, () => {
    return HttpResponse.json({ data: { accessToken: 'sddslkfji213' } });
  }),

  http.get('/api/auth/test', async ({ request }) => {
    const authHeader = request.headers.get('Authorization');
    const token = authHeader?.replace('Bearer ', '');

    if (!token) {
      return HttpResponse.json({ error: '토큰없는 접근' }, { status: 401 });
    }

    return HttpResponse.json({ success: '토큰 검증 성공' }, { status: 200 });
  }),

  http.get('api/auth/test2', async ({ request }) => {
    return HttpResponse.json(
      { error: '토큰 만료 테스트 응답' },
      { status: 403 },
    );
  }),

  http.get('/api/auth/test3', async ({ request }) => {
    const authHeader = request.headers.get('Authorization');
    const token = authHeader?.replace('Bearer ', '');

    if (!token) {
      return HttpResponse.json({ error: '토큰없는 접근' }, { status: 401 });
    }

    if (isFirstCall) {
      return HttpResponse.json(
        { error: '첫 번째 요청은 401' },
        { status: 401 },
      );
    }

    return HttpResponse.json(
      { success: '두 번째 이후 요청은 200' },
      { status: 200 },
    );
  }),

  http.put('/api/reservations/:id/visited', async ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      message: 'Successfully updated to visited',
      reservationId: id,
      status: 'CONFIRMED',
    });
  }),

  // 노쇼 처리
  http.put('/api/reservations/:id/no-show', async ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      message: 'Successfully updated to no-show',
      reservationId: id,
      status: 'NO_SHOW',
    });
  }),

  // 취소 처리
  http.put('/api/reservations/:id/cancel/owner', async ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      message: 'Successfully canceled reservation',
      reservationId: id,
      status: 'CANCELED',
    });
  }),
];
