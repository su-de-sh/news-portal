import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Clock, 
  Eye, 
  TrendingUp, 
  Zap, 
  Star, 
  ChevronRight,
  AlertCircle,
  CloudRain,
  Wind,
  Thermometer,
  Droplets,
  Sun
} from "lucide-react";
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
  urgent?: boolean;
}

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  aqi: number;
  aqiLevel: string;
  icon: string;
}

interface NewsTabsContainerProps {
  breakingNews: NewsItem[];
  trendingNews: NewsItem[];
  latestNews: NewsItem[];
  editorsPick: NewsItem[];
  className?: string;
}

const NewsTabsContainer: React.FC<NewsTabsContainerProps> = ({
  breakingNews,
  trendingNews,
  latestNews,
  editorsPick,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<"breaking" | "trending" | "latest" | "editors">("breaking");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock weather data for Kathmandu
  const [weather] = useState<WeatherData>({
    temperature: 24,
    condition: "Partly Cloudy",
    humidity: 68,
    windSpeed: 12,
    aqi: 156,
    aqiLevel: "Unhealthy",
    icon: "🌤️"
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const tabs = [
    {
      id: "breaking" as const,
      label: "BREAKING",
      icon: Zap,
      data: breakingNews,
      color: "bg-red-600",
      activeColor: "from-red-600 to-red-700",
      count: breakingNews.length,
    },
    {
      id: "trending" as const,
      label: "TRENDING",
      icon: TrendingUp,
      data: trendingNews,
      color: "bg-orange-600",
      activeColor: "from-orange-600 to-orange-700",
      count: trendingNews.length,
    },
    {
      id: "latest" as const,
      label: "LATEST",
      icon: Clock,
      data: latestNews,
      color: "bg-blue-600",
      activeColor: "from-blue-600 to-blue-700",
      count: latestNews.length,
    },
    {
      id: "editors" as const,
      label: "EDITOR'S PICK",
      icon: Star,
      data: editorsPick,
      color: "bg-purple-600",
      activeColor: "from-purple-600 to-purple-700",
      count: editorsPick.length,
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return "text-green-500";
    if (aqi <= 100) return "text-yellow-500";
    if (aqi <= 150) return "text-orange-500";
    return "text-red-500";
  };

  return (
    <div className={`bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-2xl ${className}`}>
      {/* Header with Live Time and Weather */}
      <div className="p-6 pb-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">News Center</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Live Updates</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-lg font-mono font-bold text-gray-900 dark:text-white">
              {formatTime(currentTime)}
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-xs">Kathmandu</div>
          </div>
        </div>

        {/* Weather Strip */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-3xl">{weather.icon}</div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {weather.temperature}°C
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {weather.condition}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <div className="flex items-center space-x-1">
                    <Droplets className="h-3 w-3" />
                    <span>{weather.humidity}%</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Wind className="h-3 w-3" />
                    <span>{weather.windSpeed} km/h</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AQI Badge */}
            <div className="text-right">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2">
                <div className="text-xs text-gray-600 dark:text-gray-400">AQI</div>
                <div className={`text-lg font-bold ${getAQIColor(weather.aqi)}`}>
                  {weather.aqi}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {weather.aqiLevel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-4 text-sm font-semibold transition-all duration-300 relative group ${
                isActive
                  ? `text-white bg-gradient-to-r ${tab.activeColor} shadow-lg`
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <IconComponent className={`h-4 w-4 ${isActive ? 'animate-pulse' : ''}`} />
                <span>{tab.label}</span>
                {tab.count > 0 && (
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </div>
              
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 animate-pulse"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "breaking" && (
          <div className="max-h-96 overflow-y-auto custom-scrollbar">
            <div className="space-y-4">
              {activeTabData?.data.map((article) => (
                <a
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="block group"
                >
                  <div className={`rounded-xl p-4 transition-all duration-200 border ${
                    article.urgent 
                      ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/30'
                      : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}>
                    {article.urgent && (
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertCircle className="h-4 w-4 text-red-500" />
                        <span className="text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
                          Breaking
                        </span>
                      </div>
                    )}

                    <div className="flex space-x-3">
                      {article.image && (
                        <div className="relative w-16 h-12 flex-shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-200"
                            sizes="64px"
                          />
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-2 mb-1 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                          {article.title}
                        </h3>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
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
                      </div>
                      
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {(activeTab === "trending" || activeTab === "latest" || activeTab === "editors") && (
          <div className="space-y-6">
            {activeTabData?.data.slice(0, 5).map((news, index) => (
              <div key={news.id} className="group relative">
                {/* Timeline dot and line */}
                <div className="absolute left-0 top-0 flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full ${activeTabData.color} text-white flex items-center justify-center text-sm font-bold z-10 shadow-lg`}>
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
                      {news.image && (
                        <div className="relative w-20 h-16 flex-shrink-0 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-200 shadow-sm">
                          <Image
                            src={news.image}
                            alt={news.title}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-2 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {news.title}
                        </h3>
                        
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

                        <span
                          className="inline-block px-2 py-1 rounded-full text-xs font-medium text-white shadow-sm"
                          style={{ backgroundColor: news.category.color }}
                        >
                          {news.category.name}
                        </span>
                      </div>

                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="mt-6 text-center">
          <button className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 bg-gradient-to-r ${activeTabData?.activeColor} text-white shadow-lg hover:shadow-xl`}>
            View All {activeTabData?.label} →
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsTabsContainer;
