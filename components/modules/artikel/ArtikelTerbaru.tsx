import SmallBlueLine from "@images/small-blue-line.svg";
import { Header, Body, Card } from "@components";
import { useFetch } from "hooks/useFetch";
import { ShareIcon } from "@heroicons/react/outline";
import Link from "next/link";

type ArtikelTerbaruProps = {
  className?: string;

  icon?: React.SVGAttributes<SVGElement>;
  padding?: string;
  articles?: any;
  children?: React.ReactNode;
};

export const ArtikelTerbaru = ({
  children,
  className,
  articles,
}: ArtikelTerbaruProps) => {
  // MENGECEK SELURUH ARTIKEL
  console.log("CEK ARTIKEL DI SINI");
  console.log(articles);

  // AMBIL 3 DATA
  const artikelTerbaru = [];
  for (let i = 0; i < 3; i++) {
    try {
      articles[i].number = i + 1; // Menambahkan nomor untuk iterasi di map
      artikelTerbaru.push(articles[i]);
    } catch (error) {
      // Saat data tidak ada di index tertentu maka break saja
      break;
    }
  }

  // MENGECEK 3 ARTIKEL TERBARU
  // console.log(artikelTerbaru);

  return (
    // <div></div>
    <div className="flex justify-center bg-powder mobile:h-[360px]">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-2 items-center mobile:px-7 mobile:pt-4">
          <SmallBlueLine />
          <Body preset="b2">Artikel Terbaru</Body>
        </div>
        <div className="flex flex-col">
          {artikelTerbaru.map((article: any) => (
            <div className="flex justify-center py-1">
              {/* BUTTON UNTUK MENGARAHKAN ALAMAT KE BODY ARTIKEL */}
              <Link href={"/artikel/" + article.slug} key={article.id}>
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
                      <img
                        src={article?.photoUrl}
                        width={85}
                        alt="thumbnail"
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
