import React from 'react';
import type { WordPressPost, WordPressCategory, WordPressAuthor } from '@/lib/blog';
import { formatDate, getExcerpt } from '@/lib/blog';
import { CalendarDays, User, Tag } from 'lucide-react';

interface BlogCardProps {
  post: WordPressPost;
  categories: WordPressCategory[];
  isFeature?: boolean;
  author?: WordPressAuthor | null;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, categories, isFeature = false, author }) => {
  const excerpt = getExcerpt(post);
  const formattedDate = formatDate(post.date);
  
  return (
    <div className={`group rounded-lg overflow-hidden border border-mountain-green/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full ${isFeature ? 'bg-white' : 'bg-white/70'}`}>
      {/* Featured Image */}
      <div className="relative overflow-hidden">
        {post.jetpack_featured_media_url && (
          <img 
            src={post.jetpack_featured_media_url} 
            alt={post.title.rendered} 
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Categories */}
        {categories.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-1.5">
            {categories.map(category => (
              <a 
                key={category.id} 
                href={`/blog/category/${category.slug}`} 
                className="inline-flex items-center text-xs font-medium px-2 py-1 rounded-full border border-blue-mell/20 bg-blue-mell/10 text-blue-mell hover:bg-blue-mell/20 transition-colors"
              >
                <span className="flex items-center">
                  <Tag className="h-3 w-3 mr-1" />
                  {category.name}
                </span>
              </a>
            ))}
          </div>
        )}
        
        {/* Title */}
        <h3 className="text-lg md:text-xl font-heading font-bold text-charcoal mb-2 group-hover:text-blue-mell transition-colors">
          <a href={`/blog/${post.slug}`} className="hover:underline decoration-2 decoration-blue-mell/30 underline-offset-2">
            {post.title.rendered}
          </a>
        </h3>
        
        {/* Date and Author */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-dark-slate/70 mb-3">
          <div className="flex items-center gap-1">
            <CalendarDays className="h-3 w-3" />
            <span>{formattedDate}</span>
          </div>
          {author && (
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>By {author.name}</span>
            </div>
          )}
        </div>
        
        {/* Excerpt */}
        <p className="text-dark-slate/90 text-sm mb-4 flex-grow" dangerouslySetInnerHTML={{ __html: excerpt }} />
        
        {/* Read More Link */}
        <a 
          href={`/blog/${post.slug}`} 
          className="inline-flex items-center text-sm font-medium text-blue-mell hover:text-dark-slate transition-colors mt-auto"
        >
          Read More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;