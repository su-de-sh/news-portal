import React from 'react';
import { TrendingUp, Clock, Globe, Newspaper, Search, Users, Eye, MessageCircle } from 'lucide-react';
import NewsCard from '../components/news/NewsCard';
import NewsGrid from '../components/news/NewsGrid';
import { NewsCarousel } from '../components/ui/NewsCarousel';
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
  publishedAt: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
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
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
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
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 3,
    categoryId: 3,
    author: { id: 3, name: "Amit Gurung", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 3, name: "Culture", slug: "culture", color: "#10B981" },
    tags: [],
    comments: []
  }
];

// Create an array of featured news for the carousel
const mockFeaturedNewsArray = [
  mockFeaturedNews,
  {
    id: 4,
    title: "Tech Innovation Hub Opens in Kathmandu Valley",
    slug: "tech-innovation-hub-kathmandu-valley",
    excerpt: "New technology center aims to boost Nepal's digital economy and support startup ecosystem.",
    content: "",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&auto=format",
    published: true,
    featured: true,
    views: 12340,
    publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 2,
    categoryId: 4,
    author: { id: 2, name: "Priya Shrestha", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 4, name: "Technology", slug: "technology", color: "#3B82F6" },
    tags: [],
    comments: []
  },
  {
    id: 5,
    title: "Traditional Festival Brings Communities Together",
    slug: "traditional-festival-communities-together",
    excerpt: "Annual celebration showcases Nepal's rich cultural heritage with music, dance, and traditional crafts.",
    content: "",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format",
    published: true,
    featured: true,
    views: 9876,
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 3,
    categoryId: 5,
    author: { id: 3, name: "Binod Thapa", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 5, name: "Culture", slug: "culture", color: "#10B981" },
    tags: [],
    comments: []
  }
];

// Additional news for grid section
const mockGridNews = [
  {
    id: 6,
    title: "Renewable Energy Project Powers Rural Communities",
    slug: "renewable-energy-rural-communities",
    excerpt: "Solar power initiative brings electricity to remote mountain villages for the first time.",
    content: "",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 5430,
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 1,
    categoryId: 6,
    author: { id: 1, name: "Rajesh Sharma", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 6, name: "Environment", slug: "environment", color: "#059669" },
    tags: [],
    comments: []
  },
  {
    id: 7,
    title: "Young Entrepreneurs Launch Startup Incubator",
    slug: "young-entrepreneurs-startup-incubator",
    excerpt: "New program supports innovative business ideas from Nepal's emerging talent pool.",
    content: "",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 7890,
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 2,
    categoryId: 7,
    author: { id: 2, name: "Priya Thapa", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 7, name: "Business", slug: "business", color: "#3B82F6" },
    tags: [],
    comments: []
  },
  {
    id: 8,
    title: "Educational Reform Initiative Shows Promising Results",
    slug: "educational-reform-promising-results",
    excerpt: "New teaching methods and digital tools improve learning outcomes in rural schools across the nation.",
    content: "",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 4560,
    publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 3,
    categoryId: 8,
    author: { id: 3, name: "Amit Gurung", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 8, name: "Education", slug: "education", color: "#8B5CF6" },
    tags: [],
    comments: []
  },
  {
    id: 9,
    title: "Tourism Sector Recovery Exceeds Expectations",
    slug: "tourism-sector-recovery-exceeds-expectations",
    excerpt: "International visitor numbers surge as Nepal reopens major trekking routes and cultural sites.",
    content: "",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 9250,
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 1,
    categoryId: 9,
    author: { id: 1, name: "Rajesh Sharma", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 9, name: "Tourism", slug: "tourism", color: "#F59E0B" },
    tags: [],
    comments: []
  },
  {
    id: 10,
    title: "Healthcare System Modernization Reaches Milestone",
    slug: "healthcare-system-modernization-milestone",
    excerpt: "Digital health records and telemedicine services now available in 75% of government hospitals.",
    content: "",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 6780,
    publishedAt: new Date(Date.now() - 14 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 2,
    categoryId: 10,
    author: { id: 2, name: "Dr. Sita Rai", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 10, name: "Health", slug: "health", color: "#EF4444" },
    tags: [],
    comments: []
  },
  {
    id: 11,
    title: "Agricultural Innovation Boosts Crop Yields",
    slug: "agricultural-innovation-boosts-crop-yields",
    excerpt: "Smart farming techniques and drought-resistant seeds help farmers adapt to climate challenges.",
    content: "",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 5920,
    publishedAt: new Date(Date.now() - 16 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 3,
    categoryId: 11,
    author: { id: 3, name: "Binod Thapa", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 11, name: "Agriculture", slug: "agriculture", color: "#10B981" },
    tags: [],
    comments: []
  },
  {
    id: 12,
    title: "Women's Football Team Qualifies for International Tournament",
    slug: "womens-football-team-qualifies-international",
    excerpt: "Historic achievement as national women's team secures spot in regional championship.",
    content: "",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 8340,
    publishedAt: new Date(Date.now() - 18 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 1,
    categoryId: 12,
    author: { id: 1, name: "Sports Reporter", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 12, name: "Sports", slug: "sports", color: "#059669" },
    tags: [],
    comments: []
  },
  {
    id: 13,
    title: "Digital Banking Services Expand to Remote Areas",
    slug: "digital-banking-services-expand-remote-areas",
    excerpt: "Mobile banking and digital payment solutions bring financial services to underserved communities.",
    content: "",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 4670,
    publishedAt: new Date(Date.now() - 20 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 2,
    categoryId: 13,
    author: { id: 2, name: "Financial Analyst", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 13, name: "Finance", slug: "finance", color: "#3B82F6" },
    tags: [],
    comments: []
  },
  {
    id: 14,
    title: "Wildlife Conservation Program Shows Success",
    slug: "wildlife-conservation-program-shows-success",
    excerpt: "Endangered species populations increase thanks to community-based conservation efforts.",
    content: "",
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 6230,
    publishedAt: new Date(Date.now() - 22 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 3,
    categoryId: 14,
    author: { id: 3, name: "Wildlife Expert", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 14, name: "Wildlife", slug: "wildlife", color: "#059669" },
    tags: [],
    comments: []
  },
  {
    id: 15,
    title: "Historic Peace Agreement Signed Between Communities",
    slug: "historic-peace-agreement-communities",
    excerpt: "Long-standing border dispute resolved through diplomatic dialogue and community mediation.",
    content: "",
    image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 11250,
    publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 1,
    categoryId: 1,
    author: { id: 1, name: "Rajesh Sharma", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 1, name: "Politics", slug: "politics", color: "#DC143C" },
    tags: [],
    comments: []
  },
  {
    id: 16,
    title: "Revolutionary Smart City Initiative Launched",
    slug: "revolutionary-smart-city-initiative-launched",
    excerpt: "IoT sensors and AI-powered systems transform urban infrastructure and citizen services.",
    content: "",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 8970,
    publishedAt: new Date(Date.now() - 26 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 2,
    categoryId: 4,
    author: { id: 2, name: "Tech Correspondent", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 4, name: "Technology", slug: "technology", color: "#3B82F6" },
    tags: [],
    comments: []
  },
  {
    id: 17,
    title: "Ancient Monastery Restoration Project Completed",
    slug: "ancient-monastery-restoration-completed",
    excerpt: "600-year-old Buddhist monastery restored using traditional techniques and modern preservation methods.",
    content: "",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 7340,
    publishedAt: new Date(Date.now() - 28 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 3,
    categoryId: 5,
    author: { id: 3, name: "Cultural Heritage Reporter", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 5, name: "Culture", slug: "culture", color: "#10B981" },
    tags: [],
    comments: []
  },
  {
    id: 18,
    title: "International Mountain Film Festival Opens",
    slug: "international-mountain-film-festival-opens",
    excerpt: "Filmmakers from around the world showcase stories of adventure, culture, and environmental conservation.",
    content: "",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 9650,
    publishedAt: new Date(Date.now() - 30 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 1,
    categoryId: 15,
    author: { id: 1, name: "Entertainment Critic", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 15, name: "Entertainment", slug: "entertainment", color: "#F59E0B" },
    tags: [],
    comments: []
  },
  {
    id: 19,
    title: "Hydroelectric Project Nears Completion",
    slug: "hydroelectric-project-nears-completion",
    excerpt: "Major infrastructure project will provide clean energy to millions while preserving river ecosystems.",
    content: "",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 12450,
    publishedAt: new Date(Date.now() - 32 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 2,
    categoryId: 2,
    author: { id: 2, name: "Infrastructure Reporter", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 2, name: "Infrastructure", slug: "infrastructure", color: "#3B82F6" },
    tags: [],
    comments: []
  },
  {
    id: 20,
    title: "Youth Innovation Challenge Winners Announced",
    slug: "youth-innovation-challenge-winners-announced",
    excerpt: "Young inventors present solutions for sustainable development and social impact.",
    content: "",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 6780,
    publishedAt: new Date(Date.now() - 34 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 3,
    categoryId: 8,
    author: { id: 3, name: "Education Correspondent", email: "", role: "AUTHOR" as const, createdAt: new Date(), updatedAt: new Date() },
    category: { id: 8, name: "Education", slug: "education", color: "#8B5CF6" },
    tags: [],
    comments: []
  }
];

// Breaking news for ticker
const mockBreakingNews = [
  "Emergency relief operations underway in flood-affected districts",
  "Nepal's GDP growth rate reaches 5.8% this quarter",
  "International climate conference to be held in Kathmandu next month",
  "New highway project connects remote mountain communities",
  "Nepal wins gold medal in Asian Games mountaineering event"
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Breaking News Ticker */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <span className="bg-white text-red-600 px-3 py-1 rounded-md text-sm font-bold mr-4 flex-shrink-0">
              BREAKING
            </span>
            <div className="flex animate-marquee whitespace-nowrap">
              <span className="mx-8">
                {mockBreakingNews.join(" • ")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section with Featured News Carousel */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured News Carousel */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-6 w-6 text-primary-600 mr-2" />
                <h2 className="text-2xl font-bold text-foreground">Featured News</h2>
              </div>
              <NewsCarousel 
                items={mockFeaturedNewsArray} 
                autoplay={true} 
                interval={6000}
                className="mb-8"
              />
            </div>

            {/* Trending/Latest */}
            <div>
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-primary-600 mr-2" />
                <h2 className="text-xl font-bold text-foreground">Latest Updates</h2>
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

      {/* Latest News Grid Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Newspaper className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-3xl font-bold text-foreground">Latest News</h2>
            </div>
            <Button variant="ghost" className="text-primary-600 hover:text-primary-700 font-semibold">
              View All News →
            </Button>
          </div>
          
          {/* Grid with responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {mockGridNews.slice(0, 12).map((article, index) => (
              <div
                key={article.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <NewsCard news={article} variant="default" />
              </div>
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center">
            <Button 
              variant="outline" 
              className="px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50"
            >
              Load More Articles
              <span className="ml-2">({mockGridNews.length - 12} more)</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-8 bg-gradient-to-r from-primary-50 to-secondary-50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Newspaper, label: "Articles Today", value: "24", color: "text-blue-600" },
              { icon: Users, label: "Active Readers", value: "12.5K", color: "text-green-600" },
              { icon: Eye, label: "Total Views", value: "1.2M", color: "text-purple-600" },
              { icon: MessageCircle, label: "Comments", value: "3.4K", color: "text-orange-600" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Topics Section */}
      <section className="py-12 bg-gradient-to-br from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Trending Topics</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the most discussed topics in Nepal today
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { name: 'Climate Action', count: 24, color: 'bg-green-100 text-green-800 hover:bg-green-200' },
              { name: 'Digital Nepal', count: 18, color: 'bg-blue-100 text-blue-800 hover:bg-blue-200' },
              { name: 'Youth Empowerment', count: 15, color: 'bg-purple-100 text-purple-800 hover:bg-purple-200' },
              { name: 'Sustainable Tourism', count: 12, color: 'bg-orange-100 text-orange-800 hover:bg-orange-200' },
              { name: 'Women in Leadership', count: 9, color: 'bg-pink-100 text-pink-800 hover:bg-pink-200' },
              { name: 'Innovation Hub', count: 8, color: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200' },
              { name: 'Heritage Preservation', count: 6, color: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' },
            ].map((topic) => (
              <a
                key={topic.name}
                href={`/topic/${topic.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-4 py-2 rounded-full ${topic.color} transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-sm hover:shadow-md`}
              >
                <span className="font-medium">{topic.name}</span>
                <span className="text-xs bg-white bg-opacity-60 px-2 py-1 rounded-full">
                  {topic.count}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 gradient-text">Explore Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Stay informed with news from various sectors affecting Nepal and the world
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Politics', icon: '🏛️', color: 'from-red-500 to-red-600', slug: 'politics' },
              { name: 'Sports', icon: '⚽', color: 'from-green-500 to-green-600', slug: 'sports' },
              { name: 'Business', icon: '💼', color: 'from-blue-500 to-blue-600', slug: 'business' },
              { name: 'Technology', icon: '💻', color: 'from-purple-500 to-purple-600', slug: 'technology' },
              { name: 'Health', icon: '🏥', color: 'from-pink-500 to-pink-600', slug: 'health' },
              { name: 'Entertainment', icon: '🎬', color: 'from-yellow-500 to-yellow-600', slug: 'entertainment' },
            ].map((category) => (
              <a
                key={category.name}
                href={`/category/${category.slug}`}
                className="group block"
              >
                <div className="card-hover bg-card rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Find What You're Looking For</h2>
            <p className="text-muted-foreground">Search through thousands of news articles</p>
          </div>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for news, topics, or authors..."
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-primary-400 focus:outline-none focus:ring-4 focus:ring-primary-100 transition-all duration-300 text-foreground placeholder-muted-foreground shadow-sm hover:shadow-md"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 rounded-xl">
                Search
              </Button>
            </div>
            
            {/* Quick Search Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="text-sm text-muted-foreground mr-2">Popular:</span>
              {['Politics', 'Technology', 'Climate', 'Business', 'Sports'].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-200"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Globe className="h-8 w-8 text-white mr-3" />
            <h2 className="text-3xl font-bold text-white">Stay Connected</h2>
          </div>
          <p className="text-white/90 mb-8 text-lg">
            Get the latest news from Nepal delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border-0 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <Button className="bg-white text-primary-600 hover:bg-white/90 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Weather & Social Section */}
      <section className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Weather Widget */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-blue-600" />
                Nepal Weather Today
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { city: 'Kathmandu', temp: '24°C', condition: '☀️', desc: 'Sunny' },
                  { city: 'Pokhara', temp: '22°C', condition: '⛅', desc: 'Partly Cloudy' },
                  { city: 'Chitwan', temp: '28°C', condition: '🌤️', desc: 'Clear' }
                ].map((weather) => (
                  <div key={weather.city} className="text-center p-3 bg-blue-50 rounded-xl">
                    <div className="text-2xl mb-1">{weather.condition}</div>
                    <div className="font-semibold text-foreground">{weather.city}</div>
                    <div className="text-lg font-bold text-blue-600">{weather.temp}</div>
                    <div className="text-xs text-muted-foreground">{weather.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Feed */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-green-600" />
                Social Buzz
              </h3>
              <div className="space-y-4">
                {[
                  { platform: 'Twitter', handle: '@NepalNews', content: 'Breaking: New infrastructure project approved', time: '2h ago', color: 'bg-blue-100 text-blue-800' },
                  { platform: 'Facebook', handle: 'Nepal News Portal', content: 'Climate summit highlights shared in new post', time: '4h ago', color: 'bg-indigo-100 text-indigo-800' },
                  { platform: 'Instagram', handle: '@nepalnews', content: 'Photo story: Festival celebrations across Nepal', time: '6h ago', color: 'bg-pink-100 text-pink-800' }
                ].map((post, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${post.color}`}>
                        {post.platform}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.time}</span>
                    </div>
                    <p className="text-sm text-foreground">{post.content}</p>
                    <p className="text-xs text-muted-foreground mt-1">{post.handle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;