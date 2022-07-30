import { Body, LoadingScreen, ShareLinkToClipboard } from "@components";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { useWindowSize } from "@hooks";

type ArtikelArtikelLainnyaProps = {
  className?: string;
  // Prioritas total > filter (topic) > search
  total?: number; // Untuk mendapatkan artikel dengan jumlah tertentu
  filter?: string; // Untuk mendapatkan artikel berdasarkan topik
  search?: string; // Untuk mendapatkan artikel berdasarkan search
  children?: React.ReactNode;
};

export const ArtikelArtikelLainnya = ({
  children,
  className,
  total,
  filter,
  search,
}: ArtikelArtikelLainnyaProps) => {
  const { width } = useWindowSize();
  // GET : api/articles
  // FETCH DI SINI KARENA KOMPONEN DIGUNAKAN BEBERAPA BAGIAN
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

  // FILTER PRIORITAS 1
  // --------------------------- FILTER TOTAL ---------------------------
  // Undefined hanya ketika total tidak diinisiasikan nilainua => default (tidak dilakukan slicing)
  if (total != undefined) {
    artikelDitampilkan = artikelDitampilkan.slice(0, total);
  }

  // FILTER PRIORITAS 2
  // --------------------------- FILTER TOPIC ---------------------------
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
    artikelDitampilkan = artikelDitampilkan.filter((article: any) =>
      filteringTopic(article, filter)
    );
  }

  // FILTER PRIORITAS 3
  // --------------------------- FILTER SEARCH ---------------------------
  // Ketika nilai search tidak default ("") maka lakukan pemfilteran
  const filteringSearchInput = (article: any, search: any) => {
    // Ketika dalam judul artikel terdapat search value
    if (article.title.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    // Saat search value tidak ada di dalam judul artikel
    return false;
  };
  if (search != "") {
    artikelDitampilkan = artikelDitampilkan.filter((article: any) =>
      filteringSearchInput(article, search)
    );
  }

  // Melakukan format tanggal
  const dateFormat = (date: any) => {
    return date.slice(8) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
  };

  console.log("Filtered by total : " + total);
  console.log("Filtered by topic : " + filter);
  console.log("Filtered by search : " + search);

  if (articlesLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="flex flex-col">
        {artikelDitampilkan.map((article: any) => (
          <div className="flex justify-center" key={article.id}>
            <div className="mobile:w-[315px] tablet:w-[600px] tablet:pb-3">
              <div className="flex justify-between border-b border-powder pb-1 pt-2 relative tablet:pb-10">
                <Link href={"/artikel/" + article?.slug}>
                  <div className="mobile:max-w-[180px] tablet:max-w-[400px]">
                    <Body
                      preset="p3"
                      className="mobile:text-[8px] tablet:text-[12px]"
                    >
                      {dateFormat(article?.published)}
                    </Body>
                    <Body
                      preset={width >= 768 ? "b2" : "b3"}
                      className="mobile:text-[11px] tablet:text-[18px]"
                    >
                      {/* Handle title yang terlalu panjang */}
                      {article?.title.length >= 40
                        ? article?.title.slice(0, 40) + " ..."
                        : article?.title}
                    </Body>
                    {width >= 768 && (
                      <Body preset="p3">
                        {article?.body.slice(0, 240) + " ..."}
                      </Body>
                    )}
                    <div className="flex flex-wrap gap-1 absolute mobile:bottom-2 tablet:bottom-3">
                      {article?.topics.map((topic: any) => (
                        <div
                          className="bg-totalwhite border-totalwhite shadow-inner rounded-2xl text-cerulean text-[8px] font-bold px-[6px] py-[1px] tablet:text-[10px]"
                          key={topic.id}
                        >
                          {topic.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
                <div>
                  <ShareLinkToClipboard
                    className={
                      width >= 768 ? "absolute bottom-3 right-0 w-6" : ""
                    }
                    link={article.slug}
                  />
                </div>
                <Link href={"/artikel/" + article?.slug}>
                  <div>
                    <Image
                      src={article?.photoUrl}
                      alt={article?.photoAlt}
                      width={width >= 768 ? 165 : 85}
                      height={width >= 768 ? 100 : 60}
                      className="rounded-md tablet:rounded-xl"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
