import axios from "axios";
import {
  Header,
  Body,
  ArtikelArtikelLainnya,
  LoadingScreen,
} from "@components";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import UliranArticles from "@images/uliran-articles.svg";
import Link from "next/link";
import { Article } from "@models";
import { useRouter } from "next/router";
import Image from "next/image";
import { useWindowSize } from "@hooks";

const Details = (artikel: any) => {
  const { width } = useWindowSize();

  const router = useRouter();
  const { slug } = router.query;

  const [article, setArticle] = useState<Article>();
  const [articleLoading, setArticleLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    axios.get(`/api/articles/${slug}`).then((response) => {
      setArticle(response.data);
      setArticleLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  // Melakukan format tanggal
  const dateFormat = (date: any) => {
    return date.slice(8) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
  };

  if (articleLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="flex justify-center bg-powder-light">
        <div className="w-5/6">
          {/* NAVBAR SPACE */}
          <div className="flex flex-col">
            <div className="h-[100px] tablet:h-[150px]"></div>
            {/* TOMBOL KEMBALI */}
            <Link href="/artikel/">
              <div className="bg-powder-light border-powder-light drop-shadow-lg rounded-3xl border-2 w-9 hover:cursor-pointer">
                <ArrowLeftIcon className="w-8 p-1" />
              </div>
            </Link>
            <div className="pt-7"></div>
            {/* JUDUL DAN TANGGAL RILIS ARTIKEL */}
            <div className="border-l-4 border-cerulean">
              <div className="px-3">
                <Header
                  preset="h5"
                  className="font-black text-[18px] tablet:text-[28px]"
                >
                  {article?.title}
                </Header>
                <Body
                  preset="p3"
                  className="text-[9px] font-semibold tablet:text-[15px]"
                >
                  {"diterbitkan pada tanggal " + dateFormat(article?.published)}
                </Body>
              </div>
            </div>
            {/* FOTO ARTIKEL */}
            <div className="flex justify-center py-8">
              <Image
                src={article?.photoUrl}
                alt={article?.photoAlt}
                width={width >= 768 ? 560 : 270}
                height={width >= 768 ? 340 : 180}
                className="rounded-lg tablet:rounded-3xl"
              />
            </div>
            {/* BADAN ARTIKEL */}
            <div className="flex flex-col gap-4 text-[12px] tablet:text-[16px] tablet:gap-6">
              <ReactMarkdown>{article?.body}</ReactMarkdown>
            </div>
            {/* ULIRAN */}
            <div className="flex justify-center pt-12">
              <UliranArticles className="tablet:w-[600px]" />
            </div>
            {/* ARTIKEL LAINNYA */}
            <div className="pb-14">
              <Header preset="h5" className="font-black py-5">
                Artikel Lainnya
              </Header>
              <ArtikelArtikelLainnya filter="All" search="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Details;
