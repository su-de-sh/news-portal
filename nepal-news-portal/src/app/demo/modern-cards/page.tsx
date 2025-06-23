"use client";

import React, { useState } from "react";
import ModernNewsCard from "../../../components/ui/ModernNewsCard";
import ModernNewsGrid from "../../../components/ui/ModernNewsGrid";
import ThemeToggle from "../../../components/ui/ThemeToggle";

// Sample news data for demonstration
const sampleNews = [
  {
    id: "demo-1",
    title: "Revolutionary Tech Summit Transforms Nepal's Digital Landscape",
    description:
      "Major tech companies announce groundbreaking initiatives to accelerate digital transformation across Nepal, bringing cutting-edge solutions to rural communities and remote areas.",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format",
    author: "Arun Patel",
    publishedAt: new Date().toISOString(),
    category: "Technology",
    slug: "/news/tech-summit-nepal",
  },
  {
    id: "demo-2",
    title: "Himalayan Conservation Effort Gains International Recognition",
    description:
      "Nepal's innovative approach to wildlife conservation receives praise from global environmental organizations, setting new standards for mountain ecosystem protection worldwide.",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format",
    author: "Sita Gurung",
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    category: "Environment",
    slug: "/news/himalayan-conservation",
  },
  {
    id: "demo-3",
    title: "Economic Growth Reaches New Heights in Kathmandu Valley",
    description:
      "Latest economic indicators show unprecedented growth in the capital region, driven by tourism recovery and significant infrastructure investments.",
    imageUrl:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop&auto=format",
    author: "Ram Bahadur",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    category: "Business",
    slug: "/news/economic-growth-kathmandu",
  },
  {
    id: "demo-4",
    title: "Cultural Festival Celebrates Nepal's Rich Heritage",
    description:
      "Annual heritage festival showcases traditional arts, crafts, and performances, attracting visitors from around the world to experience authentic Nepali culture.",
    imageUrl:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop&auto=format",
    author: "Maya Tamang",
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    category: "Culture",
    slug: "/news/cultural-festival",
  },
  {
    id: "demo-5",
    title: "Education Reform Initiative Transforms Rural Schools",
    description:
      "Comprehensive education program brings modern learning technologies and improved facilities to remote mountain schools across Nepal.",
    imageUrl:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop&auto=format",
    author: "Krishna Shrestha",
    publishedAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
    category: "Education",
    slug: "/news/education-reform",
  },
  {
    id: "demo-6",
    title: "Medical Breakthrough: Advanced Treatment Center Opens",
    description:
      "State-of-the-art medical facility begins operations in Pokhara, offering advanced healthcare services to the western region of Nepal.",
    imageUrl:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format",
    author: "Dr. Binita Rai",
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    category: "Health",
    slug: "/news/medical-breakthrough",
  },
];

export default function ModernCardsDemo() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          isDarkMode
            ? "bg-gray-900/95 border-gray-800"
            : "bg-white/95 border-gray-200"
        } backdrop-blur-md border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1
                className={`text-xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Modern Cards Demo
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isDarkMode
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>

              <a
                href="/"
                className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Demo Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Modern News Cards
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Experience our redesigned news cards featuring clean layouts,
              smooth animations, and enhanced readability. Switch between light
              and dark themes to see the adaptive design.
            </p>
          </div>

          {/* Single Card Examples */}
          <section className="mb-20">
            <h3
              className={`text-2xl font-bold mb-8 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Individual Card Layouts
            </h3>

            {/* Large Card */}
            <div className="mb-12">
              <h4
                className={`text-lg font-semibold mb-4 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Featured Article Layout
              </h4>
              <ModernNewsCard
                {...sampleNews[0]}
                isLarge={true}
                isDark={isDarkMode}
              />
            </div>

            {/* Regular Cards Grid */}
            <div className="mb-8">
              <h4
                className={`text-lg font-semibold mb-4 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Standard Cards
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleNews.slice(1, 4).map((article) => (
                  <ModernNewsCard
                    key={article.id}
                    {...article}
                    isDark={isDarkMode}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Grid Component Example */}
          <section className="mb-20">
            <h3
              className={`text-2xl font-bold mb-8 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Grid Layout with Featured Story
            </h3>
            <ModernNewsGrid
              news={sampleNews}
              isDark={isDarkMode}
              showFeatured={true}
            />
          </section>

          {/* Features List */}
          <section className="mb-20">
            <h3
              className={`text-2xl font-bold mb-8 text-center ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Design Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎨",
                  title: "Modern Aesthetics",
                  description:
                    "Clean, minimalist design with rounded corners and subtle shadows for a contemporary look.",
                },
                {
                  icon: "🌙",
                  title: "Dark Mode Support",
                  description:
                    "Seamless dark mode implementation with carefully chosen color palettes for comfortable reading.",
                },
                {
                  icon: "📱",
                  title: "Responsive Design",
                  description:
                    "Fully responsive layouts that adapt beautifully to all screen sizes and devices.",
                },
                {
                  icon: "⚡",
                  title: "Smooth Animations",
                  description:
                    "Subtle hover effects and transitions that enhance user experience without being distracting.",
                },
                {
                  icon: "🎯",
                  title: "Content Focus",
                  description:
                    "Typography and layout optimized for readability and content consumption.",
                },
                {
                  icon: "🔧",
                  title: "Highly Customizable",
                  description:
                    "Flexible component system that can be easily adapted to different content types and layouts.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDarkMode
                      ? "bg-gray-800 text-white hover:bg-gray-700"
                      : "bg-white text-gray-900 hover:bg-gray-50 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
