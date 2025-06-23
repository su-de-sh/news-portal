"use client";
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
  Sun,
  Play,
  Pause,
  ChevronLeft,
  Calendar,
  User,
  ExternalLink,
  Activity,
  Gauge,
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
  pressure?: number;
  visibility?: number;
  uvIndex?: number;
}

interface CarouselItem {
  id: string | number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
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

interface BentoLayoutProps {
  carouselItems: CarouselItem[];
  breakingNews: NewsItem[];
  trendingNews: NewsItem[];
  latestNews: NewsItem[];
  editorsPick: NewsItem[];
  weatherData: WeatherData;
  className?: string;
}

const BentoLayout: React.FC<BentoLayoutProps> = ({
  carouselItems,
  breakingNews,
  trendingNews,
  latestNews,
  editorsPick,
  weatherData,
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState("breaking");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselItems.length, isPlaying]);

  const tabs = [
    {
      id: "breaking",
      label: "BREAKING",
      icon: AlertCircle,
      count: breakingNews.length,
    },
    {
      id: "trending",
      label: "TRENDING",
      icon: TrendingUp,
      count: trendingNews.length,
    },
    { id: "latest", label: "LATEST", icon: Clock, count: latestNews.length },
    {
      id: "editors",
      label: "EDITOR'S PICK",
      icon: Star,
      count: editorsPick.length,
    },
  ];

  const getCurrentNews = () => {
    switch (activeTab) {
      case "breaking":
        return breakingNews;
      case "trending":
        return trendingNews;
      case "latest":
        return latestNews;
      case "editors":
        return editorsPick;
      default:
        return breakingNews;
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getAqiColor = (aqi: number) => {
    if (aqi <= 50) return "text-green-500";
    if (aqi <= 100) return "text-yellow-500";
    if (aqi <= 150) return "text-orange-500";
    if (aqi <= 200) return "text-red-500";
    if (aqi <= 300) return "text-purple-500";
    return "text-red-800";
  };

  const getAqiBackground = (aqi: number) => {
    if (aqi <= 50) return "bg-gradient-to-r from-green-500/10 to-green-600/20";
    if (aqi <= 100)
      return "bg-gradient-to-r from-yellow-500/10 to-yellow-600/20";
    if (aqi <= 150)
      return "bg-gradient-to-r from-orange-500/10 to-orange-600/20";
    if (aqi <= 200) return "bg-gradient-to-r from-red-500/10 to-red-600/20";
    if (aqi <= 300)
      return "bg-gradient-to-r from-purple-500/10 to-purple-600/20";
    return "bg-gradient-to-r from-red-800/10 to-red-900/20";
  };

  const currentCarouselItem = carouselItems[carouselIndex];

  return (
    <div className={`grid grid-cols-1  lg:grid-cols-12 gap-6 p-6 ${className}`}>
      {/* Main Carousel - Large Feature - Spans 8 columns on large screens */}
      <div className="lg:col-span-8 row-span-1">
        <div className="relative group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-[500px]">
          {/* Carousel Image */}
          <div className="relative h-full overflow-hidden">
            <Image
              src={currentCarouselItem?.image || "/placeholder.jpg"}
              alt={currentCarouselItem?.title || "News"}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{
                    backgroundColor: currentCarouselItem?.category.color,
                  }}
                >
                  {currentCarouselItem?.category.name}
                </span>
                <div className="flex items-center text-white/70 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {formatRelativeTime(
                    new Date(currentCarouselItem?.publishedAt || new Date())
                  )}
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 line-clamp-2">
                {currentCarouselItem?.title}
              </h2>

              <p className="text-white/90 text-lg line-clamp-2 mb-4">
                {currentCarouselItem?.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-white/70">
                  <User className="w-4 h-4 mr-2" />
                  <span className="text-sm">
                    {currentCarouselItem?.author.name}
                  </span>
                  <Eye className="w-4 h-4 ml-4 mr-1" />
                  <span className="text-sm">
                    {currentCarouselItem?.views?.toLocaleString()}
                  </span>
                </div>

                <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors">
                  Read More
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={() =>
                setCarouselIndex(
                  (prev) =>
                    (prev - 1 + carouselItems.length) % carouselItems.length
                )
              }
              className="p-2 bg-black/30 backdrop-blur-sm rounded-lg text-white hover:bg-black/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 bg-black/30 backdrop-blur-sm rounded-lg text-white hover:bg-black/50 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() =>
                setCarouselIndex((prev) => (prev + 1) % carouselItems.length)
              }
              className="p-2 bg-black/30 backdrop-blur-sm rounded-lg text-white hover:bg-black/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-8 flex gap-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCarouselIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === carouselIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Weather Widget */}
      <div className="lg:col-span-4   space-y-6">
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 dark:from-blue-700 dark:via-blue-800 dark:to-purple-800 rounded-2xl p-6 text-white shadow-xl h-[240px] relative overflow-hidden weather-card">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/20"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/10"></div>
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Kathmandu</h3>
                <p className="text-blue-100 text-sm">
                  {formatDate(currentTime)}
                </p>
              </div>
              <Sun className="w-8 h-8 text-yellow-300" />
            </div>

            {/* Temperature */}
            <div className="mb-4">
              <div className="text-4xl font-bold mb-1">
                {weatherData.temperature}°C
              </div>
              <div className="text-blue-100">{weatherData.condition}</div>
            </div>

            {/* Weather Details */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-blue-200" />
                <span className="text-sm">
                  {weatherData.humidity}% Humidity
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="w-4 h-4 text-blue-200" />
                <span className="text-sm">{weatherData.windSpeed} km/h</span>
              </div>
            </div>

            {/* AQI */}
            <div
              className={`p-3 rounded-xl ${getAqiBackground(
                weatherData.aqi
              )} backdrop-blur-sm`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-blue-100">Air Quality Index</div>
                  <div
                    className={`text-xl font-bold ${getAqiColor(
                      weatherData.aqi
                    )}`}
                  >
                    {weatherData.aqi} AQI
                  </div>
                  <div className="text-xs text-blue-200">
                    {weatherData.aqiLevel}
                  </div>
                </div>
                <Activity
                  className={`w-6 h-6 ${getAqiColor(weatherData.aqi)}`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 rounded-2xl p-6 text-white shadow-xl h-[240px] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-6 right-6 w-20 h-20 rounded-full border-2 border-white/20"></div>
            <div className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-white/10"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Live Time</h3>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>

            <div className="text-3xl font-mono font-bold mb-2">
              {formatTime(currentTime)}
            </div>

            <div className="text-gray-300 text-sm">
              Nepal Standard Time (NPT)
            </div>

            <div className="mt-4 flex items-center gap-2 text-gray-400 text-xs">
              <Calendar className="w-4 h-4" />
              <span>UTC +5:45</span>
            </div>
          </div>
        </div>
      </div>

      {/* News Tabs Container */}
      <div className="lg:col-span-12 row-span-1/2 row-start-1/2">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-[500px]">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="flex overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-semibold text-sm transition-all duration-200 whitespace-nowrap border-b-2 hover:bg-gray-50 dark:hover:bg-gray-700/30 active:scale-95 ${
                    activeTab === tab.id
                      ? "text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20 transform scale-105"
                      : "text-gray-600 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      activeTab === tab.id
                        ? "bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-hidden">
            <div className="p-6 h-full">
              <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin tab-content-scroll">
                {getCurrentNews()
                  .slice(0, 6)
                  .map((article, index) => (
                    <div
                      key={article.id}
                      className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 group cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-gray-600 news-item-hover"
                    >
                      {/* Article Number */}
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm ${
                          activeTab === "breaking" && article.urgent
                            ? "bg-gradient-to-r from-red-500 to-red-600 text-white animate-pulse"
                            : "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                        }`}
                      >
                        {activeTab === "breaking" && article.urgent ? (
                          <AlertCircle className="w-4 h-4" />
                        ) : (
                          index + 1
                        )}
                      </div>

                      {/* Article Image */}
                      {article.image && (
                        <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                      )}

                      {/* Article Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="px-2 py-1 rounded text-xs font-semibold text-white"
                            style={{ backgroundColor: article.category.color }}
                          >
                            {article.category.name}
                          </span>
                          {activeTab === "breaking" && article.urgent && (
                            <span className="flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded text-xs font-semibold">
                              <AlertCircle className="w-3 h-3" />
                              URGENT
                            </span>
                          )}
                        </div>

                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                          {article.title}
                        </h4>

                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {formatRelativeTime(
                                new Date(article.publishedAt)
                              )}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {article.views.toLocaleString()}
                            </span>
                          </div>

                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoLayout;
