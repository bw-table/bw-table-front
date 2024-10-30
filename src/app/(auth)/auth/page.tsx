import CommonButton from '@/components/common/button/CommonButton';
import Logo from '@public/Logo.svg';

export default function AuthPage() {
  return (
    <div className="h-[calc(100vh-50px)] flex items-center justify-center">
      <section className="flex flex-col items-center justify-center gap-3 w-full px-3">
        <h1 className="mb-2">
          <Logo />
        </h1>
        <p className="text-center font-bold mb-8 text-2xl">
          흑백 테이블과 함께하는 <br /> 편리한 예약!
        </p>
        <CommonButton type="button">이메일로 가입하기</CommonButton>
        <div className="flex items-center w-full">
          <div className="flex-1 max-h-[1px] border-t border-solid border-border-300" />
          <p className="px-4 text-gray200">또는</p>
          <div className="flex-1 max-h-[1px] border-t border-solid border-border-300" />
        </div>
        <CommonButton type="button" classNames="bg-kakao text-black">
          카카오톡으로 시작하기
        </CommonButton>
        <div className="flex gap-5 mt-3">
          <span>이미 흑백테이블 회원이신가요?</span>
          <span className="font-semibold underline">로그인 하기</span>
        </div>
      </section>
    </div>
  );
}
