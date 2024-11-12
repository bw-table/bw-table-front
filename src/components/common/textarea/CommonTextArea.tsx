import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface CommonTextareaProps {
  id: string;
  label: string;
  placeholder: string;
  classNames?: string;
  register: UseFormRegister<any>;
  rules?: Record<string, any>;
}

const CommonTextarea: React.FC<CommonTextareaProps> = ({
  id,
  label,
  placeholder,
  classNames = 'w-full bg-gray-100 border-none pl-3 py-3 rounded-md focus:outline-none',
  register,
  rules,
}) => (
  <div className="mb-4 flex flex-col gap-3">
    <label htmlFor={id} className="block text-sm font-medium">
      {label}
    </label>
    <textarea
      id={id}
      {...register(id, rules)}
      placeholder={placeholder}
      className={classNames}
    />
  </div>
);

export default CommonTextarea;
