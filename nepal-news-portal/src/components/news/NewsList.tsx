import React from 'react';
import NewsCard from './NewsCard';

interface NewsListProps {
  articles: {
    id: string;
    title: string;
    summary: string;
    imageUrl: string;
  }[];
}

const NewsList: React.FC<NewsListProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article) => (
        <NewsCard
          key={article.id}
          id={article.id}
          title={article.title}
          summary={article.summary}
          imageUrl={article.imageUrl}
        />
      ))}
    </div>
  );
};

export default NewsList;