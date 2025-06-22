import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import prisma from '@/lib/prisma';
import NewsList from '@/components/news/NewsList';

const CategoryPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      if (slug) {
        const response = await fetch(`/api/news?category=${slug}`);
        const data = await response.json();
        setArticles(data);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{slug} News</h1>
      <NewsList articles={articles} />
    </div>
  );
};

export default CategoryPage;