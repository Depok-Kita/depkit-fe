import { ReactNode } from "react";

type BodyProps = {
  className?: string;
  preset: "p1" | "p2" | "p3" | "b1" | "b2" | "b3";
  children: ReactNode;
};

export const Body = ({ className, children, preset }: BodyProps) => {
  // if preset contains b
  const semiBold = preset.includes("b") ? "font-semibold" : "font-jakarta-sans";
  const presetFinal = preset.includes("b") ? preset.replace("b", "p") : preset;
  return (
    <p
      className={`${
        presetFinal === "p1"
          ? "text-[1.5rem]"
          : presetFinal === "p2"
          ? "text-[1rem]"
          : "text-[0.75rem]"
      } ${semiBold} ${className}`}
    >
      {children}
    </p>
  );
};
