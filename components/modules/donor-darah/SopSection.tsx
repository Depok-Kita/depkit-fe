import {
  HeaderResponsive as Header,
  BodyResponsive as Body,
  SectionBox,
  HeadingLine,
} from "@components";
import DonorDarahDecor from "@images/donor-darah-decor.svg";
import { useWindowSize } from "@components";

export const SopSection = () => {
  const windowSize = useWindowSize();
  return (
    <SectionBox id="sop" className="w-[min(64rem,80%)]">
      <div className="text-center mb-8 tablet:mb-10">
        <Header
          windowSize={windowSize}
          preset="h6"
          presetTablet="h3"
          presetDesktop="h2"
        >
          STANDARD OPERATION PROCEDURE
        </Header>
        <Body windowSize={windowSize} preset="b3" presetTablet="b1">
          Ketentuan Standar Donor Darah
        </Body>
        <HeadingLine className="mx-auto" />
      </div>
      <div className="text-[0.875rem] tablet:text-[1.25rem] font-jakarta-sans">
        <ol className="list-decimal">
          <li>
            Dalam keadaan <b>sehat</b>, tidak sedang flu/batuk/demam/pusing
          </li>
          <li>
            Usia <b>minimal</b> 17 tahun
          </li>
          <li>
            Berat badan &gt; <b>48 kg</b>
          </li>
          <li>Tekanan darah dan denyut nadi normal</li>
          <li>
            Hemoglobin (<b>hb</b>)
            <ol className="list-disc ml-6">
              <li>
                <b>Laki-laki:</b> 13 gr/dl <b>s.d</b> 17 gr/dl
              </li>
              <li>
                <b>Perempuan</b>: 12,6 gr/dl <b>s.d</b> 17 gr/dl
              </li>
            </ol>
          </li>
          <li>
            <b>Tidak sedang mengkonsumsi obat-obatan 3 hari</b> sebelum donor
            (obat flu/analgetik/aspirin), (antibiotic 1 minggu setelah minum)
          </li>
          <li>
            Istirahat yang cukup <b>minimal tidur 5 jam</b>
          </li>
          <li>
            <b>Tidak memiliki riwayat</b> jantung, ginjal, diabetes dengan
            terapi insulin, kanker, hemofilia, dan penyakit darah lainnya
          </li>
          <li>
            Wanita yang <b>tidak sedang menstruasi, menyusui, dan hamil</b>
          </li>
          <li>
            Interval waktu donor darah dengan donor sebelumnya{" "}
            <b>minimal 60 hari</b>
          </li>
          <li>
            <b>Bersedia hadir</b> di lokasi donor darah, yaitu Masjid
            Baiturrahman Kp Lio, Depok
          </li>
        </ol>
      </div>
      <div className="flex justify-center">
        <DonorDarahDecor className="mt-8 scale-50 tablet:scale-75 desktop:scale-100" />
      </div>
    </SectionBox>
  );
};
