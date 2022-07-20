import { Header } from "@components/typography";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
};

export const SectionTitle = ({
  children,
  className,
  light,
}: SectionTitleProps) => {
  return (
    <Header
      preset="h5"
      className={
        "underline underline-offset-8 decoration-cerulean decoration-3 mb-4 text-center " +
        className +
        " " +
        (light ? "text-totalwhite" : "")
      }
    >
      {children}
    </Header>
  );
};
