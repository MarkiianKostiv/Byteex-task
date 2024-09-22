import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  bgColor?: string;
  height?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  bgColor,
  height = "h-[100%]",
}) => {
  return (
    <section
      className={`${height} flex items-center justify-center relative ${bgColor}`}
    >
      {children}
    </section>
  );
};
