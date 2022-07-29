import axios from "axios";
import { useState, useEffect } from "react";
import {
  ArtikelTitlePage,
  ArtikelTerbaru,
  ArtikelSemuaArtikel,
} from "@components";
import type { NextPage } from "next";
import { Article } from "@models";

const Artikel: NextPage = () => {
  const [articles, setArticles] = useState<Article>();
  const [articlesLoading, setArticlesLoading] = useState(true);
  useEffect(() => {
    axios.get("/api/articles").then((response) => {
      setArticles(response.data);
      setArticlesLoading(false);
    });
  }, []);

  console.log("CEK INDEX TS");
  console.log(articles);
  return (
    <div>
      {/* NAVBAR SPACE HEIGHT GAP  */}
      <div className="bg-powder-light h-[60px]"></div>
      <ArtikelTitlePage />
      <ArtikelTerbaru />
      <ArtikelSemuaArtikel />
    </div>
  );
};

export default Artikel;
