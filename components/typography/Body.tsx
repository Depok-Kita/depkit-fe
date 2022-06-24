import { ReactNode } from "react";

type BodyProps = {
  className?: string;
  preset: "p1" | "p2" | "p3";
  children: ReactNode;
};

export const Body = ({ className, children, preset }: BodyProps) => {
  return (
    <p
      className={`font-jakarta-sans ${
        preset === "p1"
          ? "text-[1.5rem]"
          : preset === "p2"
          ? "text-[1rem]"
          : "text-[0.75rem]"
      } ${className}`}
    >
      {children}
    </p>
  );
};
