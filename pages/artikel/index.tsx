import axios from "axios";
import { useState, useEffect } from "react";
import {
  ArtikelTitlePage,
  ArtikelTerbaru,
  ArtikelSemuaArtikel,
  LoadingScreen,
} from "@components";
import type { NextPage } from "next";
import { Article, Topic } from "@models";

const Artikel: NextPage = () => {
  // GET : api/articles
  const [articles, setArticles] = useState<Article>();
  const [articlesLoading, setArticlesLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/articles").then((response) => {
      setArticles(response.data);
      setArticlesLoading(false);
    });
  }, []);

  // GET : api/topics
  const [topics, setTopics] = useState<Topic>();
  const [topicsLoading, setTopicsLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/topics").then((response) => {
      setTopics(response.data);
      setTopicsLoading(false);
    });
  }, []);

  console.log("CEK INDEX.TS");
  console.log(articles);
  console.log(topics);

  if (articlesLoading || topicsLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <div>
        {/* NAVBAR SPACE HEIGHT GAP  */}
        <div className="bg-powder-light h-[60px]"></div>
        <ArtikelTitlePage />
        <ArtikelTerbaru articles={articles} />
        <ArtikelSemuaArtikel articles={articles} topics={topics} />
      </div>
    );
  }
};

export default Artikel;
