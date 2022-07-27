import { Header, Card, Body, SectionBox } from "@components";

export const TujuanSection = () => {
  return (
    <div className="relative bg-powder">
      <SectionBox>
        <Header preset="h3" className="text-center mb-2">
          Tujuan
        </Header>
        <Card preset="light">
          <Header preset="h5">Lorem ipsum dolor sit amet</Header>
          <Body preset="p3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consequat risus eu mi egestas, non rutrum mauris laoreet. Ut eget
            dignissim metus, non vehicula dolor. Praesent at magna vel velit
            accums
          </Body>
        </Card>
      </SectionBox>
    </div>
  );
};
