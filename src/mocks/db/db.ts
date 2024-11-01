export const DB = {
  example: [{ id: 1, name: '오신웅' }],

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
};
