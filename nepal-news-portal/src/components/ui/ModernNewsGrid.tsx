import React from "react";
import ModernNewsCard from "./ModernNewsCard";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  publishedAt: string;
  category: string;
  slug?: string;
}

interface ModernNewsGridProps {
  news: NewsItem[];
  isDark?: boolean;
  showFeatured?: boolean;
}

export default function ModernNewsGrid({
  news,
  isDark = false,
  showFeatured = true,
}: ModernNewsGridProps) {
  if (!news || news.length === 0) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No news available
          </h3>
          <p className="text-gray-500">
            Check back later for the latest updates.
          </p>
        </div>
      </div>
    );
  }

  const featuredNews = showFeatured ? news[0] : null;
  const remainingNews = showFeatured ? news.slice(1) : news;

  return (
    <div className="space-y-8">
      {/* Featured Article */}
      {featuredNews && showFeatured && (
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2
              className={`
              text-2xl font-bold tracking-tight
              ${isDark ? "text-white" : "text-gray-900"}
            `}
            >
              Featured Story
            </h2>
            <div
              className={`
              h-px flex-1 ml-6
              ${isDark ? "bg-gray-700" : "bg-gray-200"}
            `}
            />
          </div>
          <ModernNewsCard {...featuredNews} isLarge={true} isDark={isDark} />
        </section>
      )}

      {/* Regular News Grid */}
      {remainingNews.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2
              className={`
              text-2xl font-bold tracking-tight
              ${isDark ? "text-white" : "text-gray-900"}
            `}
            >
              Latest News
            </h2>
            <div
              className={`
              h-px flex-1 ml-6
              ${isDark ? "bg-gray-700" : "bg-gray-200"}
            `}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingNews.map((article) => (
              <ModernNewsCard key={article.id} {...article} isDark={isDark} />
            ))}
          </div>
        </section>
      )}

      {/* Load More Button */}
      {remainingNews.length >= 6 && (
        <div className="flex justify-center pt-8">
          <button
            className={`
            px-8 py-3 rounded-xl font-medium transition-all duration-200 
            ${
              isDark
                ? "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700"
                : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
            }
            hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
          `}
          >
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
}
