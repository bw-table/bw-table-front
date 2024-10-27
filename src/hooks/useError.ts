import { useCallback } from 'react';

export const useError = () => {
  return useCallback((error: unknown) => {
    console.error('오류가 발생했습니다:', error);

    if (typeof error === 'object' && error !== null) {
      const err = error as any;

      if (err.code === 'NEXT_NOT_FOUND') {
        console.error('Next.js 라우트를 찾을 수 없습니다');
        return;
      }

      if (err.digest) {
        console.error(`Next.js 데이터 패칭 오류: ${err.digest}`);
        return;
      }

      if ('status' in err) {
        const errorResponse = err;

        switch (errorResponse.status) {
          case 400:
            console.error('잘못된 요청: 필수 매개변수가 누락되었거나 요청이 잘못되었습니다.');
            break;
          case 401:
            console.error('인증되지 않음: 유효한 API 키가 제공되지 않았습니다.');
            break;
          case 403:
            console.error('접근 금지: API 키에 해당 요청을 수행할 권한이 없습니다.');
            break;
          case 404:
            console.error('찾을 수 없음: 요청한 리소스가 존재하지 않습니다.');
            break;
          case 500:
            console.error('서버 오류: 서버에서 문제가 발생했습니다.');
            break;
          default:
            console.error(`서버 오류: ${errorResponse.message || '알 수 없는 오류'}`);
        }
      }
    }

    if (error instanceof Error && error.message.includes('hydration')) {
      console.error('하이드레이션 오류:', error);
      return;
    }

    console.error('알 수 없는 오류가 발생했습니다:', error);
  }, []);
};
