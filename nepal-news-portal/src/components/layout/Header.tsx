'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, User } from 'lucide-react';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../theme/ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories = [
    { name: 'Politics', slug: 'politics' },
    { name: 'Sports', slug: 'sports' },
    { name: 'Business', slug: 'business' },
    { name: 'Technology', slug: 'technology' },
    { name: 'Entertainment', slug: 'entertainment' },
    { name: 'Health', slug: 'health' },
  ];

  return (
    <header className="bg-card/80 backdrop-blur-md shadow-modern border-b border-border sticky top-0 z-50 transition-colors">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="font-medium">Breaking News</span>
              <span className="animate-pulse">•</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>{new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-nepal-red to-nepal-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">NP</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 font-display">
                  Nepal News
                </h1>
                <p className="text-sm text-gray-600">Your Trusted Source</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="text-foreground hover:text-primary-600 font-medium transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Search and Auth */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <ThemeToggle />
            
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-slide-up">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news..."
                  className="w-full px-4 py-3 pl-12 pr-4 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-slide-up">
          <div className="px-4 py-2 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-foreground hover:text-primary-600 font-medium rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="block px-3 py-2 text-foreground hover:text-primary-600 font-medium rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-muted-foreground text-sm">Theme</span>
                <ThemeToggle />
              </div>
              <Link
                href="/login"
                className="block px-3 py-2 text-foreground hover:text-primary-600 font-medium rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block px-3 py-2 text-foreground hover:text-primary-600 font-medium rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;