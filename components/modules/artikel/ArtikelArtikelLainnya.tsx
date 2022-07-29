import { Body, LoadingScreen, ShareLinkToClipboard } from "@components";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

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
            <Link href={"/artikel/" + article?.slug}>
              <div className="mobile:w-[315px]">
                <div className="flex justify-between border-b border-powder pb-1 pt-2 relative">
                  <div>
                    <Body preset="p3" className="mobile:text-[8px]">
                      {article?.published}
                    </Body>
                    <Body preset="b3">{article?.title}</Body>
                    <div className="flex flex-wrap gap-1 absolute bottom-3">
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
                    <ShareLinkToClipboard link={article.slug} />
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
