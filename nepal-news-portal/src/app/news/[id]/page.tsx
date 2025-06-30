"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { News } from "@/types";
import NewsDetail from "@/components/news/NewsDetail";

const NewsPage = () => {
  const params = useParams();
  const id = params.id as string;
  const [newsArticle, setNewsArticle] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewsArticle = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/news/${id}`);
          if (!response.ok) {
            throw new Error("Article not found");
          }
          const article = await response.json();
          setNewsArticle(article);
        } catch (err) {
          setError(
            err instanceof Error ? err.message : "Failed to load article"
          );
        } finally {
          setLoading(false);
        }
      }
    };

    fetchNewsArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (error || !newsArticle) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">
          {error || "Article not found"}
        </div>
      </div>
    );
  }

  return <NewsDetail article={newsArticle} />;
};

export default NewsPage;
