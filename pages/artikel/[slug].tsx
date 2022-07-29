import axios from "axios";
import { Header, Body, ArtikelArtikelLainnya } from "@components";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import UliranArticles from "@images/uliran-articles.svg";
import Link from "next/link";
import { Article } from "@models";
import { useRouter } from "next/router";

const Details = (artikel: any) => {
  const router = useRouter();
  const { slug } = router.query;
  // CEK DATA MASUK
  console.log(slug);

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

  console.log("ARTIKEL");
  console.log(article);

  return (
    <div className="flex justify-center bg-powder-light">
      <div className="w-5/6">
        {/* NAVBAR SPACE */}
        <div className="flex flex-col">
          <div className="h-[100px]"></div>
          {/* TOMBOL KEMBALI */}
          <Link href="/artikel/">
            <div className="bg-powder-light border-powder-light drop-shadow-lg rounded-3xl border-2 w-9">
              <ArrowLeftIcon className="w-8 p-1" />
            </div>
          </Link>
          <div className="pt-7"></div>
          {/* JUDUL DAN TANGGAL RILIS ARTIKEL */}
          <div className="border-l-4 border-cerulean">
            <div className="px-3">
              <Header preset="h5" className="font-black">
                {article?.title}
              </Header>
              <Body preset="p3" className="text-[10px] font-semibold">
                {"diterbitkan pada tanggal " + article?.published}
              </Body>
            </div>
          </div>
          {/* FOTO ARTIKEL */}
          <div className="flex justify-center py-8">
            <img
              src={article?.photoUrl}
              width={275}
              alt="thumbnail"
              className="rounded-md"
            />
          </div>
          {/* BADAN ARTIKEL */}
          <div className="flex flex-col gap-4 text-[12px]">
            <ReactMarkdown>{article?.body}</ReactMarkdown>
          </div>
          {/* ULIRAN */}
          <div className="flex justify-center pt-12">
            <UliranArticles />
          </div>
          {/* ARTIKEL LAINNYA */}
          <div className="pb-14">
            <Header preset="h5" className="font-black py-5">
              Artikel Lainnya
            </Header>
            <ArtikelArtikelLainnya />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
