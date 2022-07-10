import { Header } from "@components/typography";

type SectionTitleProps = {
  children: React.ReactNode;
};

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <Header
      preset="h2"
      className="underline underline-offset-8 decoration-cerulean decoration-3 mb-4"
    >
      {children}
    </Header>
  );
};
