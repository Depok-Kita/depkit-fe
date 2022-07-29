import SmallBlueLine from "@images/small-blue-line.svg";
import { Header, Body, Card } from "@components";
import { ShareIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

type ArtikelTerbaruProps = {
  className?: string;
  articles?: any;
  children?: React.ReactNode;
};

export const ArtikelTerbaru = ({
  children,
  className,
  articles,
}: ArtikelTerbaruProps) => {
  // Sorting artikel berdasarkan tanggal terbaru
  articles.sort((a: any, b: any) =>
    a.date < b.date ? 1 : a.date === b.date ? (a.id < b.id ? 1 : -1) : -1
  );
  // Mengambil 3 artikel terbaru
  const artikelTerbaru = articles.slice(0, 3);
  // Menambahkan angka pada setiap artikel
  for (let i = 1; i <= 3; i++) {
    artikelTerbaru[i - 1].number = i;
  }

  return (
    <div className="flex justify-center bg-powder mobile:h-[375px]">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-2 items-center mobile:px-7 mobile:pt-5">
          <SmallBlueLine />
          <Body preset="b2">Artikel Terbaru</Body>
        </div>
        <div className="flex flex-col">
          {artikelTerbaru.map((article: any) => (
            <div className="flex justify-center py-1" key={article.id}>
              {/* BUTTON UNTUK MENGARAHKAN ALAMAT KE BODY ARTIKEL */}
              <Link href={"/artikel/" + article.slug}>
                <button>
                  <Card
                    preset="light"
                    className="mobile:w-[315px] p-4 rounded-xl relative"
                    padding="false"
                  >
                    <div className="flex gap-2">
                      <Header preset="h4" className="text-powder">
                        {article?.number}
                      </Header>
                      <Image
                        src={article?.photoUrl}
                        alt={article?.photoAlt}
                        width={85}
                        height={60}
                        className="rounded-md"
                      />
                      <div className="text-left">
                        <Body preset="p3">{article?.published}</Body>
                        <Body preset="b3">{article?.title}</Body>
                      </div>
                      <ShareIcon className="mobile:w-4 absolute right-3 pt-12" />
                    </div>
                  </Card>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};;;;
