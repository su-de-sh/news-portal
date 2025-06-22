import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, Eye } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { formatRelativeTime, truncateText } from '../../lib/utils';
import { NewsCardProps } from '../../types';

const NewsCard: React.FC<NewsCardProps> = ({ news, variant = 'default' }) => {
  const { id, title, excerpt, image, publishedAt, author, category, views, slug } = news;

  if (variant === 'featured') {
    return (
      <Card className="group overflow-hidden relative h-96 md:h-[500px] card-hover">
        <Link href={`/news/${slug}`}>
          <div className="relative h-full">
            {image && (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-primary-600 px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm">
                  {category.name}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 line-clamp-3 text-balance">
                {title}
              </h2>
              {excerpt && (
                <p className="text-gray-200 mb-4 line-clamp-2 text-balance">
                  {truncateText(excerpt, 150)}
                </p>
              )}
              <div className="flex items-center justify-between text-sm text-gray-300">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span className="font-medium">{author.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{formatRelativeTime(new Date(publishedAt))}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{views.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Card>
    );
  }

  if (variant === 'compact') {
    return (
      <Card className="group card-hover transition-all duration-300">
        <CardContent className="p-4">
          <Link href={`/news/${slug}`}>
            <div className="flex space-x-4">
              {image && (
                <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <span 
                    className="px-2 py-1 text-xs font-semibold rounded-full text-white"
                    style={{ backgroundColor: category.color }}
                  >
                    {category.name}
                  </span>
                </div>
                <h3 className="font-semibold text-sm line-clamp-2 text-foreground group-hover:text-primary-600 transition-colors">
                  {title}
                </h3>
                <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <span>{author.name}</span>
                    <span>•</span>
                    <span>{formatRelativeTime(new Date(publishedAt))}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span>{views.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </CardContent>
      </Card>
    );
  }

  // Default variant
  return (
    <Card className="group overflow-hidden card-hover animate-fade-in">
      <Link href={`/news/${slug}`}>
        {image && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span 
                className="px-3 py-1 text-xs font-semibold rounded-full text-white backdrop-blur-sm"
                style={{ backgroundColor: category.color }}
              >
                {category.name}
              </span>
            </div>
          </div>
        )}
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors text-balance">
            {title}
          </h3>
          {excerpt && (
            <p className="text-muted-foreground mb-4 line-clamp-3 text-balance">
              {truncateText(excerpt, 120)}
            </p>
          )}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span className="font-medium">{author.name}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{formatRelativeTime(new Date(publishedAt))}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{views.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default NewsCard;