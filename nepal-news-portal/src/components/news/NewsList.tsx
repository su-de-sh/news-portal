import React from "react";
import NewsCard from "./NewsCard";
import { News } from "types";

interface NewsListProps {
  articles: News[];
}

const NewsList: React.FC<NewsListProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article) => (
        <NewsCard key={article.id} news={article} />
      ))}
    </div>
  );
};

export default NewsList;
