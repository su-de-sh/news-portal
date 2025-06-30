import React from "react";
import NewsCard from "./NewsCard";
import { News } from "@/types";

interface NewsListProps {
  articles: News[];
  variant?: "default" | "featured" | "compact";
}

const NewsList: React.FC<NewsListProps> = ({
  articles,
  variant = "default",
}) => {
  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <NewsCard key={article.id} news={article} variant={variant} />
      ))}
    </div>
  );
};

export default NewsList;
