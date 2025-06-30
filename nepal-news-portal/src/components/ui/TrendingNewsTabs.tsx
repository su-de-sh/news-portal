import React, { useState } from "react";
import Image from "next/image";
import { Clock, Eye, TrendingUp, Zap, Star, ChevronRight } from "lucide-react";
import { formatRelativeTime } from "../../lib/utils";

interface NewsItem {
  id: string | number;
  title: string;
  slug: string;
  excerpt?: string;
  image?: string;
  publishedAt: Date | string;
  author: {
    name: string;
  };
  category: {
    name: string;
    color: string;
  };
  views: number;
}

interface TrendingNewsTabsProps {
  latestNews: NewsItem[];
  trendingNews: NewsItem[];
  editorsPick: NewsItem[];
  className?: string;
}

const TrendingNewsTabs: React.FC<TrendingNewsTabsProps> = ({
  latestNews,
  trendingNews,
  editorsPick,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<"latest" | "trending" | "editors">(
    "latest"
  );

  const tabs = [
    {
      id: "latest" as const,
      label: "LATEST",
      icon: Clock,
      data: latestNews,
      color: "bg-blue-600",
    },
    {
      id: "trending" as const,
      label: "TRENDING",
      icon: TrendingUp,
      data: trendingNews,
      color: "bg-red-600",
    },
    {
      id: "editors" as const,
      label: "EDITOR'S PICK",
      icon: Star,
      data: editorsPick,
      color: "bg-purple-600",
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}
    >
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 text-sm font-semibold transition-all duration-200 relative group ${
                isActive
                  ? "text-white bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <IconComponent className="h-4 w-4" />
                <span>{tab.label}</span>
              </div>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        <div className="space-y-6">
          {activeTabData?.data.slice(0, 5).map((news, index) => (
            <div key={news.id} className="group relative">
              {/* Timeline dot and line */}
              <div className="absolute left-0 top-0 flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full ${activeTabData.color} text-white flex items-center justify-center text-sm font-bold z-10`}
                >
                  {index + 1}
                </div>
                {index < activeTabData.data.slice(0, 5).length - 1 && (
                  <div className="w-0.5 h-16 bg-gray-200 dark:bg-gray-700 mt-2"></div>
                )}
              </div>

              {/* News Content */}
              <div className="ml-12 pb-4">
                <a
                  href={`/news/${news.slug}`}
                  className="block hover:bg-gray-50 dark:hover:bg-gray-800 -mx-3 p-3 rounded-lg transition-colors duration-200"
                >
                  <div className="flex space-x-4">
                    {/* Thumbnail */}
                    {news.image && (
                      <div className="relative w-20 h-16 flex-shrink-0 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-200">
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-2 mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {news.title}
                      </h3>

                      {/* Meta info */}
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                        <div className="flex items-center space-x-2">
                          <span>{news.author.name}</span>
                          <span>•</span>
                          <span>
                            {formatRelativeTime(
                              news.publishedAt instanceof Date
                                ? news.publishedAt
                                : new Date(news.publishedAt)
                            )}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{news.views.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Category */}
                      <span
                        className="inline-block px-2 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: news.category.color }}
                      >
                        {news.category.name}
                      </span>
                    </div>

                    {/* Arrow indicator */}
                    <div className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-6 text-center">
          <button className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-semibold text-sm transition-colors duration-200 hover:underline">
            View All {activeTabData?.label} →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingNewsTabs;
