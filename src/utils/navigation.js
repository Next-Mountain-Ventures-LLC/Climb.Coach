/**
 * Utility functions for handling navigation links
 */

/**
 * Creates a properly formatted navigation URL that works across the site,
 * handling both homepage and blog page navigation consistently.
 * 
 * @param {string} hash - The anchor hash (e.g., "#about", "#services")
 * @param {boolean} isOnBlogPage - Whether the current page is a blog page
 * @returns {string} - The properly formatted URL
 */
export function getNavUrl(hash, isOnBlogPage) {
  // If on a blog page, prefix the hash with the home page URL
  // Otherwise, just use the hash directly
  return isOnBlogPage ? `/${hash}` : hash;
}

/**
 * Determines if the current URL is a blog page
 * 
 * @param {string} pathname - The current URL pathname (e.g. window.location.pathname or Astro.url.pathname)
 * @returns {boolean} - True if the URL is a blog page
 */
export function isCurrentPageBlog(pathname) {
  return pathname.includes('/blog');
}