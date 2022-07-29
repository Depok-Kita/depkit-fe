import SmallBlueLine from "@images/small-blue-line.svg";
import { Header, Body, Button, InputField } from "@components";
import { useFetch } from "hooks/useFetch";
import { ShareIcon } from "@heroicons/react/outline";
import Link from "next/link";

type ArtikelArtikelLainnyaProps = {
  className?: string;
  articles?: any;
  children?: React.ReactNode;
};

// PASANG PROPS JUMLAH ARTIKEL YANG INGIN DITAMPILKAN AJA KALI YAK
export const ArtikelArtikelLainnya = ({
  children,
  className,
  articles,
}: ArtikelArtikelLainnyaProps) => {
  // MENGECEK SELURUH ARTIKEL
  console.log("CEK DATA ARTIKEL LAINNYA");
  console.log(articles);

  return (
    // <div>
    //   {articles.map((article: any) => (
    //     <div key={article.id}>{article?.title}</div>
    //   ))}
    // </div>
    <div className="flex flex-col">
      {articles?.map((article: any) => (
        <div className="flex justify-center" key={article.id}>
          <Link href={"/artikel/" + article?.slug}>
            <div className="mobile:w-[315px]">
              <div className="flex justify-between border-b border-powder py-2">
                <div>
                  <Body preset="p3" className="mobile:text-[8px]">
                    {article?.published}
                  </Body>
                  <Body preset="b3">{article?.title}</Body>
                  {/* BUTTON MENUJU TOPIC TERTENTU */}
                  {/* <div>
            <button>
              {artikel.attributes.topics.map((topic) => (
                <div className="border-2 border-cerulean rounded-2xl text-cerulean text-[8px] font-bold px-1">
                  {topic.attributes.name}
                </div>
              ))}
            </button>
          </div> */}
                </div>
                <div>
                  <ShareIcon className="w-9 pt-10 pl-5" />
                </div>
                <div>
                  <img
                    src={article?.photoUrl}
                    width={85}
                    alt="thumbnail"
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
