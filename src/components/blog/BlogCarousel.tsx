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
  const [isMobile, setIsMobile] = useState(false);
  const [postAuthors, setPostAuthors] = useState<Map<number, WordPressAuthor>>(new Map());
  const carouselRef = useRef<HTMLDivElement>(null);

  // Fetch authors for each post
  useEffect(() => {
    const fetchAuthors = async () => {
      const authorsMap = await getAuthorsForPosts(posts);
      setPostAuthors(authorsMap);
    };
    
    if (posts.length > 0) {
      fetchAuthors();
    }
  }, [posts]);

  // Handle resize and set appropriate view
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      if (mobile) {
        setVisiblePosts(1);
      } else if (window.innerWidth < 1024) {
        setVisiblePosts(2);
      } else {
        setVisiblePosts(3);
      }
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : posts.length - 1));
  };

  // Handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < posts.length - 1 ? prev + 1 : 0));
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

        <div className="relative">
          {/* Navigation Buttons */}
          {posts.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-gray-100 transition-colors"
                style={{ 
                  transform: 'translateY(-50%) translateX(0)',
                  left: isMobile ? '5px' : '-20px' 
                }}
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 text-dark-slate" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-gray-100 transition-colors"
                style={{ 
                  transform: 'translateY(-50%) translateX(0)',
                  right: isMobile ? '5px' : '-20px' 
                }}
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 text-dark-slate" />
              </button>
            </>
          )}

          {/* Carousel wrapper with overflow hidden */}
          <div className="overflow-hidden">
            {/* Carousel Content */}
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex-shrink-0 w-full px-3 sm:px-4"
                  style={{
                    width: `${100 / visiblePosts}%`, 
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
          {posts.length > 1 && isMobile && (
            <div className="flex justify-center gap-2 mt-6">
              {posts.map((_, index) => (
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
      </div>
    </section>
  );
};

export default BlogCarousel;