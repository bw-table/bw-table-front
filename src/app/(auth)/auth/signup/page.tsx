import SignupForm from '@/components/feature/signup/SignupForm';
import Logo from '@public/Logo.svg';

export default function SignupPage() {
  return (
    <div className="min-h-[calc(100vh-50px)] relative">
      <div className="flex flex-col px-3 w-full absolute top-[10%] py-3">
        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <h1>
            <Logo />
          </h1>
          <h2 className="text-2xl font-bold text-center mb-6">회원가입</h2>
        </div>
        <SignupForm />
      </div>
    </div>
  );
}
