import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, User, Eye } from "lucide-react";
import { Card, CardContent } from "../ui/Card";
import { formatRelativeTime, truncateText } from "../../lib/utils";
import { NewsCardProps } from "../../types";

const NewsCard: React.FC<NewsCardProps> = ({ news, variant = "default" }) => {
  const {
    id,
    title,
    excerpt,
    image,
    publishedAt,
    author,
    category,
    views,
    slug,
  } = news;

  if (variant === "featured") {
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

  if (variant === "compact") {
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

  // Default variant - Modern Design (matching screenshot)
  return (
    <Link href={`/news/${slug}`} className="block">
      <article className="group relative overflow-hidden rounded-2xl transition-all duration-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm">
        {/* Header with Author Avatar */}
        <div className="p-6 pb-4">
          <div className="flex items-center space-x-3 mb-4">
            {/* Author Avatar */}
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
              <div className="w-full h-full flex items-center justify-center text-sm font-medium text-white bg-gradient-to-br from-blue-500 to-purple-600">
                {author.name.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold leading-tight mb-3 transition-colors duration-200 text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
            {title}
          </h3>

          {/* Tags */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-yellow-500 text-black">
              🛡️
            </span>
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              #{category.name.toLowerCase()}
            </span>
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              #tdd
            </span>
          </div>

          {/* Date and Read Time */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span>{formatRelativeTime(new Date(publishedAt))}</span>
            <span>•</span>
            <span>2m read time</span>
          </div>
        </div>

        {/* Main Image */}
        {image && (
          <div className="relative overflow-hidden h-48 mx-6 mb-6 rounded-xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            />
          </div>
        )}

        {/* Action Buttons Footer */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between">
            {/* Left side actions */}
            <div className="flex items-center space-x-4">
              {/* Upvote */}
              <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
                <span className="text-sm font-medium">84</span>
              </button>

              {/* Downvote */}
              <button className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Comments */}
              <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="text-sm font-medium">8</span>
              </button>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Bookmark */}
              <button className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>

              {/* Share */}
              <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Subtle glow effect on hover - adapts to theme */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl" />
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
