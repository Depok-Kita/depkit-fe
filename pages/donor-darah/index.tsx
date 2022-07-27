import {
  Hero,
  TujuanSection,
  SopSection,
  RegistrationSection,
} from "@components/modules/donor-darah";

const DonorDarahPage = () => {
  return (
    <div className="pt-64">
      <Hero />
      <TujuanSection />
      <SopSection />
      <RegistrationSection />
    </div>
  );
};

export default DonorDarahPage;
