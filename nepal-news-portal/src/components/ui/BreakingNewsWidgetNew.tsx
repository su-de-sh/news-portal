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
    <div className={`bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-2xl overflow-hidden text-white shadow-2xl ${className}`}>
      {/* Header with Live Indicator */}
      <div className="p-6 pb-4 border-b border-red-500/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Live Pulse Indicator */}
            <div className="relative">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <div>
              <h2 className="text-xl font-bold flex items-center space-x-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span>Breaking News</span>
              </h2>
              <p className="text-red-100 text-sm">Live Updates</p>
            </div>
          </div>
          
          {/* Real-time Clock */}
          <div className="text-right">
            <div className="text-lg font-mono font-bold">{formatTime(currentTime)}</div>
            <div className="text-red-200 text-xs">Last Updated</div>
          </div>
        </div>
      </div>

      {/* Breaking News Content */}
      <div className="h-96 overflow-y-auto custom-scrollbar">
        <div className="p-6 space-y-4">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <a
                key={article.id}
                href={`/news/${article.slug}`}
                className="block group"
              >
                <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/40">
                  {/* Urgent Badge */}
                  {article.urgent && (
                    <div className="flex items-center space-x-2 mb-3">
                      <AlertCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider">
                        Urgent
                      </span>
                    </div>
                  )}

                  <div className="flex space-x-3">
                    {/* Thumbnail */}
                    {article.image && (
                      <div className="relative w-20 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-200"
                          sizes="80px"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-sm line-clamp-2 mb-2 group-hover:text-yellow-300 transition-colors">
                        {article.title}
                      </h3>
                      
                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-red-200 mb-2">
                        <div className="flex items-center space-x-2">
                          <span>{article.author.name}</span>
                          <span>•</span>
                          <span>{formatRelativeTime(
                            article.publishedAt instanceof Date
                              ? article.publishedAt
                              : new Date(article.publishedAt)
                          )}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{article.views.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Excerpt */}
                      {article.excerpt && (
                        <p className="text-red-100 text-xs line-clamp-2 mb-2">
                          {article.excerpt}
                        </p>
                      )}

                      {/* Category Badge */}
                      <div className="flex items-center justify-between">
                        <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                          {article.category.name}
                        </span>
                        <ChevronRight className="h-4 w-4 text-red-200 group-hover:text-yellow-300 transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <Zap className="h-8 w-8 text-red-200" />
              </div>
              <p className="text-red-200 text-sm">No breaking news at the moment</p>
              <p className="text-red-300 text-xs mt-1">Check back soon for updates</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-red-800/50 border-t border-red-500/30">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-red-200">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Live Feed Active</span>
          </div>
          <button className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors hover:underline">
            View All Breaking News →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsWidget;
