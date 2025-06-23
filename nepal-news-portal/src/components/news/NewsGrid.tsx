import React from "react";
import NewsCard from "./NewsCard";
import { News } from "../../types";

interface NewsGridProps {
  news: News[];
  variant?: "default" | "masonry";
  columns?: 2 | 3 | 4;
  showLoadMore?: boolean;
  onLoadMore?: () => void;
  loading?: boolean;
}

const NewsGrid: React.FC<NewsGridProps> = ({
  news,
  variant = "default",
  columns = 3,
  showLoadMore = false,
  onLoadMore,
  loading = false,
}) => {
  const getGridClasses = () => {
    const baseClasses = "grid gap-6 animate-fade-in";

    switch (columns) {
      case 2:
        return `${baseClasses} grid-cols-1 md:grid-cols-2`;
      case 3:
        return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-3`;
      case 4:
        return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`;
      default:
        return `${baseClasses} grid-cols-1 md:grid-cols-2 lg:grid-cols-3`;
    }
  };

  if (loading) {
    return (
      <div className={getGridClasses()}>
        {Array.from({ length: columns * 2 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-muted rounded-2xl h-64 mb-4"></div>
            <div className="space-y-2">
              <div className="bg-muted rounded h-4 w-3/4"></div>
              <div className="bg-muted rounded h-4 w-1/2"></div>
              <div className="bg-muted rounded h-3 w-full"></div>
              <div className="bg-muted rounded h-3 w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!news.length) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
          <span className="text-4xl">📰</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          No news found
        </h3>
        <p className="text-muted-foreground">
          Check back later for the latest updates.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className={getGridClasses()}>
        {news.map((article, index) => (
          <div
            key={article.id}
            className={`animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <NewsCard news={article} variant="default" />
          </div>
        ))}
      </div>

      {showLoadMore && onLoadMore && (
        <div className="text-center">
          <button
            onClick={onLoadMore}
            disabled={loading}
            className="btn btn-primary px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95"
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Loading...</span>
              </div>
            ) : (
              "Load More Articles"
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsGrid;
