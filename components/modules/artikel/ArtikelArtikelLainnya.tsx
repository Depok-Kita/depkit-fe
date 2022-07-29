import { Body, LoadingScreen } from "@components";
import { ShareIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

type ArtikelArtikelLainnyaProps = {
  className?: string;
  total?: number;
  children?: React.ReactNode;
};

export const ArtikelArtikelLainnya = ({
  children,
  className,
  total,
}: ArtikelArtikelLainnyaProps) => {
  // GET : api/articles FETCH DI SINI KARENA KOMPONEN DIGUNAKAN DI DUA BAGIAN
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/articles").then((response) => {
      setArticles(response.data);
      setArticlesLoading(false);
    });
  }, []);

  // Menampilkan artikel lain berdasarkan total
  // undefined hanya ketika total tidak diinisiasikan nilainua => default (tidak dilakukan slicing)
  let artikelDitampilkan = articles;
  if (total != undefined) {
    artikelDitampilkan = articles.slice(0, total);
  }

  if (articlesLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="flex flex-col">
        {artikelDitampilkan.map((article: any) => (
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
                    <Image
                      src={article?.photoUrl}
                      alt={article?.photoAlt}
                      width={85}
                      height={60}
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
  }
};
