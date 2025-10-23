import React from 'react';
import type { WordPressCategory } from '@/lib/blog';
import { Tag } from 'lucide-react';

interface CategoryFilterProps {
  categories: WordPressCategory[];
  currentCategory?: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, currentCategory }) => {
  // Sort categories alphabetically
  const sortedCategories = [...categories].sort((a, b) => 
    a.name.localeCompare(b.name)
  );

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <Tag className="h-5 w-5 text-blue-mell" />
        <h3 className="font-heading font-bold text-lg text-dark-slate">Categories</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <a
          href="/blog"
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            !currentCategory
              ? 'bg-blue-mell text-white hover:bg-dark-slate'
              : 'bg-gray-100 text-dark-slate hover:bg-gray-200'
          }`}
        >
          All Posts
        </a>
        
        {sortedCategories.length > 0 ? (
          sortedCategories.map((category) => (
            <a
              key={category.id}
              href={`/blog/category/${category.slug}`}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentCategory === category.slug
                  ? 'bg-blue-mell text-white hover:bg-dark-slate'
                  : 'bg-gray-100 text-dark-slate hover:bg-gray-200'
              }`}
            >
              {category.name} 
              <span className="ml-1 text-xs opacity-70">({category.count})</span>
            </a>
          ))
        ) : (
          <span className="text-sm text-dark-slate/70">No additional categories found</span>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;