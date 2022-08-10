export const SectionBox = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [props: string]: any;
}) => {
  return (
    <div
      className={" mx-auto py-10 tablet:py-20 desktop:py-16 " + className}
      {...props}
    >
      {children}
    </div>
  );
};
