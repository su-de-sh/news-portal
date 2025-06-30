"use client";

import React from "react";
import {
  TrendingUp,
  Clock,
  Globe,
  Newspaper,
  Search,
  Users,
  Eye,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import NewsCard from "../components/news/NewsCard";
import NewsGrid from "../components/news/NewsGrid";
import { NewsCarousel } from "../components/ui/NewsCarousel";
import { Button } from "../components/ui/Button";
import BentoLayout from "../components/ui/BentoLayout";
import { formatRelativeTime } from "../lib/utils";

// Mock data - will be replaced with actual API calls
const mockFeaturedNews = {
  id: 1,
  title: "Nepal's Historic Climate Summit Begins in Kathmandu",
  slug: "nepal-historic-climate-summit-kathmandu",
  excerpt:
    "World leaders gather in Nepal's capital to discuss sustainable development and climate action in the Himalayan region.",
  content: "",
  image:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format",
  published: true,
  featured: true,
  views: 15420,
  publishedAt: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
  authorId: 1,
  categoryId: 1,
  author: {
    id: 1,
    name: "Rajesh Sharma",
    email: "",
    role: "AUTHOR" as const,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  category: { id: 1, name: "Politics", slug: "politics", color: "#DC143C" },
  tags: [],
  comments: [],
};

const mockLatestNews = [
  {
    id: 2,
    title: "New Infrastructure Project Connects Remote Villages",
    slug: "infrastructure-project-remote-villages",
    excerpt:
      "Government announces ambitious plan to improve connectivity in mountainous regions.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 8750,
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 2,
    categoryId: 2,
    author: {
      id: 2,
      name: "Priya Thapa",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: {
      id: 2,
      name: "Infrastructure",
      slug: "infrastructure",
      color: "#3B82F6",
    },
    tags: [],
    comments: [],
  },
  {
    id: 3,
    title: "Traditional Festival Draws International Visitors",
    slug: "traditional-festival-international-visitors",
    excerpt:
      "Cultural celebration showcases Nepal's rich heritage to global audience.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 12300,
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 3,
    categoryId: 3,
    author: {
      id: 3,
      name: "Amit Gurung",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: { id: 3, name: "Culture", slug: "culture", color: "#10B981" },
    tags: [],
    comments: [],
  },
];

// Create an array of featured news for the carousel
const mockFeaturedNewsArray = [
  mockFeaturedNews,
  {
    id: 4,
    title: "Tech Innovation Hub Opens in Kathmandu Valley",
    slug: "tech-innovation-hub-kathmandu-valley",
    excerpt:
      "New technology center aims to boost Nepal's digital economy and support startup ecosystem.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&auto=format",
    published: true,
    featured: true,
    views: 12340,
    publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 2,
    categoryId: 4,
    author: {
      id: 2,
      name: "Priya Shrestha",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: {
      id: 4,
      name: "Technology",
      slug: "technology",
      color: "#3B82F6",
    },
    tags: [],
    comments: [],
  },
  {
    id: 5,
    title: "Traditional Festival Brings Communities Together",
    slug: "traditional-festival-communities-together",
    excerpt:
      "Annual celebration showcases Nepal's rich cultural heritage with music, dance, and traditional crafts.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format",
    published: true,
    featured: true,
    views: 9876,
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 3,
    categoryId: 5,
    author: {
      id: 3,
      name: "Binod Thapa",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: { id: 5, name: "Culture", slug: "culture", color: "#10B981" },
    tags: [],
    comments: [],
  },
];

// Additional news for grid section
const mockGridNews = [
  {
    id: 6,
    title: "Renewable Energy Project Powers Rural Communities",
    slug: "renewable-energy-rural-communities",
    excerpt:
      "Solar power initiative brings electricity to remote mountain villages for the first time.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 5430,
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 1,
    categoryId: 6,
    author: {
      id: 1,
      name: "Rajesh Sharma",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: {
      id: 6,
      name: "Environment",
      slug: "environment",
      color: "#059669",
    },
    tags: [],
    comments: [],
  },
  {
    id: 7,
    title: "Young Entrepreneurs Launch Startup Incubator",
    slug: "young-entrepreneurs-startup-incubator",
    excerpt:
      "New program supports innovative business ideas from Nepal's emerging talent pool.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 7890,
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 2,
    categoryId: 7,
    author: {
      id: 2,
      name: "Priya Thapa",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: { id: 7, name: "Business", slug: "business", color: "#3B82F6" },
    tags: [],
    comments: [],
  },
  {
    id: 8,
    title: "Educational Reform Initiative Shows Promising Results",
    slug: "educational-reform-promising-results",
    excerpt:
      "New teaching methods and digital tools improve learning outcomes in rural schools across the nation.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 4560,
    publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 3,
    categoryId: 8,
    author: {
      id: 3,
      name: "Amit Gurung",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: { id: 8, name: "Education", slug: "education", color: "#8B5CF6" },
    tags: [],
    comments: [],
  },
  {
    id: 9,
    title: "Tourism Sector Recovery Exceeds Expectations",
    slug: "tourism-sector-recovery-exceeds-expectations",
    excerpt:
      "International visitor numbers surge as Nepal reopens major trekking routes and cultural sites.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 9250,
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 1,
    categoryId: 9,
    author: {
      id: 1,
      name: "Rajesh Sharma",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: { id: 9, name: "Tourism", slug: "tourism", color: "#F59E0B" },
    tags: [],
    comments: [],
  },
  {
    id: 10,
    title: "Healthcare System Modernization Reaches Milestone",
    slug: "healthcare-system-modernization-milestone",
    excerpt:
      "Digital health records and telemedicine services now available in 75% of government hospitals.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 6780,
    publishedAt: new Date(Date.now() - 14 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 2,
    categoryId: 10,
    author: {
      id: 2,
      name: "Dr. Sita Rai",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: { id: 10, name: "Health", slug: "health", color: "#EF4444" },
    tags: [],
    comments: [],
  },
  {
    id: 11,
    title: "Agricultural Innovation Boosts Crop Yields",
    slug: "agricultural-innovation-boosts-crop-yields",
    excerpt:
      "Smart farming techniques and drought-resistant seeds help farmers adapt to climate challenges.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 5920,
    publishedAt: new Date(Date.now() - 16 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 3,
    categoryId: 11,
    author: {
      id: 3,
      name: "Binod Thapa",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: {
      id: 11,
      name: "Agriculture",
      slug: "agriculture",
      color: "#10B981",
    },
    tags: [],
    comments: [],
  },
  {
    id: 12,
    title: "Women's Football Team Qualifies for International Tournament",
    slug: "womens-football-team-qualifies-international",
    excerpt:
      "Historic achievement as national women's team secures spot in regional championship.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 8340,
    publishedAt: new Date(Date.now() - 18 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 1,
    categoryId: 12,
    author: {
      id: 1,
      name: "Sports Reporter",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: { id: 12, name: "Sports", slug: "sports", color: "#059669" },
    tags: [],
    comments: [],
  },
  {
    id: 13,
    title: "Digital Banking Services Expand to Remote Areas",
    slug: "digital-banking-services-expand-remote-areas",
    excerpt:
      "Mobile banking and digital payment solutions bring financial services to underserved communities.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 4670,
    publishedAt: new Date(Date.now() - 20 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 2,
    categoryId: 13,
    author: {
      id: 2,
      name: "Financial Analyst",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: { id: 13, name: "Finance", slug: "finance", color: "#3B82F6" },
    tags: [],
    comments: [],
  },
  {
    id: 14,
    title: "Wildlife Conservation Program Shows Success",
    slug: "wildlife-conservation-program-shows-success",
    excerpt:
      "Endangered species populations increase thanks to community-based conservation efforts.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 6230,
    publishedAt: new Date(Date.now() - 22 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 3,
    categoryId: 14,
    author: {
      id: 3,
      name: "Wildlife Expert",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: { id: 14, name: "Wildlife", slug: "wildlife", color: "#059669" },
    tags: [],
    comments: [],
  },
  {
    id: 15,
    title: "Historic Peace Agreement Signed Between Communities",
    slug: "historic-peace-agreement-communities",
    excerpt:
      "Long-standing border dispute resolved through diplomatic dialogue and community mediation.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 11250,
    publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 1,
    categoryId: 1,
    author: {
      id: 1,
      name: "Rajesh Sharma",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: { id: 1, name: "Politics", slug: "politics", color: "#DC143C" },
    tags: [],
    comments: [],
  },
  {
    id: 16,
    title: "Revolutionary Smart City Initiative Launched",
    slug: "revolutionary-smart-city-initiative-launched",
    excerpt:
      "IoT sensors and AI-powered systems transform urban infrastructure and citizen services.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 8970,
    publishedAt: new Date(Date.now() - 26 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 2,
    categoryId: 4,
    author: {
      id: 2,
      name: "Tech Correspondent",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: {
      id: 4,
      name: "Technology",
      slug: "technology",
      color: "#3B82F6",
    },
    tags: [],
    comments: [],
  },
  {
    id: 17,
    title: "Ancient Monastery Restoration Project Completed",
    slug: "ancient-monastery-restoration-completed",
    excerpt:
      "600-year-old Buddhist monastery restored using traditional techniques and modern preservation methods.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit-crop&auto=format",
    published: true,
    featured: false,
    views: 7340,
    publishedAt: new Date(Date.now() - 28 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 3,
    categoryId: 5,
    author: {
      id: 3,
      name: "Cultural Heritage Reporter",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: { id: 5, name: "Culture", slug: "culture", color: "#10B981" },
    tags: [],
    comments: [],
  },
  {
    id: 18,
    title: "International Mountain Film Festival Opens",
    slug: "international-mountain-film-festival-opens",
    excerpt:
      "Filmmakers from around the world showcase stories of adventure, culture, and environmental conservation.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 9650,
    publishedAt: new Date(Date.now() - 30 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 1,
    categoryId: 15,
    author: {
      id: 1,
      name: "Entertainment Critic",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: {
      id: 15,
      name: "Entertainment",
      slug: "entertainment",
      color: "#F59E0B",
    },
    tags: [],
    comments: [],
  },
  {
    id: 19,
    title: "Hydroelectric Project Nears Completion",
    slug: "hydroelectric-project-nears-completion",
    excerpt:
      "Major infrastructure project will provide clean energy to millions while preserving river ecosystems.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 12450,
    publishedAt: new Date(Date.now() - 32 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 2,
    categoryId: 2,
    author: {
      id: 2,
      name: "Infrastructure Reporter",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: {
      id: 2,
      name: "Infrastructure",
      slug: "infrastructure",
      color: "#3B82F6",
    },
    tags: [],
    comments: [],
  },
  {
    id: 20,
    title: "Youth Innovation Challenge Winners Announced",
    slug: "youth-innovation-challenge-winners-announced",
    excerpt:
      "Young inventors present solutions for sustainable development and social impact.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&auto=format",
    published: true,
    featured: false,
    views: 6780,
    publishedAt: new Date(Date.now() - 34 * 60 * 60 * 1000),
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 3,
    categoryId: 8,
    author: {
      id: 3,
      name: "Education Correspondent",
      email: "",
      role: "AUTHOR" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    category: { id: 8, name: "Education", slug: "education", color: "#8B5CF6" },
    tags: [],
    comments: [],
  },
];

// Breaking news for ticker
const mockBreakingNews = [
  "Emergency relief operations underway in flood-affected districts",
  "Nepal's GDP growth rate reaches 5.8% this quarter",
  "International climate conference to be held in Kathmandu next month",
  "New highway project connects remote mountain communities",
  "Nepal wins gold medal in Asian Games mountaineering event",
];

// Breaking news articles for sidebar
const mockBreakingNewsArticles = [
  {
    id: "breaking-1",
    title: "Emergency Relief Operations Begin in Flood-Affected Areas",
    slug: "emergency-relief-flood-operations",
    excerpt:
      "Government mobilizes resources for immediate assistance to flood victims in western Nepal.",
    image:
      "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&h=300&fit=crop&auto=format",
    publishedAt: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    author: { name: "Emergency Reporter" },
    category: { name: "Breaking", color: "#DC2626" },
    views: 5420,
  },
  {
    id: "breaking-2",
    title: "GDP Growth Reaches Record High This Quarter",
    slug: "gdp-growth-record-high",
    excerpt:
      "Nepal's economic indicators show strongest performance in recent years.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&auto=format",
    publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
    author: { name: "Economic Analyst" },
    category: { name: "Breaking", color: "#DC2626" },
    views: 3210,
  },
  {
    id: "breaking-3",
    title: "International Climate Summit Announced for Kathmandu",
    slug: "climate-summit-kathmandu",
    excerpt:
      "World leaders to gather in Nepal's capital for crucial climate discussions.",
    image:
      "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=300&fit=crop&auto=format",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    author: { name: "International Correspondent" },
    category: { name: "Breaking", color: "#DC2626" },
    views: 7830,
  },
];

// Latest news for sidebar (different from grid news)
const mockLatestSidebarNews = [
  {
    id: "latest-1",
    title: "New Highway Project Connects Remote Mountain Villages",
    slug: "highway-project-mountain-villages",
    excerpt:
      "Infrastructure development brings improved connectivity to isolated communities.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop&auto=format",
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
    author: { name: "Infrastructure Reporter" },
    category: { name: "Infrastructure", color: "#3B82F6" },
    views: 2140,
  },
  {
    id: "latest-2",
    title: "Nepal Wins Gold in Asian Games Mountaineering Event",
    slug: "nepal-gold-asian-games-mountaineering",
    excerpt:
      "National team showcases exceptional skills in challenging mountain competition.",
    image:
      "https://images.unsplash.com/photo-1551524164-687a55dd1126?w=400&h=300&fit=crop&auto=format",
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    author: { name: "Sports Correspondent" },
    category: { name: "Sports", color: "#059669" },
    views: 8900,
  },
  {
    id: "latest-3",
    title: "Digital Banking Services Expand Nationwide",
    slug: "digital-banking-expansion",
    excerpt:
      "Mobile banking solutions now available in 75% of rural districts.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format",
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    author: { name: "Finance Reporter" },
    category: { name: "Finance", color: "#8B5CF6" },
    views: 1650,
  },
  {
    id: "latest-4",
    title: "Cultural Heritage Festival Attracts International Visitors",
    slug: "heritage-festival-international-visitors",
    excerpt:
      "Traditional arts and crafts showcase draws tourists from around the world.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    author: { name: "Culture Reporter" },
    category: { name: "Culture", color: "#10B981" },
    views: 4320,
  },
  {
    id: "latest-5",
    title: "Renewable Energy Projects Show Promising Results",
    slug: "renewable-energy-promising-results",
    excerpt: "Solar and wind power initiatives exceed expected output targets.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop&auto=format",
    publishedAt: new Date(Date.now() - 7 * 60 * 60 * 1000),
    author: { name: "Energy Correspondent" },
    category: { name: "Environment", color: "#059669" },
    views: 2890,
  },
];

// Enhanced mock data for TrendingNewsTabs component
const mockTrendingNews = [
  {
    id: 101,
    title: "Nepal's Tech Revolution: Startups Transform Digital Landscape",
    slug: "nepal-tech-revolution-startups",
    excerpt:
      "Young entrepreneurs drive innovation in fintech and e-commerce sectors",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 45 * 60 * 1000),
    author: { name: "Tech Correspondent" },
    category: { name: "Technology", color: "#3B82F6" },
    views: 15420,
  },
  {
    id: 102,
    title: "Everest Base Camp Tourism Surges After Infrastructure Upgrade",
    slug: "everest-tourism-surge-infrastructure",
    excerpt:
      "New facilities and improved trails attract record number of international visitors",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    author: { name: "Tourism Reporter" },
    category: { name: "Tourism", color: "#10B981" },
    views: 12890,
  },
  {
    id: 103,
    title: "Renewable Energy Project Powers 50,000 Rural Homes",
    slug: "renewable-energy-rural-homes",
    excerpt:
      "Solar and micro-hydro installations bring electricity to remote villages",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    author: { name: "Energy Correspondent" },
    category: { name: "Environment", color: "#059669" },
    views: 9540,
  },
  {
    id: 104,
    title: "Traditional Festival Celebrates Cultural Heritage",
    slug: "traditional-festival-cultural-heritage",
    excerpt:
      "Annual celebration showcases Nepal's rich traditions to global audience",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    author: { name: "Culture Writer" },
    category: { name: "Culture", color: "#8B5CF6" },
    views: 7320,
  },
  {
    id: 105,
    title: "Agricultural Innovation Boosts Farmer Income by 40%",
    slug: "agricultural-innovation-farmer-income",
    excerpt:
      "Modern farming techniques and technology transform rural livelihoods",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
    author: { name: "Agriculture Reporter" },
    category: { name: "Agriculture", color: "#F59E0B" },
    views: 5680,
  },
];

const mockEditorsPickNews = [
  {
    id: 201,
    title: "Nepal's Democratic Journey: 30 Years of Progress",
    slug: "nepal-democratic-journey-30-years",
    excerpt:
      "Comprehensive analysis of Nepal's political transformation since 1990",
    image:
      "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
    author: { name: "Political Editor" },
    category: { name: "Politics", color: "#DC143C" },
    views: 18750,
  },
  {
    id: 202,
    title: "Climate Change Impact on Himalayan Glaciers: A Urgent Call",
    slug: "climate-change-himalayan-glaciers",
    excerpt:
      "Scientific study reveals accelerating ice loss threatens regional water security",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 18 * 60 * 60 * 1000),
    author: { name: "Science Editor" },
    category: { name: "Environment", color: "#059669" },
    views: 14230,
  },
  {
    id: 203,
    title: "Youth Entrepreneurship: The New Engine of Economic Growth",
    slug: "youth-entrepreneurship-economic-growth",
    excerpt:
      "How young Nepali entrepreneurs are driving innovation and creating jobs",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    author: { name: "Business Editor" },
    category: { name: "Business", color: "#3B82F6" },
    views: 11890,
  },
  {
    id: 204,
    title: "Education Reform: Transforming Nepal's Learning Landscape",
    slug: "education-reform-learning-landscape",
    excerpt:
      "New policies and digital tools revolutionize education across the nation",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 36 * 60 * 60 * 1000),
    author: { name: "Education Editor" },
    category: { name: "Education", color: "#8B5CF6" },
    views: 8940,
  },
  {
    id: 205,
    title: "Healthcare Innovation: Telemedicine Reaches Remote Areas",
    slug: "healthcare-innovation-telemedicine",
    excerpt:
      "Digital health solutions bridge the gap between urban expertise and rural needs",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 48 * 60 * 60 * 1000),
    author: { name: "Health Editor" },
    category: { name: "Health", color: "#EF4444" },
    views: 6750,
  },
];

// Enhanced breaking news with urgent flags for BreakingNewsWidget
const mockBreakingNewsForWidget = [
  {
    id: "breaking-urgent-1",
    title: "Emergency Relief Operations Begin in Flood-Affected Areas",
    slug: "emergency-relief-flood-operations",
    excerpt:
      "Government mobilizes resources for immediate assistance to flood victims in western Nepal.",
    image:
      "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
    author: { name: "Emergency Reporter" },
    category: { name: "Breaking", color: "#DC2626" },
    views: 8420,
    urgent: true,
  },
  {
    id: "breaking-2",
    title: "International Climate Summit Announced for Kathmandu",
    slug: "climate-summit-kathmandu",
    excerpt:
      "World leaders to gather in Nepal's capital for crucial climate discussions next month.",
    image:
      "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
    author: { name: "International Correspondent" },
    category: { name: "Breaking", color: "#DC2626" },
    views: 5830,
    urgent: false,
  },
  {
    id: "breaking-3",
    title: "GDP Growth Reaches Record High This Quarter",
    slug: "gdp-growth-record-high",
    excerpt:
      "Nepal's economic indicators show strongest performance in recent years with 5.8% growth.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 90 * 60 * 1000), // 1.5 hours ago
    author: { name: "Economic Analyst" },
    category: { name: "Breaking", color: "#DC2626" },
    views: 4210,
    urgent: false,
  },
  {
    id: "breaking-4",
    title: "New Highway Project Connects Remote Mountain Communities",
    slug: "highway-project-mountain-communities",
    excerpt:
      "Infrastructure development brings improved connectivity to isolated villages.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    author: { name: "Infrastructure Reporter" },
    category: { name: "Breaking", color: "#DC2626" },
    views: 3650,
    urgent: false,
  },
];

// Removed duplicate mock data - using consolidated bento data instead

// Mock data for BentoLayout
const bentoCarouselItems = [
  {
    id: 1,
    title: "Nepal's Historic Climate Summit Begins in Kathmandu",
    slug: "nepal-historic-climate-summit-kathmandu",
    excerpt:
      "World leaders gather in Nepal's capital to discuss sustainable development and climate action in the Himalayan region.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format",
    publishedAt: new Date(),
    author: { name: "Rajesh Sharma" },
    category: { name: "Politics", color: "#DC143C" },
    views: 15420,
  },
  {
    id: 2,
    title: "Mount Everest Expedition Season Opens with Record Safety Measures",
    slug: "everest-expedition-season-safety-measures",
    excerpt:
      "Enhanced safety protocols and weather monitoring systems ensure climber security this season.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    author: { name: "Adventure Reporter" },
    category: { name: "Adventure", color: "#059669" },
    views: 8950,
  },
  {
    id: 3,
    title: "Digital Nepal Initiative Transforms Rural Connectivity",
    slug: "digital-nepal-rural-connectivity",
    excerpt:
      "Revolutionary fiber optic network brings high-speed internet to remote mountain villages.",
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    author: { name: "Tech Reporter" },
    category: { name: "Technology", color: "#3B82F6" },
    views: 12300,
  },
];

const bentoBreakingNews = [
  {
    id: 1,
    title: "URGENT: Major Earthquake Hits Western Nepal - 6.5 Magnitude",
    slug: "major-earthquake-western-nepal",
    excerpt:
      "Emergency response teams deployed as tremors felt across multiple districts.",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 30 * 60 * 1000),
    author: { name: "Emergency Reporter" },
    category: { name: "Breaking", color: "#DC2626" },
    views: 45200,
    urgent: true,
  },
  {
    id: 2,
    title: "Parliament Passes Historic Environmental Protection Bill",
    slug: "parliament-environmental-protection-bill",
    excerpt:
      "Landmark legislation aims to preserve biodiversity and combat climate change.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
    author: { name: "Political Reporter" },
    category: { name: "Politics", color: "#DC143C" },
    views: 18700,
    urgent: false,
  },
  {
    id: 3,
    title: "Breaking: New Trade Agreement Signed with India",
    slug: "trade-agreement-india",
    excerpt:
      "Bilateral trade expected to increase by 40% following new economic partnership.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    author: { name: "Economic Reporter" },
    category: { name: "Economy", color: "#059669" },
    views: 22100,
    urgent: false,
  },
];

const bentoTrendingNews = [
  {
    id: 1,
    title: "Viral Video: Traditional Nepali Dance Takes Social Media by Storm",
    slug: "traditional-dance-viral-video",
    excerpt:
      "Local cultural group's performance gains millions of views worldwide, sparking cultural pride movement.",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    author: { name: "Culture Reporter" },
    category: { name: "Culture", color: "#8B5CF6" },
    views: 156800,
    urgent: false,
  },
  {
    id: 2,
    title:
      "Young Entrepreneur&apos;s Tech Startup Attracts International Investment",
    slug: "tech-startup-international-investment",
    excerpt:
      "Local innovation in sustainable technology receives $5M funding from Silicon Valley investors.",
    image:
      "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
    author: { name: "Business Reporter" },
    category: { name: "Business", color: "#F59E0B" },
    views: 89400,
    urgent: false,
  },
  {
    id: 3,
    title: "Himalayan Honey Wins International Organic Food Award",
    slug: "himalayan-honey-international-award",
    excerpt:
      "Nepal's premium honey brand recognized for quality and sustainable beekeeping practices.",
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
    author: { name: "Agriculture Reporter" },
    category: { name: "Agriculture", color: "#10B981" },
    views: 67200,
    urgent: false,
  },
];

const bentoLatestNews = [
  {
    id: 1,
    title: "New Infrastructure Project Connects Remote Villages",
    slug: "infrastructure-project-remote-villages",
    excerpt:
      "Government announces ambitious plan to improve connectivity in mountainous regions.",
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    author: { name: "Priya Thapa" },
    category: { name: "Infrastructure", color: "#3B82F6" },
    views: 8750,
    urgent: false,
  },
  {
    id: 2,
    title: "Traditional Festival Draws International Visitors",
    slug: "traditional-festival-international-visitors",
    excerpt:
      "Cultural celebration showcases Nepal's rich heritage to global audience.",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    author: { name: "Amit Gurung" },
    category: { name: "Culture", color: "#8B5CF6" },
    views: 12300,
    urgent: false,
  },
  {
    id: 3,
    title: "Educational Reform Initiative Shows Promising Results",
    slug: "educational-reform-promising-results",
    excerpt:
      "New teaching methods and digital tools improve learning outcomes in rural schools.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    author: { name: "Education Reporter" },
    category: { name: "Education", color: "#8B5CF6" },
    views: 4560,
    urgent: false,
  },
];

const bentoEditorsPick = [
  {
    id: 1,
    title: "In-Depth: The Future of Renewable Energy in Nepal",
    slug: "future-renewable-energy-nepal",
    excerpt:
      "Comprehensive analysis of hydroelectric potential and solar energy initiatives transforming the nation's power sector.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    author: { name: "Energy Specialist" },
    category: { name: "Energy", color: "#F59E0B" },
    views: 34500,
    urgent: false,
  },
  {
    id: 2,
    title: "Exclusive Interview: Conservation Heroes Protecting Wildlife",
    slug: "conservation-heroes-protecting-wildlife",
    excerpt:
      "Meet the dedicated individuals working tirelessly to preserve Nepal's endangered species and natural habitats.",
    image:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    author: { name: "Wildlife Correspondent" },
    category: { name: "Environment", color: "#10B981" },
    views: 28900,
    urgent: false,
  },
  {
    id: 3,
    title: "Special Report: Youth Migration and Economic Impact",
    slug: "youth-migration-economic-impact",
    excerpt:
      "Investigating the challenges and opportunities of Nepal's youth workforce seeking opportunities abroad.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=300&fit-crop&auto=format",
    publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    author: { name: "Social Affairs Editor" },
    category: { name: "Society", color: "#EC4899" },
    views: 41200,
    urgent: false,
  },
];

const bentoWeatherData = {
  temperature: 22,
  condition: "Partly Cloudy",
  humidity: 65,
  windSpeed: 12,
  aqi: 78,
  aqiLevel: "Moderate",
  icon: "partly-cloudy",
  pressure: 1013,
  visibility: 10,
  uvIndex: 6,
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-gray-900">
      {/* Bento Layout Section - Interactive News Dashboard */}
      <section className="py-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <BentoLayout
            carouselItems={bentoCarouselItems}
            breakingNews={bentoBreakingNews}
            trendingNews={bentoTrendingNews}
            latestNews={bentoLatestNews}
            editorsPick={bentoEditorsPick}
            weatherData={bentoWeatherData}
            className="mb-12"
          />
        </div>
      </section>

      {/* Latest News Grid Section - Enhanced */}
      <section className="py-16 bg-white transition-colors duration-300 dark:bg-gray-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <Newspaper className="mr-2 w-6 h-6 text-primary-600 dark:text-primary-400" />
              <h2 className="text-3xl font-bold text-foreground dark:text-white">
                Latest News
              </h2>
            </div>
            <Button
              variant="ghost"
              className="font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
            >
              View All News →
            </Button>
          </div>

          {/* Grid with responsive columns - Now shows dark cards */}
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
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
              className="px-8 py-3 font-semibold rounded-xl border-2 transition-all hover:scale-105 active:scale-95 border-primary-200 hover:border-primary-300 hover:bg-primary-50"
            >
              Load More Articles
              <span className="ml-2">({mockGridNews.length - 12} more)</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-8 bg-gradient-to-r border-t from-primary-50 to-secondary-50 border-border">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              {
                icon: Newspaper,
                label: "Articles Today",
                value: "24",
                color: "text-blue-600",
              },
              {
                icon: Users,
                label: "Active Readers",
                value: "12.5K",
                color: "text-green-600",
              },
              {
                icon: Eye,
                label: "Total Views",
                value: "1.2M",
                color: "text-purple-600",
              },
              {
                icon: MessageCircle,
                label: "Comments",
                value: "3.4K",
                color: "text-orange-600",
              },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="p-4 text-center bg-white rounded-xl border border-gray-200 shadow-sm transition-shadow duration-300 dark:bg-gray-800 dark:shadow-gray-900/20 hover:shadow-md dark:hover:shadow-gray-900/40 dark:border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon
                  className={`h-8 w-8 mx-auto mb-2 ${stat.color} dark:opacity-90`}
                />
                <div className="text-2xl font-bold text-foreground dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Topics Section */}
      <section className="py-12 bg-gray-50 transition-colors duration-300 dark:bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground dark:text-white">
              Trending Topics
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground dark:text-gray-400">
              Stay updated with the most discussed topics in Nepal today
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {[
              {
                name: "Climate Action",
                count: 24,
                color: "bg-green-100 text-green-800 hover:bg-green-200",
              },
              {
                name: "Digital Nepal",
                count: 18,
                color: "bg-blue-100 text-blue-800 hover:bg-blue-200",
              },
              {
                name: "Youth Empowerment",
                count: 15,
                color: "bg-purple-100 text-purple-800 hover:bg-purple-200",
              },
              {
                name: "Sustainable Tourism",
                count: 12,
                color: "bg-orange-100 text-orange-800 hover:bg-orange-200",
              },
              {
                name: "Women in Leadership",
                count: 9,
                color: "bg-pink-100 text-pink-800 hover:bg-pink-200",
              },
              {
                name: "Innovation Hub",
                count: 8,
                color: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
              },
              {
                name: "Heritage Preservation",
                count: 6,
                color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
              },
            ].map((topic) => (
              <a
                key={topic.name}
                href={`/topic/${topic.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={`px-4 py-2 rounded-full ${topic.color} transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-sm hover:shadow-md`}
              >
                <span className="font-medium">{topic.name}</span>
                <span className="px-2 py-1 text-xs bg-white bg-opacity-60 rounded-full">
                  {topic.count}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white transition-colors duration-300 dark:bg-gray-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground dark:text-white gradient-text">
              Explore Categories
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground dark:text-gray-400">
              Stay informed with news from various sectors affecting Nepal and
              the world
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              {
                name: "Politics",
                icon: "🏛️",
                color: "from-red-500 to-red-600",
                slug: "politics",
              },
              {
                name: "Sports",
                icon: "⚽",
                color: "from-green-500 to-green-600",
                slug: "sports",
              },
              {
                name: "Business",
                icon: "💼",
                color: "from-blue-500 to-blue-600",
                slug: "business",
              },
              {
                name: "Technology",
                icon: "💻",
                color: "from-purple-500 to-purple-600",
                slug: "technology",
              },
              {
                name: "Health",
                icon: "🏥",
                color: "from-pink-500 to-pink-600",
                slug: "health",
              },
              {
                name: "Entertainment",
                icon: "🎬",
                color: "from-yellow-500 to-yellow-600",
                slug: "entertainment",
              },
            ].map((category) => (
              <a
                key={category.name}
                href={`/category/${category.slug}`}
                className="block group"
              >
                <div className="p-6 text-center bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 card-hover dark:bg-gray-800 hover:scale-105 dark:border-gray-700 dark:shadow-gray-900/20 hover:shadow-lg dark:hover:shadow-gray-900/40">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}
                  >
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h3 className="font-semibold transition-colors text-foreground dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    {category.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white transition-colors duration-300 dark:bg-gray-800">
        <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-foreground dark:text-white">
              Find What You&apos;re Looking For
            </h2>
            <p className="text-muted-foreground dark:text-gray-400">
              Search through thousands of news articles
            </p>
          </div>

          <div className="relative mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 w-5 h-5 transform -translate-y-1/2 text-muted-foreground dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search for news, topics, or authors..."
                className="py-4 pr-4 pl-12 w-full bg-white rounded-2xl border-2 border-gray-200 shadow-sm transition-all duration-300 dark:bg-gray-900 dark:border-gray-700 focus:border-primary-400 dark:focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-100 dark:focus:ring-primary-900/20 text-foreground dark:text-white placeholder-muted-foreground dark:placeholder-gray-500 hover:shadow-md"
              />
              <Button className="absolute right-2 top-1/2 px-6 py-2 rounded-xl transform -translate-y-1/2">
                Search
              </Button>
            </div>

            {/* Quick Search Tags */}
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="mr-2 text-sm text-muted-foreground dark:text-gray-400">
                Popular:
              </span>
              {["Politics", "Technology", "Climate", "Business", "Sports"].map(
                (tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full transition-colors duration-200 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-300"
                  >
                    {tag}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700">
        <div className="px-4 mx-auto max-w-4xl text-center sm:px-6 lg:px-8">
          <div className="flex justify-center items-center mb-6">
            <Globe className="mr-3 w-8 h-8 text-white" />
            <h2 className="text-3xl font-bold text-white">Stay Connected</h2>
          </div>
          <p className="mb-8 text-lg text-white/90">
            Get the latest news from Nepal delivered to your inbox
          </p>
          <div className="flex flex-col gap-4 mx-auto max-w-md sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 text-white rounded-xl border-0 backdrop-blur-sm transition-all bg-white/10 dark:bg-white/5 placeholder-white/70 dark:placeholder-white/60 focus:bg-white/20 dark:focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 dark:focus:ring-white/30"
            />
            <Button className="px-8 py-4 font-semibold bg-white rounded-xl shadow-lg transition-all dark:bg-gray-100 text-primary-600 dark:text-primary-700 hover:bg-white/90 dark:hover:bg-gray-200 hover:shadow-xl">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Weather & Social Section */}
      <section className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50 transition-colors duration-300 dark:from-gray-800 dark:to-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Weather Widget */}
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:shadow-gray-900/20 hover:shadow-xl dark:hover:shadow-gray-900/40 dark:border-gray-700">
              <h3 className="flex items-center mb-4 text-xl font-bold text-foreground dark:text-white">
                <Globe className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-400" />
                Nepal Weather Today
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    city: "Kathmandu",
                    temp: "24°C",
                    condition: "☀️",
                    desc: "Sunny",
                  },
                  {
                    city: "Pokhara",
                    temp: "22°C",
                    condition: "⛅",
                    desc: "Partly Cloudy",
                  },
                  {
                    city: "Chitwan",
                    temp: "28°C",
                    condition: "🌤️",
                    desc: "Clear",
                  },
                ].map((weather) => (
                  <div
                    key={weather.city}
                    className="p-3 text-center bg-blue-50 rounded-xl border border-blue-100 dark:bg-blue-900/20 dark:border-blue-800/30"
                  >
                    <div className="mb-1 text-2xl">{weather.condition}</div>
                    <div className="font-semibold text-foreground dark:text-white">
                      {weather.city}
                    </div>
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {weather.temp}
                    </div>
                    <div className="text-xs text-muted-foreground dark:text-gray-400">
                      {weather.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Feed */}
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:shadow-gray-900/20 hover:shadow-xl dark:hover:shadow-gray-900/40 dark:border-gray-700">
              <h3 className="flex items-center mb-4 text-xl font-bold text-foreground dark:text-white">
                <MessageCircle className="mr-2 w-5 h-5 text-green-600 dark:text-green-400" />
                Social Buzz
              </h3>
              <div className="space-y-4">
                {[
                  {
                    platform: "Twitter",
                    handle: "@NepalNews",
                    content: "Breaking: New infrastructure project approved",
                    time: "2h ago",
                    color: "bg-blue-100 text-blue-800",
                  },
                  {
                    platform: "Facebook",
                    handle: "Nepal News Portal",
                    content: "Climate summit highlights shared in new post",
                    time: "4h ago",
                    color: "bg-indigo-100 text-indigo-800",
                  },
                  {
                    platform: "Instagram",
                    handle: "@nepalnews",
                    content: "Photo story: Festival celebrations across Nepal",
                    time: "6h ago",
                    color: "bg-pink-100 text-pink-800",
                  },
                ].map((post, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 rounded-lg border border-gray-100 transition-colors duration-200 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${post.color} dark:opacity-90`}
                      >
                        {post.platform}
                      </span>
                      <span className="text-xs text-muted-foreground dark:text-gray-400">
                        {post.time}
                      </span>
                    </div>
                    <p className="text-sm text-foreground dark:text-white">
                      {post.content}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground dark:text-gray-400">
                      {post.handle}
                    </p>
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
