import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BlogCard from './BlogCard';
import type { WordPressPost } from '../../lib/wordpress-api';
import { getClimbCoachPosts } from '../../lib/wordpress-api';

interface BlogCarouselProps {
  className?: string;
}

export default function BlogCarousel({ className = '' }: BlogCarouselProps) {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Fetch posts on component mount
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const fetchedPosts = await getClimbCoachPosts(9); // Fetch up to 9 posts
        setPosts(fetchedPosts);
        setError(null);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // Determine number of slides to show based on viewport width
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    }

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigation functions
  const nextSlide = () => {
    if (currentIndex + slidesToShow < posts.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(Math.max(0, posts.length - slidesToShow)); // Loop to end
    }
  };

  // Calculate if navigation buttons should be disabled
  const canGoNext = posts.length > slidesToShow && currentIndex + slidesToShow < posts.length;
  const canGoPrev = currentIndex > 0;

  if (loading) {
    return (
      <div className={`py-12 text-center ${className}`}>
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-mountain-green border-r-transparent"></div>
        <p className="mt-4 text-charcoal">Loading blog posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`py-12 text-center ${className}`}>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className={`py-12 text-center ${className}`}>
        <p className="text-charcoal">No blog posts found.</p>
      </div>
    );
  }

  // Calculate visible posts
  const visiblePosts = posts.slice(currentIndex, currentIndex + slidesToShow);

  return (
    <div className={`relative py-8 ${className}`}>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-charcoal">Latest Articles</h2>
        
        {/* Navigation buttons for larger screens */}
        <div className="hidden sm:flex space-x-2">
          <button
            onClick={prevSlide}
            disabled={!canGoPrev}
            className="rounded-full p-2 text-charcoal hover:bg-mountain-green/10 focus:outline-none focus:ring-2 focus:ring-mountain-green disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous posts"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={!canGoNext}
            className="rounded-full p-2 text-charcoal hover:bg-mountain-green/10 focus:outline-none focus:ring-2 focus:ring-mountain-green disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next posts"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div 
        ref={carouselRef} 
        className="relative overflow-hidden"
      >
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            width: `${(posts.length / slidesToShow) * 100}%`,
          }}
        >
          {posts.map((post) => (
            <div 
              key={post.id}
              className="px-2"
              style={{ width: `${100 / posts.length}%` }}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation for small screens */}
      <div className="mt-6 flex justify-center space-x-4 sm:hidden">
        <button
          onClick={prevSlide}
          disabled={!canGoPrev}
          className="rounded-full p-3 bg-mountain-green/10 text-charcoal hover:bg-mountain-green/20 focus:outline-none focus:ring-2 focus:ring-mountain-green disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous posts"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          disabled={!canGoNext}
          className="rounded-full p-3 bg-mountain-green/10 text-charcoal hover:bg-mountain-green/20 focus:outline-none focus:ring-2 focus:ring-mountain-green disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next posts"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="mt-6 flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(posts.length / slidesToShow) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * slidesToShow)}
            className={`h-2 w-2 rounded-full ${
              index === Math.floor(currentIndex / slidesToShow)
                ? 'bg-mountain-green'
                : 'bg-mountain-green/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* View all link */}
      <div className="mt-8 text-center">
        <a
          href="/blog"
          className="inline-flex items-center text-mountain-green hover:text-blue-mell font-medium"
        >
          View all articles
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}