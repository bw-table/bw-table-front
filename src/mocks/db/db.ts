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
    name: "로키 스테이크",
    description: "파스타 맛집입니다",
    address: "서울시 용산구 123",
    contact: "010-7897-5671",
    latitude: 0,
    longtitude: 0,
    closedDay: "일요일",
    category: "RESTAURANT",
    link: "abc.co.kr",
    info: "원활한 예약을 위해 식사시간을 최대 2시간으로 설정하게 되었습니다. 양해부탁드리겠습니다. Catch Table 어플을 통하여 예약 변경 또는 취소가 어려우신 경우 매장으로 연락 주세요.",
    averageRating: 4.5,
    images: [
        "http://example.com/images/restaurant2.jpg","http://example.com/images/restaurant1.jpg"
    ],
    menus: [
      {
        id: 3,
        name: '파스타1',
        price: 10000,
        description: '존맛탱구리 파스타입니다.사장님이 보증한다구.',
        imageUrl:'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
        restaurantId: 2,
      },
      {
        id: 4,
        name: '파스타2',
        price: 17000,
        description: '준맛탱구리이지만 넘버원은 아닙니다. 다른것도 맛있어영',
        imageUrl: 'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
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
  },
],

//특정 레스토랑 리뷰 
reviews: [
  {
    id: 1,
    restaurantId: 2,
    content: '파스타가 너무 맛있어요~!',
    rating: 4,
    images:[
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
    createdAt: "2024-10-20T13:00:00",
    updatedAt: "2024-10-20T13:00:00", 
    userId: 1
  },
  {
    id: 2,
    restaurantId: 2,
    content: '직원분들이 더 친절했으면 좋겠어요!',
    rating: 5,
    inmages: [],
    createdAt: "2024-10-20T13:00:00",
    updatedAt: "2024-10-20T13:00:00", 
    userId: 3
  },
],

//레스토랑 공지사항 및 이벤트 
  announcements: [
    {
      announcementId: 1,
      restaurantId: 2,
      isEvent: false,
      title: "Holiday Hours",
      content: "We are closed on holidays.",
      createdAt: "2024-10-01T12:00",
    },
    {
      announcementId: 2,
      restaurantId: 2,
      isEvent: true,
      title: "아메리카노 증정 이벤트",
      content: "첫방문 후 리뷰를 남겨주시고, 직원에게 인증해주시면 아메리카노 1잔 무료 증정됩니다!",
      createdAt: "2024-10-01T12:00"
    }
  ],
};
