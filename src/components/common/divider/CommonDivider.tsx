import React, { ReactNode } from 'react';
import { cva } from 'class-variance-authority';

const dividerStyles = cva('w-full my-4 bg-white shadow-md');

interface DividerProps {
  children?: ReactNode;
  classNames?: string;
  onClick?: () => void;
}

const Divider: React.FC<DividerProps> = ({ children, classNames }) => {
  return (
    <div className={`${dividerStyles()} ${classNames}`}>
      {children}
    </div>
  );
};

export default Divider;
