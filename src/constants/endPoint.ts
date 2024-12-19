export const END_POINT = {
  EXAMPLE: '/api/example',
  RESERVATIONS: '/api/reservations',
  SIGNUP: '/api/auth/signup',
  EMAIL_DUPLICATE: '/api/auth/check/email',
  NICKNAME_DUPLICATE: '/api/auth/check/nickname',
  TEL_DUPLICATE: '/api/auth/check/phone',
  BUSINESS_DUPLICATE: '/api/auth/check/business-number',
  SIGN_IN: '/api/auth/login',
  TOKEN_REFRESH: '/api/auth/refresh',
  RESTAURANTS: 'api/restaurants',
  NEW_RESTAURANTS:'api/restaurants/new',
  MAIN_PAGE:'api/main/restaurants',
} as const;
