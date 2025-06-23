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
  const [activeTab, setActiveTab] = useState<"latest" | "trending" | "editors">("latest");

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
    <div className={`bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>
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
                <div className={`w-8 h-8 rounded-full ${activeTabData.color} text-white flex items-center justify-center text-sm font-bold z-10`}>
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
                          <span>{formatRelativeTime(
                            news.publishedAt instanceof Date
                              ? news.publishedAt
                              : new Date(news.publishedAt)
                          )}</span>
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
  excerpt?: string;













































































































































































export default TrendingNewsTabs;};  );    </div>      </div>        </div>          </button>            View All {activeTabData?.label} →          <button className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-semibold text-sm transition-colors duration-200 hover:underline">        <div className="mt-6 text-center">        {/* View All Button */}        </div>          ))}            </div>              </div>                </a>                  </div>                    </div>                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />                    <div className="flex items-center">                    {/* Arrow indicator */}                    </div>                      </span>                        {news.category.name}                      >                        style={{ backgroundColor: news.category.color }}                        className="inline-block px-2 py-1 rounded-full text-xs font-medium text-white"                      <span                      {/* Category */}                      </div>                        </div>                          <span>{news.views.toLocaleString()}</span>                          <Eye className="h-3 w-3" />                        <div className="flex items-center space-x-1">                        </div>                          )}</span>                              : new Date(news.publishedAt)                              ? news.publishedAt                            news.publishedAt instanceof Date                          <span>{formatRelativeTime(                          <span>•</span>                          <span>{news.author.name}</span>                        <div className="flex items-center space-x-2">                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">                      {/* Meta info */}                                            </h3>                        {news.title}                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-2 mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">                    <div className="flex-1 min-w-0">                    {/* Content */}                    )}                      </div>                        />                          sizes="80px"                          className="object-cover"                          fill                          alt={news.title}                          src={news.image}                        <Image                      <div className="relative w-20 h-16 flex-shrink-0 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-200">                    {news.image && (                    {/* Thumbnail */}                  <div className="flex space-x-4">                >                  className="block hover:bg-gray-50 dark:hover:bg-gray-800 -mx-3 p-3 rounded-lg transition-colors duration-200"                  href={`/news/${news.slug}`}                <a              <div className="ml-12 pb-4">              {/* News Content */}              </div>                )}                  <div className="w-0.5 h-16 bg-gray-200 dark:bg-gray-700 mt-2"></div>                {index < activeTabData.data.slice(0, 5).length - 1 && (                </div>                  {index + 1}                <div className={`w-8 h-8 rounded-full ${activeTabData.color} text-white flex items-center justify-center text-sm font-bold z-10`}>              <div className="absolute left-0 top-0 flex flex-col items-center">              {/* Timeline dot and line */}            <div key={news.id} className="group relative">          {activeTabData?.data.slice(0, 5).map((news, index) => (        <div className="space-y-6">      <div className="p-6">      {/* Tab Content */}      </div>        })}          );            </button>              )}                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600"></div>              {isActive && (              </div>                <span>{tab.label}</span>                <IconComponent className="h-4 w-4" />              <div className="flex items-center justify-center space-x-2">            >              }`}                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"                  ? "text-white bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800"                isActive              className={`flex-1 px-4 py-3 text-sm font-semibold transition-all duration-200 relative group ${              onClick={() => setActiveTab(tab.id)}              key={tab.id}            <button          return (                    const isActive = activeTab === tab.id;          const IconComponent = tab.icon;        {tabs.map((tab) => {      <div className="flex border-b border-gray-200 dark:border-gray-700">      {/* Tab Navigation */}    <div className={`bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>  return (  const activeTabData = tabs.find((tab) => tab.id === activeTab);  ];    },      color: "bg-purple-600",      data: editorsPick,      icon: Star,      label: "EDITOR'S PICK",      id: "editors" as const,    {    },      color: "bg-red-600",      data: trendingNews,      icon: TrendingUp,      label: "TRENDING",      id: "trending" as const,    {    },      color: "bg-blue-600",      data: latestNews,      icon: Clock,      label: "LATEST",      id: "latest" as const,    {  const tabs = [  const [activeTab, setActiveTab] = useState<"latest" | "trending" | "editors">("latest");}) => {  className = "",  editorsPick,  trendingNews,  latestNews,const TrendingNewsTabs: React.FC<TrendingNewsTabsProps> = ({}  className?: string;  editorsPick: NewsItem[];  trendingNews: NewsItem[];  latestNews: NewsItem[];interface TrendingNewsTabsProps {}  views: number;  };    color: string;    name: string;  category: {  };    name: string;  author: {  publishedAt: Date | string;  image?: string;  publishedAt: Date;
  views: number;
  category: {
    name: string;
    color: string;
  };
  author: {
    name: string;
  };
}

interface TrendingNewsTabsProps {
  latestNews: NewsItem[];
  trendingNews: NewsItem[];
  editorsPick: NewsItem[];
}

const TrendingNewsTabs: React.FC<TrendingNewsTabsProps> = ({
  latestNews,
  trendingNews,
  editorsPick,
}) => {
  const [activeTab, setActiveTab] = useState<"latest" | "trending" | "editors">("latest");

  const tabs = [
    {
      id: "latest" as const,
      label: "LATEST",
      icon: Clock,
      color: "bg-red-600 text-white",
      hoverColor: "hover:bg-red-700",
      data: latestNews,
    },
    {
      id: "trending" as const,
      label: "TRENDING",
      icon: TrendingUp,
      color: "bg-transparent text-red-600 border border-red-200 dark:border-red-800",
      hoverColor: "hover:bg-red-50 dark:hover:bg-red-900/20",
      data: trendingNews,
    },
    {
      id: "editors" as const,
      label: "EDITOR'S PICK",
      icon: Star,
      color: "bg-transparent text-red-600 border border-red-200 dark:border-red-800",
      hoverColor: "hover:bg-red-50 dark:hover:bg-red-900/20",
      data: editorsPick,
    },
  ];

  const currentData = tabs.find(tab => tab.id === activeTab)?.data || [];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20 border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex-1 px-4 py-3 text-sm font-semibold transition-all duration-200 relative
                ${isActive 
                  ? tab.color
                  : `text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 ${tab.hoverColor}`
                }
              `}
            >
              <div className="flex items-center justify-center space-x-2">
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </div>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 dark:bg-red-500" />
              )}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="space-y-4">
          {currentData.slice(0, 5).map((article, index) => (
            <a
              key={article.id}
              href={`/news/${article.slug}`}
              className="group block"
            >
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-600">
                {/* News Number */}
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-red-600 dark:bg-red-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Time indicator */}
                <div className="flex-shrink-0 flex flex-col items-center text-xs text-gray-500 dark:text-gray-400 min-w-[80px]">
                  <div className="w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full mb-1" />
                  <span className="whitespace-nowrap">
                    {formatRelativeTime(article.publishedAt)}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base leading-tight mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {article.views.toLocaleString()}
                      </span>
                      <span>{article.author.name}</span>
                    </div>
                    
                    <span
                      className="px-2 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: article.category.color }}
                    >
                      {article.category.name}
                    </span>
                  </div>
                </div>

                {/* Thumbnail */}
                <div className="flex-shrink-0 w-16 h-16 relative rounded-lg overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                    sizes="64px"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full py-3 text-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium text-sm transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
            View All {tabs.find(tab => tab.id === activeTab)?.label} News →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingNewsTabs;
