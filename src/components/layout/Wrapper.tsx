import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  bgColor?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, bgColor }) => {
  return (
    <section
      className={`h-[100%] flex items-center justify-center relative ${bgColor}`}
    >
      {children}
    </section>
  );
};
