interface ValidationMessageProps {
  error?: string;
  isValid?: boolean | '';
}

export default function ValidationMessage({ error }: ValidationMessageProps) {
  return (
    <div className="relative">
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          error ? 'h-[20px] opacity-100' : 'h-0 opacity-0'
        }`}
      >
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    </div>
  );
}
