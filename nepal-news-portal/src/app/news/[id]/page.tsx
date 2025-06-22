"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import prisma from "@/lib/prisma";
import NewsDetail from "@/components/news/NewsDetail";

const NewsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [newsArticle, setNewsArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsArticle = async () => {
      if (id) {
        const article = await prisma.news.findUnique({
          where: { id: Number(id) },
        });
        setNewsArticle(article);
        setLoading(false);
      }
    };

    fetchNewsArticle();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!newsArticle) {
    return <div>Article not found</div>;
  }

  return <NewsDetail article={newsArticle} />;
};

export default NewsPage;
