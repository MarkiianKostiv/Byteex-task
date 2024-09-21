import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  bgColor?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, bgColor }) => {
  return (
    <section
      className={`min-h-screen overflow-hidden text-white relative ${bgColor}`}
    >
      {children}
    </section>
  );
};
