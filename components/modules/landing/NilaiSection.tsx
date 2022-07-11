import { Card } from "@components/card";
import { Body, Header } from "@components/typography";
import IconDinamis from "@icons/ic_dinamis.svg";
import IconRelevan from "@icons/ic_relevan.svg";
import IconKolaboratif from "@icons/ic_kolaboratif.svg";

type NilaiCardProps = {
  title: string;
  children: string;
  Icon: any;
};
const NilaiCard = ({ title, children, Icon }: NilaiCardProps) => {
  return (
    <Card preset="light" className="min-w-[150px] max-w-[250px]">
      <Header preset="h5">{title}</Header>
      <Icon width="50" height="50" className="mx-auto my-2" />
      <Body preset="p3" className="text-left">
        {children}
      </Body>
    </Card>
  );
};

export const NilaiSection = () => {
  return (
    <div className="flex justify-center flex-wrap gap-4 ">
      <NilaiCard title="Dinamis" Icon={IconDinamis}>
        Untuk menyesuaikan dengan kondisi pandemi, Depok Kita melakukan
        perubahan bentuk acara dari community development menjadi community
        service.
      </NilaiCard>
      <NilaiCard title="Relevan" Icon={IconRelevan}>
        Depok Kita 2022 tetap dapat mengikuti zaman dan menghadapi tantangan di
        masa kini.
      </NilaiCard>
      <NilaiCard title="Kolaboratif" Icon={IconKolaboratif}>
        Depok Kita menggabungkan dua kegiatan, Depok Kita dan Festival Rakyat,
        menjadi satu wadah yang memiliki tujuan yang sama.
      </NilaiCard>
    </div>
  );
};
