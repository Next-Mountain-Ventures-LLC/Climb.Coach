// WordPress API Integration for Climb.Coach
// Securely fetches blog posts from WordPress and filters by category

const API_BASE_URL = 'http://blog.nxtmt.ventures/wp-json/wp/v2';
const CLIMB_COACH_CATEGORY_SLUG = 'climb-coach'; // Assuming this is the slug for the category

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
  caption: { rendered: string };
  media_details: {
    width: number;
    height: number;
    sizes: {
      [key: string]: {
        source_url: string;
        width: number;
        height: number;
      };
    };
  };
}

export interface WordPressPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: WordPressMedia[];
    'wp:term'?: WordPressCategory[][];
  };
}

// Fetch climb.coach category ID
export async function getClimbCoachCategoryId(): Promise<number | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/categories?slug=${CLIMB_COACH_CATEGORY_SLUG}`);
    if (!response.ok) throw new Error('Failed to fetch category');
    
    const categories = await response.json();
    
    if (categories.length > 0) {
      return categories[0].id;
    }
    
    console.error(`Category with slug '${CLIMB_COACH_CATEGORY_SLUG}' not found`);
    return null;
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}

// Fetch all categories
export async function getAllCategories(): Promise<WordPressCategory[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/categories?per_page=100`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Fetch posts filtered by climb.coach category
export async function getClimbCoachPosts(limit: number = 10): Promise<WordPressPost[]> {
  try {
    const categoryId = await getClimbCoachCategoryId();
    
    if (!categoryId) {
      console.error('Could not find climb.coach category');
      return [];
    }
    
    // Use _embed to include featured media and terms (categories/tags) in response
    const response = await fetch(
      `${API_BASE_URL}/posts?categories=${categoryId}&_embed=wp:featuredmedia,wp:term&per_page=${limit}`
    );
    
    if (!response.ok) throw new Error('Failed to fetch posts');
    
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Fetch a single post by slug
export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/posts?slug=${slug}&_embed=wp:featuredmedia,wp:term`
    );
    
    if (!response.ok) throw new Error('Failed to fetch post');
    
    const posts = await response.json();
    
    if (posts.length > 0) {
      // Verify this post belongs to climb.coach category
      const categoryId = await getClimbCoachCategoryId();
      
      if (!categoryId || !posts[0].categories.includes(categoryId)) {
        console.error('Post does not belong to climb.coach category');
        return null;
      }
      
      return posts[0];
    }
    
    console.error(`Post with slug '${slug}' not found`);
    return null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Get featured image URL from post (with fallback)
export function getFeaturedImageUrl(post: WordPressPost, size: string = 'medium_large'): string {
  try {
    if (
      post._embedded && 
      post._embedded['wp:featuredmedia'] && 
      post._embedded['wp:featuredmedia'][0]
    ) {
      const media = post._embedded['wp:featuredmedia'][0];
      
      // Try to get the specified size
      if (
        media.media_details &&
        media.media_details.sizes &&
        media.media_details.sizes[size]
      ) {
        return media.media_details.sizes[size].source_url;
      }
      
      // Fallback to full size
      return media.source_url;
    }
    
    // Default placeholder if no image is available
    return '/placeholder-blog.jpg';
  } catch (error) {
    console.error('Error getting featured image:', error);
    return '/placeholder-blog.jpg';
  }
}

// Get post categories excluding climb.coach category
export function getPostCategories(post: WordPressPost): WordPressCategory[] {
  try {
    if (
      post._embedded && 
      post._embedded['wp:term'] && 
      post._embedded['wp:term'][0]
    ) {
      // Filter out the climb.coach category
      return post._embedded['wp:term'][0].filter(
        term => term.slug !== CLIMB_COACH_CATEGORY_SLUG
      );
    }
    return [];
  } catch (error) {
    console.error('Error getting post categories:', error);
    return [];
  }
}

// Format WordPress date to readable format
export function formatWordPressDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Strip HTML tags from string (for excerpts)
export function stripHtml(html: string): string {
  // Simple regex-based HTML stripping for both server and client
  return html
    .replace(/<[^>]*>/g, '')  // Remove HTML tags
    .replace(/&nbsp;/g, ' ')  // Replace &nbsp; with space
    .replace(/\n/g, ' ')      // Replace newlines with spaces
    .trim();
}