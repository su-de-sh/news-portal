"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, Bell } from "lucide-react";
import { Button } from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import { UserMenu } from "../ui/UserMenu";
import useAuth from "@/hooks/useAuth";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { name: "Politics", slug: "politics" },
    { name: "Sports", slug: "sports" },
    { name: "Business", slug: "business" },
    { name: "Technology", slug: "technology" },
    { name: "Entertainment", slug: "entertainment" },
    { name: "Health", slug: "health" },
  ];

  return (
    <header
      className={`backdrop-blur-sm border-b transition-all duration-300 sticky top-0 z-50 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-gray-200 dark:border-slate-700"
          : "bg-white/95 dark:bg-slate-900/95 border-gray-100 dark:border-slate-800"
      }`}
    >
      <div className="bg-red-600 dark:bg-red-700 text-white py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm">
            <span className="bg-white text-red-600 dark:bg-slate-100 dark:text-red-700 px-2 py-0.5 rounded text-xs font-semibold mr-3">
              LIVE
            </span>
            <span className="flex-1 truncate">
              Emergency relief operations underway in flood-affected districts
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? "py-3" : "py-6"
          }`}
        >
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-red-600 dark:bg-red-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-sm">NB</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  NepBuzz
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                  Trusted Source
                </p>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors text-sm relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 dark:bg-red-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            {categories.slice(0, 4).map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors text-sm relative group"
              >
                {category.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 dark:bg-red-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <button className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors text-sm relative group">
              More
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 dark:bg-red-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search news..."
                className="w-64 px-4 py-2 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:border-transparent text-sm transition-all focus:w-80 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
            </div>

            <ThemeToggle />

            {isAuthenticated ? (
              <div className="hidden md:flex items-center space-x-4">
                {/* Notifications */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </Button>

                {/* User Menu */}
                <UserMenu />
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400"
                >
                  <Link href="/login" className="text-sm">
                    Login
                  </Link>
                </Button>
              </div>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-900">
          <div className="px-4 py-3 space-y-2">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Search news..."
                className="w-full px-3 py-2 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 dark:border-slate-700">
              {isAuthenticated ? (
                <>
                  <Link
                    href="/profile"
                    className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile Settings
                  </Link>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      signOut({ callbackUrl: "/" });
                    }}
                    className="block w-full text-left px-3 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium rounded-lg text-sm"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
