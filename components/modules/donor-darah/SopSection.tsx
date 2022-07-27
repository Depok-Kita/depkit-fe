import { Header, Body, SectionBox, HeadingLine } from "@components";

export const SopSection = () => {
  return (
    <SectionBox>
      <div className="text-center mb-2">
        <Header preset="h3">[ STANDARD OPERATION PROCEDURE ]</Header>
        <Body preset="b1">Ketentuan Standar Donor Darah</Body>
        <HeadingLine className="mx-auto" />
      </div>
      <div>
        <ol className="list-decimal">
          <li>Dalam keadaan sehat, tidak sedang flu/batuk/demam/pusing</li>
          <li>Usia minimal 17 tahun</li>
          <li>Berat badan &gt; 48 kg</li>
          <li>Tekanan darah dan denyut nadi normal</li>
          <li>
            Hemoglobin (hb)
            <ol className="list-disc ml-6">
              <li>Laki-laki: 13 gr/dl s.d 17 gr/dl</li>
              <li>Perempuan: 12,6 gr/dl s.d 17 gr/dl</li>
            </ol>
          </li>
          <li>
            Tidak sedang mengkonsumsi obat-obatan 3 hari sebelum donor (obat
            flu/analgetik/aspirin), (antibiotic 1 minggu setelah minum)
          </li>
          <li>Istirahat yang cukup minimal tidur 5 jam</li>
          <li>
            Tidak memiliki riwayat jantung, ginjal, diabetes dengan terapi
            insulin, kanker, hemofilia, dan penyakit darah lainnya
          </li>
          <li>Wanita yang tidak sedang menstruasi, menyusui, dan hamil</li>
          <li>
            Interval waktu donor darah dengan donor sebelumnya minimal 60 hari
          </li>
          <li>
            Bersedia hadir di lokasi donor darah, yaitu Masjid Baiturrahman Kp
            Lio, Depok
          </li>
        </ol>
      </div>
    </SectionBox>
  );
};
