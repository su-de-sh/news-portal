import React from 'react';
import { TrendingUp, Clock, Globe } from 'lucide-react';
import NewsCard from '../components/news/NewsCard';
import { Button } from '../components/ui/Button';

// Mock data - will be replaced with actual API calls
const mockFeaturedNews = {
  id: 1,
  title: "Nepal's Historic Climate Summit Begins in Kathmandu",
  slug: "nepal-historic-climate-summit-kathmandu",
  excerpt: "World leaders gather in Nepal's capital to discuss sustainable development and climate action in the Himalayan region.",
  content: "",
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format",
  published: true,
  featured: true,
  views: 15420,
  publishedAt: new Date().toISOString(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  authorId: 1,
  categoryId: 1,
  author: { id: 1, name: "Rajesh Sharma", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
  category: { id: 1, name: "Politics", slug: "politics", color: "#DC143C" },
  tags: [],
  comments: []
};

const mockLatestNews = [
  {
    id: 2,
    title: "New Infrastructure Project Connects Remote Villages",
    slug: "infrastructure-project-remote-villages",
    excerpt: "Government announces ambitious plan to improve connectivity in mountainous regions.",
    content: "",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 8750,
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    authorId: 2,
    categoryId: 2,
    author: { id: 2, name: "Priya Thapa", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 2, name: "Infrastructure", slug: "infrastructure", color: "#3B82F6" },
    tags: [],
    comments: []
  },
  {
    id: 3,
    title: "Traditional Festival Draws International Visitors",
    slug: "traditional-festival-international-visitors",
    excerpt: "Cultural celebration showcases Nepal's rich heritage to global audience.",
    content: "",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 12300,
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    authorId: 3,
    categoryId: 3,
    author: { id: 3, name: "Amit Gurung", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 3, name: "Culture", slug: "culture", color: "#10B981" },
    tags: [],
    comments: []
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured News */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-6 w-6 text-nepal-red mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Featured News</h2>
              </div>
              <NewsCard news={mockFeaturedNews} variant="featured" />
            </div>

            {/* Trending/Latest */}
            <div>
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-nepal-red mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Latest Updates</h2>
              </div>
              <div className="space-y-4">
                {mockLatestNews.map((news) => (
                  <NewsCard key={news.id} news={news} variant="compact" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with news from various sectors affecting Nepal and the world
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Politics', icon: '🏛️', color: 'bg-red-500' },
              { name: 'Sports', icon: '⚽', color: 'bg-green-500' },
              { name: 'Business', icon: '💼', color: 'bg-blue-500' },
              { name: 'Technology', icon: '💻', color: 'bg-purple-500' },
              { name: 'Health', icon: '🏥', color: 'bg-pink-500' },
              { name: 'Entertainment', icon: '🎬', color: 'bg-yellow-500' },
            ].map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-nepal-red py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Globe className="h-8 w-8 text-white mr-3" />
            <h2 className="text-3xl font-bold text-white">Stay Connected</h2>
          </div>
          <p className="text-nepal-white/90 mb-8 text-lg">
            Get the latest news from Nepal delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-nepal-red"
            />
            <Button className="bg-white text-nepal-red hover:bg-gray-100 px-8 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;