export const DB = {
  example: [{ id: 1, name: '오신웅' }],

  // 예약 요청
  reservation: [
    {
      reservationId: 1,
      date: '2024-11-01',
      time: '18:00',
      guestCount: 4,
      specialRequest: '요청사항 꾸시렁',
    },
  ],
  // 이메일 중복 체크
  emailDuplicateSuccess: {
    status: 'success',
    message: '요청이 성공적으로 처리되었습니다.',
    data: {
      isEmailDuplicate: false,
    },
  },
  emailDuplicateFail: {
    status: 'fail',
    message: '요청이 성공적으로 처리되었습니다.',
    data: {
      isEmailDuplicate: true,
    },
  },
  // 닉네임 중복 체크
  nicknameDuplicateSuccess: {
    status: 'success',
    message: '요청이 성공적으로 처리되었습니다.',
    data: {
      isNicknameDuplicate: false,
    },
  },
  nicknameDuplicateFail: {
    status: 'fail',
    message: '요청이 성공적으로 처리되었습니다.',
    data: {
      isNicknameDuplicate: true,
    },
  },

  // 전화번호 중복 체크
  telDuplicateSuccess: {
    status: 'success',
    message: '요청이 성공적으로 처리되었습니다.',
    data: {
      isPhoneDuplicate: false,
    },
  },
  telDuplicateFail: {
    status: 'fail',
    message: '요청이 성공적으로 처리되었습니다.',
    data: {
      isPhoneDuplicate: true,
    },
  },

  // 사업자번호 중복 체크
  businessDuplicateSuccess: {
    status: 'success',
    message: '요청이 성공적으로 처리되었습니다.',
    data: {
      isBusinessNumberDuplicate: false,
    },
  },
  businessDuplicateFail: {
    status: 'fail',
    message: '요청이 성공적으로 처리되었습니다.',
    data: {
      isBusinessNumberDuplicate: true,
    },
  },
  guestSignup: {
    status: 'success',
    message: '요청이 성공적으로 처리되었습니다.',
    data: {
      id: 1,
      loginType: 'EMAIL',
      email: 'guest@example.com',
      password: '$2a$10$uMkD7Ys64Yk.1.od1vlTPemruuWiUIXjgYisu7WNYWFffNSf8EIa2',
      name: '홍길동',
      nickname: '길동',
      contactNumber: '010-1234-5678',
      role: 'GUEST',
      businessRegistrationNumber: null,
      profileImage: null,
      provider: null,
      providerId: null,
      socialId: null,
      refreshToken: null,
    },
    error: null,
  },
  ownerSignup: {
    status: 'success',
    message: '요청이 성공적으로 처리되었습니다.',
    data: {
      id: 1,
      loginType: 'EMAIL',
      email: 'owner@example.com',
      password: '$2a$10$916rjtIjNwohVg2qOPjIPOuT9AAu5oqoUFGhoqb65JIfWslb/Ssbe',
      name: '사장님',
      nickname: '샤쟝',
      contactNumber: '010-1234-2222',
      role: 'OWNER',
      businessRegistrationNumber: '1230122222',
      profileImage: null,
      provider: null,
      providerId: null,
      socialId: null,
      refreshToken: null,
    },
    error: null,
  },

  signIn: {
    status: 'success',
    message: '요청이 성공적으로 처리되었습니다.',
    data: {
      id: 1,
      email: 'guest@example.com',
      name: 'guest',
      accessToken:
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJndWVzdEBleGFtcGxlLmNvbSIsImlhdCI6MTczMDI5MjY5MywiZXhwIjoxNzMwMjk0NDkzfQ.mixuNgZMQKWfMiknOwlr_hw9MbzrC3lr-7mwIn_Vt0PRLE1ps2gmbQMkRjlHxPW5iiL0Kcr1ppqUW6Jp_YCNgg',
    },
    error: null,
  },

  signInError: {
    status: 'fail',
    message: '로그인 실패 했습니다.',
    data: {
      accessToken: null,
      refreshToken: null,
    },
    error: null,
  },

  // 식당 임시 데이터
  restaurant: [
    {
      restaurantId: 2,
      name: '맛집 A',
      description: '파스타 맛집입니다',
      address: '서울시 용산구 123',
      contact: '010-7897-5671',
      closedDay: '일요일',
      category: 'RESTAURANT',
      link: 'abc.co.kr',
      notice: '저희 식당은 예약 필수입니다',
      rating: 4.5,
      reviews: [
        {
          reviewId: 2,
          title: '존맛이에여',
          description: '어쩌구 저쩌구 브ㅡㄹㄹ',
        },
      ],
      images: [
        'http://example.com/images/restaurant2.jpg',
        'http://example.com/images/restaurant1.jpg',
      ],
      menus: [
        {
          id: 3,
          name: '파스타1',
          price: 10000,
          description: '파스타1',
          imageUrl: 'http://example.com/images/food1.jpg',
          restaurantId: 2,
        },
        {
          id: 4,
          name: '파스타2',
          price: 17000,
          description: '파스타2',
          imageUrl: 'http://example.com/images/food2.jpg',
          restaurantId: 2,
        },
      ],
      facilities: ['PARKING', 'HIGHCHAIR'],
      hashtags: ['데이트', '용산맛집', '파스타'],
      operatingHours: [
        {
          id: 4,
          dayOfWeek: 'MONDAY',
          openingTime: '10:00:00',
          closingTime: '22:00:00',
          restaurantId: 2,
        },
        {
          id: 5,
          dayOfWeek: 'TUESDAY',
          openingTime: '10:00:00',
          closingTime: '22:00:00',
          restaurantId: 2,
        },
        {
          id: 6,
          dayOfWeek: 'WEDNESDAY',
          openingTime: '10:00:00',
          closingTime: '22:00:00',
          restaurantId: 2,
        },
      ],
      notices: [
        {
          id: 1,
          title: '[안내] 특별 메뉴 출시',
          content: '안녕하세요, 새로운 스테이크 메뉴를 소개합니다.',
        },
        {
          id: 2,
          title: '[공지] 주말 예약 안내',
          content: '주말 예약은 사전 예약제로 운영됩니다.',
        },
      ],
    },
  ],
};
