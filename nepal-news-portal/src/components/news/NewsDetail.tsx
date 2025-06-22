import React from 'react';
import { useRouter } from 'next/router';
import { prisma } from '../../../lib/prisma';

const NewsDetail = ({ article }) => {
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-600 mb-4">{new Date(article.createdAt).toLocaleDateString()}</p>
      <div className="mb-4">
        <img src={article.imageUrl} alt={article.title} className="w-full h-auto rounded-lg" />
      </div>
      <div className="prose">
        <p>{article.content}</p>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const article = await prisma.article.findUnique({
    where: { id: Number(id) },
  });

  return {
    props: {
      article,
    },
  };
}

export default NewsDetail;