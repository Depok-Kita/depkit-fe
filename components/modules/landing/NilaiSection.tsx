import { Card } from "@components/card";
import { BodyResponsive, HeaderResponsive } from "@components/typography";
import { useWindowSize } from "@components/hooks";
import IconDinamis from "@icons/ic_dinamis.svg";
import IconRelevan from "@icons/ic_relevan.svg";
import IconKolaboratif from "@icons/ic_kolaboratif.svg";

type NilaiCardProps = {
  title: string;
  children: string;
  Icon: any;
};
const NilaiCard = ({ title, children, Icon }: NilaiCardProps) => {
  const windowSize = useWindowSize();
  return (
    <Card
      preset="light"
      className="min-w-[150px] max-w-[250px]"
      padding="desktop:p-10 mobile:p-4 tablet:p-6"
    >
      {" "}
      <Icon className="mx-auto my-2 desktop:w-24 desktop:h-24" />
      <HeaderResponsive
        preset="h5"
        presetTablet="h4"
        presetDesktop="h3"
        windowSize={windowSize}
      >
        {title}
      </HeaderResponsive>
      <BodyResponsive
        preset="p3"
        presetTablet="p2"
        presetDesktop="p2"
        windowSize={windowSize}
        className="desktop:text-left mobile:text-cente desktop:mt-3 mobile:mt-1"
      >
        {children}
      </BodyResponsive>
    </Card>
  );
};

export const NilaiSection = () => {
  return (
    <div className="flex justify-center flex-wrap desktop:gap-10 gap-4 ">
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
