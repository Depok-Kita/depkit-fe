import { Body, Button, Header } from "@components";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  return (
    <div className="bg-powder-light px-10 py-5 min-h-screen">
      <Header preset="h3" className="hidden md:block pb-20">
        404 Not Found
      </Header>
      <Header preset="h2" className="text-cerulean">
        404
      </Header>
      <Body preset="p1">Maaf, halaman yang kamu cari tidak ada.</Body>
      <Button
        preset="primaryDark"
        onClick={() => router.back()}
        className="mt-10"
      >
        Kembali
      </Button>
    </div>
  );
}
