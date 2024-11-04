import React, { ReactNode } from 'react';

interface DividerProps {
  children?: ReactNode;
}

const Divider: React.FC<DividerProps> = ({ children }) => {
  return (
    <div className="p-4 bg-white shadow-md my-4">
      {children}
    </div>
  );
};

export default Divider;
