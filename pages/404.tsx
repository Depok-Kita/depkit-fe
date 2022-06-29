import { Body, Button, Header } from "@components";
import { useRouter } from "next/router";
import Cone from "@images/cone.png";
import Image from "next/image";

export default function Custom404() {
  const router = useRouter();
  return (
    <div className="bg-powder-light px-10 py-5 min-h-screen flex justify-center">
      <div className="px-[10%]">
        <Header preset="h3" className="hidden tablet:block">
          404 Not Found
        </Header>
        <div className="desktop:grid grid-cols-2 justify-center content-center">
          <div className="text-center desktop:text-left">
            <Header preset="h2" className="text-cerulean tablet:mt-20">
              404
            </Header>
            <Body preset="p1">Maaf, halaman yang kamu cari tidak ada.</Body>
            <div className="desktop:hidden">
              <Image src={Cone} className="desktop:hidden" />
            </div>

            <div className="flex justify-center desktop:justify-start">
              <Button
                preset="primaryDark"
                onClick={() => router.back()}
                className="desktop:mt-10"
              >
                Kembali
              </Button>
            </div>
          </div>
          <div className="hidden desktop:flex justify-end">
            <Image src={Cone} className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
