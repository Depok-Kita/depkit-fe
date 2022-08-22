import { Body, LoadingScreen, ShareLinkToClipboard } from "@components";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { useWindowSize } from "@hooks";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
type ArtikelArtikelLainnyaProps = {
  className?: string;
  // Prioritas total > filter (topic) > search
  total?: number; // Untuk mendapatkan artikel dengan jumlah tertentu
  filter?: string; // Untuk mendapatkan artikel berdasarkan topik
  search?: string; // Untuk mendapatkan artikel berdasarkan search
  mode?: string; // Untuk menyetel mode splitting by 2 atau engga
  bodyPage?: boolean; // Untuk mendapatkan posisi peletakan artikel lainnya ada di mana (bodyPage vs mainPage)
  children?: React.ReactNode;
};

export const ArtikelArtikelLainnya = ({
  children,
  className,
  total,
  filter,
  search,
  mode,
  bodyPage,
}: ArtikelArtikelLainnyaProps) => {
  const { width } = useWindowSize();
  // GET : api/articles
  // FETCH DI SINI KARENA KOMPONEN DIGUNAKAN BEBERAPA BAGIAN
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);

  // Handle panjang judul
  let slicingTitleLength = 40; // Default
  let limitTitleCharLength = 40; // Default
  // Pengecualian saat ada di bodyPage dan desktop
  if (width >= 1280 && bodyPage) {
    slicingTitleLength = 30;
    limitTitleCharLength = 30;
  }

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

  if (mode == "normal") {
    return (
      <div className="flex flex-col">
        {artikelDitampilkan.map((article: any) => (
          <Skeleton
            isLoaded={!articlesLoading}
            rounded="lg"
            mb={2}
            key={article.id}
          >
            <div className="flex justify-center">
              <div
                className={
                  bodyPage
                    ? "mobile:w-[315px] tablet:w-[600px] desktop:w-[380px] tablet:pb-3"
                    : "mobile:w-[315px] tablet:w-[600px] desktop:w-[700px] tablet:pb-3"
                }
              >
                <div
                  className={
                    bodyPage
                      ? "flex justify-between border-b border-powder pb-1 pt-2 relative tablet:pb-10 desktop:pb-2"
                      : "flex justify-between border-b border-powder pb-1 pt-2 relative tablet:pb-10 desktop:pb-12 desktop:pt-5"
                  }
                >
                  <Link href={"/artikel/" + article?.slug}>
                    <div className="mobile:max-w-[180px] tablet:max-w-[400px] desktop:max-w-[460px] hover:cursor-pointer">
                      <Body
                        preset="p3"
                        className={
                          bodyPage
                            ? "mobile:text-[8px] tablet:text-[12px] desktop:text-[10px]"
                            : "mobile:text-[8px] tablet:text-[12px] desktop:text-[15px]"
                        }
                      >
                        {dateFormat(article?.published)}
                      </Body>
                      <Body
                        preset={
                          width >= 1280 ? "b1" : width >= 768 ? "b2" : "b3"
                        }
                        className={
                          bodyPage
                            ? "mobile:text-[11px] tablet:text-[18px] desktop:text-[16px]"
                            : "mobile:text-[11px] tablet:text-[18px] desktop:text-[23px]"
                        }
                      >
                        {/* Handle title yang terlalu panjang */}
                        {article?.title.length >= limitTitleCharLength
                          ? article?.title.slice(0, slicingTitleLength) + " ..."
                          : article?.title}
                      </Body>
                      {width >= 768 && !bodyPage && (
                        <Body
                          preset="p3"
                          className={width >= 1280 ? "text-[15px]" : ""}
                        >
                          {article?.body.slice(0, 240) + " ..."}
                        </Body>
                      )}
                      <div className="flex flex-wrap gap-1 absolute mobile:bottom-2 tablet:bottom-3">
                        {article?.topics.map((topic: any) => (
                          <div
                            className={
                              bodyPage
                                ? "bg-totalwhite border-totalwhite shadow-inner rounded-2xl text-cerulean text-[8px] font-bold px-[6px] py-[1px] tablet:text-[10px] desktop:text-[10px] desktop:px-[6px] desktop:py-[1px]"
                                : "bg-totalwhite border-totalwhite shadow-inner rounded-2xl text-cerulean text-[8px] font-bold px-[6px] py-[1px] tablet:text-[10px] desktop:text-[13px] desktop:px-[8px] desktop:py-[2px]"
                            }
                            key={topic.id}
                          >
                            {topic.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                  <ShareLinkToClipboard
                    className={
                      width >= 768
                        ? bodyPage
                          ? "absolute bottom-3 right-28 w-[18px]"
                          : "absolute bottom-3 right-0 w-6"
                        : "right-24"
                    }
                    link={article.slug}
                  />
                  <Link href={"/artikel/" + article?.slug}>
                    <div className={width >= 1280 && !bodyPage ? "pt-6" : ""}>
                      <Image
                        src={article?.photoUrl}
                        alt={article?.photoAlt}
                        width={
                          width >= 1280
                            ? bodyPage
                              ? 100
                              : 200
                            : width >= 768
                            ? 165
                            : 85
                        }
                        height={
                          width >= 1280
                            ? bodyPage
                              ? 75
                              : 130
                            : width >= 768
                            ? 100
                            : 60
                        }
                        className="rounded-md tablet:rounded-xl "
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Skeleton>
        ))}
      </div>
    );
  } else {
    // Saat mode split
    return (
      <div className="grid grid-cols-2 gap-x-6">
        {artikelDitampilkan.map((article: any) => (
          <div className="flex justify-center" key={article.id}>
            <div className="w-[600px] pb-3">
              <div className="flex justify-between border-b border-powder pb-1 pt-2 relative">
                <Link href={"/artikel/" + article?.slug}>
                  <div className="mobile:max-w-[180px] tablet:max-w-[400px] desktop:max-w-[460px] hover:cursor-pointer">
                    <Body preset="p3" className="text-[8.5px]">
                      {dateFormat(article?.published)}
                    </Body>
                    <Body preset="b3" className="text-[13px]">
                      {/* Handle title yang terlalu panjang */}
                      {article?.title.length >= 40
                        ? article?.title.slice(0, 30) + " ..."
                        : article?.title}
                    </Body>
                    <div className="flex flex-wrap gap-1 absolute bottom-2">
                      {article?.topics.map((topic: any) => (
                        <div
                          className="bg-totalwhite border-totalwhite shadow-inner rounded-2xl text-cerulean font-bold px-[6px] py-[1px] text-[7px]"
                          key={topic.id}
                        >
                          {topic.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
                <ShareLinkToClipboard
                  className="absolute bottom-[10px] right-[95px] w-4"
                  link={article.slug}
                />
                <Link href={"/artikel/" + article?.slug}>
                  <div>
                    <Image
                      src={article?.photoUrl}
                      alt={article?.photoAlt}
                      width={85}
                      height={60}
                      className="rounded-md"
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
