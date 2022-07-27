import { Header, HeadingLine, SectionBox, Body, Button } from "@components";
import { InputField } from "@components/input-field";

export const RegistrationSection = () => {
  return (
    <div className="bg-denim-dark ">
      <SectionBox>
        <div className="mb-4">
          <Header preset="h3" className="text-center text-totalwhite">
            Form Registrasi Donor Darah
          </Header>
          <HeadingLine className="mx-auto" />
        </div>
        <div className="flex flex-col gap-2 max-w-sm mx-auto">
          <InputField
            type="text"
            label="Nama Lengkap"
            placeholder="Nama Lengkap"
            dark
            required
          />
          <InputField
            type="number"
            label="Usia"
            placeholder="Masukkan angka"
            dark
            required
          />
          <InputField type="text" label="Alamat" placeholder="" dark required />
          <InputField type="text" label="Asal Instansi" dark />
          <InputField
            type="email"
            label="Email"
            placeholder="JohnDoe@gmail.com"
            dark
            required
          />
          <InputField
            type="number"
            label="Nomor Telepon/WhatsApp*"
            placeholder="+62"
            dark
            required
          />
          <InputField type="text" label="Id Line" dark />
          <Button preset="primaryLight" className="mt-2 grow-0 shrink-1">
            Daftar
          </Button>
        </div>
      </SectionBox>
    </div>
  );
};
