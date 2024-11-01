import CommonButton from '@/components/common/button/CommonButton';
import SignInForm from '@/components/feature/signup/SigninForm';
import KakaoLogo from '@public/KakaoLogo.svg';
import Logo from '@public/Logo.svg';

export default function SignInPage() {
  return (
    <div className="min-h-[calc(100vh-50px)] relative">
      <div className="flex flex-col px-3 w-full absolute top-[10%] py-3">
        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <h1>
            <Logo />
          </h1>
          <h2 className="text-2xl font-bold text-center mb-16">로그인</h2>
        </div>
        <SignInForm />
        <div className="flex items-center w-full my-8">
          <div className="flex-1 max-h-[1px] border-t border-solid border-border-300" />
          <p className="px-4 text-gray200">또는</p>
          <div className="flex-1 max-h-[1px] border-t border-solid border-border-300" />
        </div>
        <div className="relative w-full">
          <CommonButton type="button" classNames="bg-kakao text-black">
            카카오톡으로 로그인
          </CommonButton>
          <KakaoLogo className="absolute left-5 top-4 h-8 w-8" />
        </div>
      </div>
    </div>
  );
}
