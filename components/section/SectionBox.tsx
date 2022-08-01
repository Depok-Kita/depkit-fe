export const SectionBox = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={
        "w-[min(64rem,80%)] mx-auto py-10 tablet:py-20 desktop:py-16 " +
        className
      }
    >
      {children}
    </div>
  );
};
