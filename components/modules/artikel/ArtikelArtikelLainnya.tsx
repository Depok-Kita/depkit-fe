import { Body, LoadingScreen } from "@components";
import { ShareIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { flatten } from "@chakra-ui/utils";

type ArtikelArtikelLainnyaProps = {
  className?: string;
  total?: number;
  filter?: string; // Untuk mendapatkan artikel berdasarkan topik
  children?: React.ReactNode;
};

export const ArtikelArtikelLainnya = ({
  children,
  className,
  total,
  filter,
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

  // Menampilkan artikel lain berdasarkan total dan filter topik
  let artikelDitampilkan = articles;
  console.log("ARTIKEL DITAMPILKAN");
  console.log(artikelDitampilkan);
  // Ketika nilai filter tidak default (All) maka lakukan pemfilteran
  const filteringTopic = (article: any, filter: any) => {
    for (let topic of article.topics) {
      if (topic.name == filter) {
        return true;
      }
    }
    // Ketika tidak ditemukan topik dengan nama sesuai filter
    return false;
  };
  if (filter != "All") {
    artikelDitampilkan = articles.filter((article: any) =>
      filteringTopic(article, filter)
    );
  }
  // Undefined hanya ketika total tidak diinisiasikan nilainua => default (tidak dilakukan slicing)
  if (total != undefined) {
    artikelDitampilkan = artikelDitampilkan.slice(0, total);
  }

  console.log(filter);

  if (articlesLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="flex flex-col">
        {artikelDitampilkan.map((article: any) => (
          <div className="flex justify-center" key={article.id}>
            <Link href={"/artikel/" + article?.slug}>
              <div className="mobile:w-[315px]">
                <div className="flex justify-between border-b border-powder py-2 relative">
                  <div>
                    <Body preset="p3" className="mobile:text-[8px]">
                      {article?.published}
                    </Body>
                    <Body preset="b3">{article?.title}</Body>
                    <div className="flex flex-wrap gap-1 absolute bottom-2">
                      {article?.topics.map((topic: any) => (
                        <div
                          className="bg-totalwhite border-totalwhite shadow-inner rounded-2xl text-cerulean text-[8px] font-bold px-[6px] py-[1px]"
                          key={topic.id}
                        >
                          {topic.name}
                        </div>
                      ))}
                    </div>
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
};;;;;;;;
