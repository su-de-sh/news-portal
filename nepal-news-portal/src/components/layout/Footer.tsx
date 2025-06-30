import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-nepal-red to-nepal-blue rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">NP</span>
              </div>
              <h3 className="text-xl font-bold text-white">Nepal News</h3>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-4 leading-relaxed">
              Your trusted source for authentic news from Nepal and around the
              world. Committed to delivering accurate, timely, and unbiased
              reporting.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-all duration-200 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-all duration-200 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-all duration-200 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-all duration-200 transform hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/category/politics"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Politics
                </Link>
              </li>
              <li>
                <Link
                  href="/category/sports"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  href="/category/business"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  href="/category/technology"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-not-allowed opacity-60"
                  title="Coming Soon"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-not-allowed opacity-60"
                  title="Coming Soon"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-not-allowed opacity-60"
                  title="Coming Soon"
                >
                  Advertise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-not-allowed opacity-60"
                  title="Coming Soon"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+977-1-4444444</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>info@nepalnews.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} NepBuzz. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors cursor-not-allowed opacity-60"
                title="Coming Soon"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors cursor-not-allowed opacity-60"
                title="Coming Soon"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors cursor-not-allowed opacity-60"
                title="Coming Soon"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
