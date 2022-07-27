// add mx-auto to center the line
export const HeadingLine = ({ className }: { className?: string }) => {
  return (
    <div
      className={"h-[4.5px] w-[80px] tablet:w-[220px] bg-cerulean " + className}
    ></div>
  );
};
