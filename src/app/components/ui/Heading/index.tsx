import React, { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h5 className="uppercase font-semibold tracking-wide">{children}</h5>
  );
};
