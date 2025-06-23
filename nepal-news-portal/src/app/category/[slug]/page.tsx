"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { News } from "types";
import NewsCard from "components/news/NewsCard";

const CategoryPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [articles, setArticles] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categoryName, setCategoryName] = useState<string>("");

  useEffect(() => {
    const fetchArticles = async () => {
      if (slug) {
        try {
          const response = await fetch(`/api/news?category=${slug}`);
          if (!response.ok) {
            throw new Error("Failed to fetch articles");
          }
          const data = await response.json();
          setArticles(data.articles || []);

          // Set category name from slug (capitalize and format)
          setCategoryName(
            slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ")
          );
        } catch (err) {
          setError(
            err instanceof Error ? err.message : "Failed to load articles"
          );
        } finally {
          setLoading(false);
        }
      }
    };

    fetchArticles();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600 dark:text-gray-400">
          Loading {categoryName} articles...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-red-600 dark:text-red-400">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {categoryName}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {articles.length} article{articles.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {/* Articles Grid */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <NewsCard key={article.id} news={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 dark:text-gray-400 text-lg">
              No articles found in {categoryName} category.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
