import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ModernNewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  publishedAt: string;
  category: string;
  slug?: string;
  isLarge?: boolean;
  isDark?: boolean;
}

export default function ModernNewsCard({
  title,
  description,
  imageUrl,
  author,
  publishedAt,
  category,
  slug = "#",
  isLarge = false,
  isDark = false,
}: ModernNewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const cardClass = `
    group relative overflow-hidden rounded-xl transition-all duration-300 
    ${
      isDark
        ? "bg-gray-900/95 border border-gray-800 text-white hover:bg-gray-800/95"
        : "bg-white border border-gray-200 hover:bg-gray-50"
    }
    hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm
    ${isLarge ? "md:flex md:items-center" : ""}
  `;

  const imageContainerClass = `
    ${isLarge ? "md:w-1/2" : ""}
    relative overflow-hidden
    ${isLarge ? "h-48 md:h-64" : "h-48"}
  `;

  const contentClass = `
    ${isLarge ? "md:w-1/2 md:pl-6" : ""}
    p-6
  `;

  return (
    <Link href={slug} className="block">
      <article className={cardClass}>
        <div className={imageContainerClass}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes={
              isLarge
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-600 text-white shadow-lg">
              {category}
            </span>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className={contentClass}>
          {/* Title */}
          <h3
            className={`
            font-bold leading-tight mb-3 transition-colors duration-200
            ${isLarge ? "text-xl md:text-2xl" : "text-lg"}
            ${
              isDark
                ? "text-white group-hover:text-red-400"
                : "text-gray-900 group-hover:text-red-600"
            }
          `}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className={`
            mb-4 leading-relaxed
            ${isLarge ? "text-base" : "text-sm"}
            ${isDark ? "text-gray-300" : "text-gray-600"}
          `}
          >
            {description}
          </p>

          {/* Meta Information */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Author Avatar */}
              <div
                className={`
                w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium
                ${
                  isDark
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-200 text-gray-600"
                }
              `}
              >
                {author.charAt(0).toUpperCase()}
              </div>

              <div>
                <p
                  className={`
                  text-sm font-medium
                  ${isDark ? "text-gray-200" : "text-gray-800"}
                `}
                >
                  {author}
                </p>
                <p
                  className={`
                  text-xs
                  ${isDark ? "text-gray-400" : "text-gray-500"}
                `}
                >
                  {formatDate(publishedAt)}
                </p>
              </div>
            </div>

            {/* Read More Arrow */}
            <div
              className={`
              w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200
              ${
                isDark
                  ? "bg-gray-800 text-gray-400 group-hover:bg-red-600 group-hover:text-white"
                  : "bg-gray-100 text-gray-500 group-hover:bg-red-600 group-hover:text-white"
              }
              group-hover:scale-110
            `}
            >
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </article>
    </Link>
  );
}
