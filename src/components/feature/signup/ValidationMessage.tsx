import Check from '@public/Check.svg';

interface ValidationMessageProps {
  error?: string;
  isValid: boolean | '';
}

export default function ValidationMessage({
  error,
  isValid,
}: ValidationMessageProps) {
  return (
    <div className="relative">
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          error ? 'h-[20px] opacity-100' : 'h-0 opacity-0'
        }`}
      >
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
      {isValid && (
        <span className="text-green-600 text-sm absolute right-5 -top-9">
          <Check className="ml-1 mt-1" />
        </span>
      )}
    </div>
  );
}
