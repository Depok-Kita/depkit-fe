export const SectionBox = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={"w-[min(64rem,80%)] mx-auto " + className}>{children}</div>
  );
};
