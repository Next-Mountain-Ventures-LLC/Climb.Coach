// WordPress API integration for fetching blog posts
// Using the WordPress REST API to fetch posts from blog.nxtmt.ventures

// Types for WordPress API responses
export interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  jetpack_featured_media_url: string;
  categories: number[];
  tags: number[];
  link: string;
  author: number;
  modified: string;
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
  parent: number;
}

export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
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

export interface WordPressAuthor {
  id: number;
  name: string;
  url: string;
  description?: string;
  avatar_urls: {
    [key: string]: string;
  };
}

// Constants
const WP_API_URL = "https://blog.nxtmt.ventures/wp-json/wp/v2";
const CLIMB_COACH_CATEGORY_ID = 8;
const PER_PAGE = 10;

// Fetches posts for the Climb.Coach category
export async function getClimbCoachPosts(page = 1, perPage = PER_PAGE): Promise<{
  posts: WordPressPost[];
  totalPages: number;
}> {
  try {
    console.log("Fetching Climb.Coach posts at timestamp: ", new Date().toISOString());
    
    // Fetch posts with the Climb.Coach category
    // Add cache-busting parameter to avoid caching issues
    const cacheBuster = Date.now();
    const response = await fetch(
      `${WP_API_URL}/posts?categories=${CLIMB_COACH_CATEGORY_ID}&page=${page}&per_page=${perPage}&_embed&cache_bust=${cacheBuster}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate",
          "Pragma": "no-cache",
          "Expires": "0",
        },
        cache: "no-store", // Force fetch to bypass all caches
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.status}`);
    }

    const posts = await response.json() as WordPressPost[];
    const totalPages = Number(response.headers.get("X-WP-TotalPages") || "1");

    return {
      posts,
      totalPages,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      posts: [],
      totalPages: 0,
    };
  }
}

// Fetches a single post by slug
export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    console.log(`Fetching post with slug "${slug}" at timestamp: ${new Date().toISOString()}`);
    
    // Add cache-busting parameter to avoid caching issues
    const cacheBuster = Date.now();
    const response = await fetch(
      `${WP_API_URL}/posts?slug=${slug}&_embed&cache_bust=${cacheBuster}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate",
          "Pragma": "no-cache",
          "Expires": "0",
        },
        cache: "no-store", // Force fetch to bypass all caches
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching post: ${response.status}`);
    }

    const posts = await response.json() as WordPressPost[];

    // Return the first post that matches the slug
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}

// Gets all categories
export async function getAllCategories(): Promise<WordPressCategory[]> {
  try {
    const response = await fetch(
      `${WP_API_URL}/categories?per_page=100`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching categories: ${response.status}`);
    }

    const categories = await response.json() as WordPressCategory[];
    
    // Filter out the Climb.Coach category since we want to hide it
    return categories.filter(category => category.id !== CLIMB_COACH_CATEGORY_ID);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// Gets only categories that have been used in Climb.Coach posts
export async function getClimbCoachCategories(): Promise<WordPressCategory[]> {
  try {
    // First, get all posts from the Climb.Coach category
    const { posts } = await getClimbCoachPosts(1, 100); // Get up to 100 posts to analyze categories
    
    // Extract all unique category IDs from these posts, excluding the Climb.Coach category itself
    const categoryIds = new Set<number>();
    posts.forEach(post => {
      post.categories.forEach(categoryId => {
        if (categoryId !== CLIMB_COACH_CATEGORY_ID) {
          categoryIds.add(categoryId);
        }
      });
    });
    
    // If no categories found, return empty array
    if (categoryIds.size === 0) {
      return [];
    }
    
    // Fetch details for all these category IDs
    const response = await fetch(
      `${WP_API_URL}/categories?include=${Array.from(categoryIds).join(",")}&per_page=${categoryIds.size}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching categories: ${response.status}`);
    }

    const categories = await response.json() as WordPressCategory[];
    return categories;
  } catch (error) {
    console.error("Error fetching Climb.Coach categories:", error);
    return [];
  }
}

// Gets categories for a specific post
export async function getCategoriesForPost(categoryIds: number[]): Promise<WordPressCategory[]> {
  try {
    // If empty array, return empty array
    if (categoryIds.length === 0) {
      return [];
    }

    // Filter out the Climb.Coach category
    const filteredCategoryIds = categoryIds.filter(id => id !== CLIMB_COACH_CATEGORY_ID);
    
    // If all categories were filtered out, return empty array
    if (filteredCategoryIds.length === 0) {
      return [];
    }

    const response = await fetch(
      `${WP_API_URL}/categories?include=${filteredCategoryIds.join(",")}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching categories: ${response.status}`);
    }

    return await response.json() as WordPressCategory[];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// Gets featured media for a post
export async function getMediaById(mediaId: number): Promise<WordPressMedia | null> {
  try {
    const response = await fetch(
      `${WP_API_URL}/media/${mediaId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching media: ${response.status}`);
    }

    return await response.json() as WordPressMedia;
  } catch (error) {
    console.error(`Error fetching media with ID ${mediaId}:`, error);
    return null;
  }
}

// Gets author information
export async function getAuthorById(authorId: number): Promise<WordPressAuthor | null> {
  try {
    const response = await fetch(
      `${WP_API_URL}/users/${authorId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching author: ${response.status}`);
    }

    return await response.json() as WordPressAuthor;
  } catch (error) {
    console.error(`Error fetching author with ID ${authorId}:`, error);
    return null;
  }
}

// Parses and sanitizes WordPress content
export function parseContent(content: string): string {
  // Remove WordPress-specific tags and scripts
  return content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<!--.*?-->/g, '')
    .trim();
}

// Helper function to format dates
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  }).format(date);
}

// Helper function to get the excerpt from a post
export function getExcerpt(post: WordPressPost, maxLength = 150): string {
  // Try to get the excerpt content
  let excerpt = post.excerpt.rendered;
  
  // Clean up the excerpt (remove HTML and entity codes)
  excerpt = excerpt.replace(/<\/?[^>]+(>|$)/g, '');
  excerpt = excerpt.replace(/&hellip;/g, '...');
  excerpt = excerpt.replace(/&#8230;/g, '...');
  
  // Limit to maxLength characters
  if (excerpt.length > maxLength) {
    excerpt = excerpt.substring(0, maxLength) + '...';
  }
  
  return excerpt;
}

// Helper function to get author for multiple posts in parallel
export async function getAuthorsForPosts(posts: WordPressPost[]): Promise<Map<number, WordPressAuthor>> {
  const authorMap = new Map<number, WordPressAuthor>();
  
  // Extract all unique author IDs
  const authorIds = Array.from(new Set(posts.map(post => post.author)));
  
  // Fetch authors in parallel
  const authors = await Promise.all(
    authorIds.map(id => getAuthorById(id))
  );
  
  // Create a map of author ID to author data
  authors.forEach(author => {
    if (author) {
      authorMap.set(author.id, author);
    }
  });
  
  return authorMap;
}