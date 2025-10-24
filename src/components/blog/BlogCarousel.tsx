import React, { useState, useEffect, useRef } from 'react';
import type { WordPressPost, WordPressCategory, WordPressAuthor } from '@/lib/blog';
import { getAuthorsForPosts } from '@/lib/blog';
import BlogCard from './BlogCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Extend the WordPressPost type to include categories
interface ExtendedPost extends WordPressPost {
  fetchedCategories?: WordPressCategory[];
}

interface BlogCarouselProps {
  posts: ExtendedPost[];
}

const BlogCarousel: React.FC<BlogCarouselProps> = ({ posts }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [postAuthors, setPostAuthors] = useState<Map<number, WordPressAuthor>>(new Map());
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Set initial values and fetch authors for posts
  useEffect(() => {
    // Fetch authors for each post
    const fetchData = async () => {
      console.log('BlogCarousel: Fetching authors for posts:', posts.map(p => p.title.rendered));
      const authorsMap = await getAuthorsForPosts(posts);
      setPostAuthors(authorsMap);
      console.log('BlogCarousel: Authors map updated');
    };
    
    if (posts.length > 0) {
      fetchData();
    }

    // Update visible posts based on screen size
    const handleResize = () => {
      if (typeof window === 'undefined') return;
      
      if (window.innerWidth < 768) {
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
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
    
    // Clean up
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [posts]);

  // Handle previous slide
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      // Wrap around to the last slide
      setCurrentSlide(Math.max(0, posts.length - 1));
    }
  };

  // Handle next slide
  const nextSlide = () => {
    if (currentSlide < posts.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Wrap around to the first slide
      setCurrentSlide(0);
    }
  };

  // Calculate maximum slide index
  const maxSlideIndex = Math.max(0, posts.length - visiblePosts);

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
        <div ref={containerRef} className="relative overflow-hidden">
          {/* Navigation Buttons */}
          {posts.length > visiblePosts && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0 sm:-translate-x-4 z-10 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-gray-100 transition-colors md:-translate-x-5"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 text-dark-slate" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-0 sm:translate-x-4 z-10 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-gray-100 transition-colors md:translate-x-5"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 text-dark-slate" />
              </button>
            </>
          )}

          {/* Carousel Content */}
          <div 
            ref={carouselRef}
            className="flex gap-4 md:gap-6 transition-transform duration-300 ease-in-out px-2 md:px-0"
            style={{ 
              transform: `translateX(-${currentSlide * (100 / visiblePosts)}%)`,
              width: `${posts.length * 100}%`,
            }}
          >
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="flex-shrink-0 flex-grow-0 px-2"
                style={{ 
                  width: `${100 / posts.length}%`,
                }}
              >
                <BlogCard 
                  post={post} 
                  categories={[]} 
                  author={postAuthors.get(post.author) || null}
                  isCarousel={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Dots Navigation */}
        {posts.length > 1 && (
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {Array.from({ length: posts.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
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