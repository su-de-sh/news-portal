"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatRelativeTime } from "../../lib/utils";

interface CarouselItem {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  image?: string;
  publishedAt: string | Date;
  author: {
    name: string;
  };
  category: {
    name: string;
    color: string;
  };
  views: number;
}

interface CarouselProps {
  items: CarouselItem[];
  autoplay?: boolean;
  interval?: number;
  className?: string;
}

export function NewsCarousel({
  items,
  autoplay = true,
  interval = 5000,
  className = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  }, [items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || isPaused || items.length <= 1) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [isPlaying, isPaused, nextSlide, interval, items.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === " ") {
        event.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, isPlaying]);

  if (!items.length) {
    return (
      <div className="carousel-container h-96 bg-muted animate-pulse rounded-2xl flex items-center justify-center">
        <span className="text-muted-foreground">
          No featured news available
        </span>
      </div>
    );
  }

  const currentItem = items[currentIndex];

  return (
    <div
      className={`carousel-container group relative h-96 md:h-[500px] lg:h-[600px] ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main slide */}
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        {currentItem.image && (
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <div className="space-y-4 animate-fade-in-up">
            {/* Category badge */}
            <div className="flex items-center space-x-3">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg"
                style={{ backgroundColor: currentItem.category.color }}
              >
                {currentItem.category.name}
              </span>
              <span className="text-white/80 text-sm">
                {formatRelativeTime(
                  currentItem.publishedAt instanceof Date
                    ? currentItem.publishedAt
                    : new Date(currentItem.publishedAt)
                )}
              </span>
            </div>

            {/* Title */}
            <Link href={`/news/${currentItem.slug}`}>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 line-clamp-3 hover:text-primary-200 transition-colors cursor-pointer">
                {currentItem.title}
              </h2>
            </Link>

            {/* Excerpt */}
            {currentItem.excerpt && (
              <p className="text-white/90 text-lg md:text-xl line-clamp-2 max-w-3xl">
                {currentItem.excerpt}
              </p>
            )}

            {/* Meta info */}
            <div className="flex items-center space-x-4 text-white/80">
              <span>By {currentItem.author.name}</span>
              <span>•</span>
              <span>{currentItem.views.toLocaleString()} views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      {items.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="carousel-nav left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="carousel-nav right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </>
      )}

      {/* Play/Pause button */}
      {autoplay && items.length > 1 && (
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 text-white" />
          ) : (
            <Play className="h-4 w-4 text-white" />
          )}
        </button>
      )}

      {/* Dots indicator */}
      {items.length > 1 && (
        <div className="carousel-dots">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-dot ${
                index === currentIndex ? "active" : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide counter */}
      {items.length > 1 && (
        <div className="absolute top-4 left-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {currentIndex + 1} / {items.length}
        </div>
      )}
    </div>
  );
}
