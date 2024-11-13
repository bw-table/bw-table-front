export const switchToKorean = (status: string) => {
  switch (status) {
    case 'PENDING':
      return '대기';
    case 'CONFIRMED':
      return '방문';
    case 'CANCELED':
      return '취소';
    case 'NO_SHOW':
      return '노쇼';
    default:
      return status;
  }
};
