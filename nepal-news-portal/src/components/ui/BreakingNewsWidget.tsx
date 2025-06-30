import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Zap, Clock, Eye, AlertCircle, ChevronRight } from "lucide-react";
import { formatRelativeTime } from "../../lib/utils";

interface BreakingNewsItem {
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
  urgent?: boolean;
}

interface BreakingNewsWidgetProps {
  articles: BreakingNewsItem[];
  className?: string;
}

const BreakingNewsWidget: React.FC<BreakingNewsWidgetProps> = ({
  articles,
  className = "",
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div
      className={`overflow-hidden text-white bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-2xl shadow-2xl ${className}`}
    >
      {/* Header with Live Indicator */}
      <div className="p-6 pb-4 border-b border-red-500/30">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Live Pulse Indicator */}
            <div className="relative">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-yellow-400 rounded-full opacity-75 animate-ping"></div>
            </div>
            <div>
              <h2 className="flex items-center space-x-2 text-xl font-bold">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>Breaking News</span>
              </h2>
              <p className="text-sm text-red-100">Live Updates</p>
            </div>
          </div>

          {/* Real-time Clock */}
          <div className="text-right">
            <div className="font-mono text-lg font-bold">
              {formatTime(currentTime)}
            </div>
            <div className="text-xs text-red-200">Last Updated</div>
          </div>
        </div>
      </div>

      {/* Breaking News Content */}
      <div className="overflow-y-auto h-96 custom-scrollbar">
        <div className="p-6 space-y-4">
          {articles.length > 0 ? (
            articles.map((article) => (
              <a
                key={article.id}
                href={`/news/${article.slug}`}
                className="block group"
              >
                <div className="p-4 rounded-xl border backdrop-blur-sm transition-all duration-200 bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40">
                  {/* Urgent Badge */}
                  {article.urgent && (
                    <div className="flex items-center mb-3 space-x-2">
                      <AlertCircle className="w-4 h-4 text-yellow-400" />
                      <span className="text-xs font-bold tracking-wider text-yellow-400 uppercase">
                        Urgent
                      </span>
                    </div>
                  )}

                  <div className="flex space-x-3">
                    {/* Thumbnail */}
                    {article.image && (
                      <div className="overflow-hidden relative flex-shrink-0 w-20 h-16 rounded-lg">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-200 group-hover:scale-110"
                          sizes="80px"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="mb-2 text-sm font-semibold text-white transition-colors line-clamp-2 group-hover:text-yellow-300">
                        {article.title}
                      </h3>

                      {/* Meta Info */}
                      <div className="flex justify-between items-center mb-2 text-xs text-red-200">
                        <div className="flex items-center space-x-2">
                          <span>{article.author.name}</span>
                          <span>•</span>
                          <span>
                            {formatRelativeTime(
                              article.publishedAt instanceof Date
                                ? article.publishedAt
                                : new Date(article.publishedAt)
                            )}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{article.views.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Excerpt */}
                      {article.excerpt && (
                        <p className="mb-2 text-xs text-red-100 line-clamp-2">
                          {article.excerpt}
                        </p>
                      )}

                      {/* Category Badge */}
                      <div className="flex justify-between items-center">
                        <span className="inline-block px-2 py-1 text-xs font-medium text-white rounded-full bg-white/20">
                          {article.category.name}
                        </span>
                        <ChevronRight className="w-4 h-4 text-red-200 transition-colors group-hover:text-yellow-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="py-8 text-center">
              <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 rounded-full bg-white/10">
                <Zap className="w-8 h-8 text-red-200" />
              </div>
              <p className="text-sm text-red-200">
                No breaking news at the moment
              </p>
              <p className="mt-1 text-xs text-red-300">
                Check back soon for updates
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t bg-red-800/50 border-red-500/30">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2 text-red-200">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Live Feed Active</span>
          </div>
          <button className="font-semibold text-yellow-400 transition-colors hover:text-yellow-300 hover:underline">
            View All Breaking News →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsWidget;
