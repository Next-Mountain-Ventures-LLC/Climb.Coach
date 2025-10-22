import React from 'react';
import type { WordPressPost } from '../../lib/wordpress-api';
import { formatWordPressDate, getFeaturedImageUrl, getPostCategories } from '../../lib/wordpress-api';

interface BlogCardProps {
  post: WordPressPost;
  className?: string;
}

export default function BlogCard({ post, className = '' }: BlogCardProps) {
  const featuredImage = getFeaturedImageUrl(post, 'medium');
  const categories = getPostCategories(post);
  const formattedDate = formatWordPressDate(post.date);
  
  // Strip HTML from excerpt
  const excerptText = post.excerpt.rendered
    .replace(/<[^>]*>/g, '')  // Remove HTML tags
    .replace(/&nbsp;/g, ' ')  // Replace &nbsp; with space
    .replace(/\n/g, ' ')      // Replace newlines with spaces
    .trim();
    
  const truncatedExcerpt = 
    excerptText.length > 120
      ? excerptText.substring(0, 120) + '...'
      : excerptText;

  return (
    <div 
      className={`group flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl ${className}`}
      style={{ minHeight: '24rem', maxWidth: '100%' }}
    >
      {/* Featured Image */}
      <div className="relative h-48 w-full overflow-hidden bg-mountain-green/10">
        <img
          src={featuredImage}
          alt={post.title.rendered}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Categories */}
        {categories.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {categories.map(category => (
              <span 
                key={category.id}
                className="inline-flex items-center rounded-full bg-cambridge-blue/10 px-2.5 py-0.5 text-xs font-medium text-cambridge-blue"
              >
                {category.name}
              </span>
            ))}
          </div>
        )}
        
        {/* Title */}
        <h3 className="mb-2 text-lg font-bold text-charcoal line-clamp-2 group-hover:text-mountain-green transition-colors">
          <a href={`/blog/${post.slug}`} className="stretched-link">
            <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </a>
        </h3>
        
        {/* Excerpt */}
        <p className="mb-4 text-sm text-dark-slate/70 line-clamp-3 flex-grow">
          {truncatedExcerpt}
        </p>
        
        {/* Date */}
        <div className="mt-auto pt-2 border-t border-cambridge-blue/10">
          <p className="text-xs text-dark-slate/60">
            {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
}