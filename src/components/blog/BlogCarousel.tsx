import React, { useState, useEffect, useRef } from 'react';
import type { WordPressPost, WordPressCategory } from '@/lib/blog';
import { getCategoriesForPost } from '@/lib/blog';
import BlogCard from './BlogCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogCarouselProps {
  posts: WordPressPost[];
}

const BlogCarousel: React.FC<BlogCarouselProps> = ({ posts }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [postCategories, setPostCategories] = useState<Map<number, WordPressCategory[]>>(new Map());
  const carouselRef = useRef<HTMLDivElement>(null);

  // Fetch categories for each post
  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesMap = new Map<number, WordPressCategory[]>();
      
      for (const post of posts) {
        const categories = await getCategoriesForPost(post.categories);
        categoriesMap.set(post.id, categories);
      }
      
      setPostCategories(categoriesMap);
    };
    
    if (posts.length > 0) {
      fetchCategories();
    }
  }, [posts]);

  // Adjust visible posts based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisiblePosts(1);
      } else if (window.innerWidth < 1024) {
        setVisiblePosts(2);
      } else {
        setVisiblePosts(3);
      }
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Math.max(0, posts.length - visiblePosts) : prev - 1));
  };

  // Handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= posts.length - visiblePosts ? 0 : prev + 1));
  };

  // Early return if no posts
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-cambridge-blue/10">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal">
            Latest Articles
          </h2>
          <a
            href="/blog"
            className="inline-flex items-center text-blue-mell hover:text-dark-slate transition-colors"
          >
            View All
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {posts.length > visiblePosts && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-gray-100 transition-colors md:-translate-x-5"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 text-dark-slate" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-gray-100 transition-colors md:translate-x-5"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 text-dark-slate" />
              </button>
            </>
          )}

          {/* Carousel Content */}
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-hidden transition-transform duration-500 ease-in-out px-4 md:px-0"
            style={{ 
              transform: `translateX(-${currentSlide * (100 / visiblePosts)}%)`,
            }}
          >
            {posts.map((post) => (
              <div
                key={post.id}
                className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] flex-grow-0 flex-shrink-0"
              >
                <BlogCard 
                  post={post} 
                  categories={postCategories.get(post.id) || []} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Dots Navigation */}
        {posts.length > visiblePosts && (
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {Array.from({ length: posts.length - visiblePosts + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? 'bg-blue-mell' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogCarousel;