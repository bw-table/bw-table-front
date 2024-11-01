import { END_POINT } from '@/constants/endPoint';
import { DB } from '@/mocks/db/db';
import { SignInRequestType, SignUpRequestType } from '@/types';
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
      { status: 200 },
    );
  }),

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
];
