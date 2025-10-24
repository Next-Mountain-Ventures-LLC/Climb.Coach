#\!/usr/bin/env node

// Fetch fresh blog data
const https = require('https');

console.log('Fetching fresh blog data from WordPress API...');

const WP_API_URL = "https://blog.nxtmt.ventures/wp-json/wp/v2";
const CLIMB_COACH_CATEGORY_ID = 8;

const options = {
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'ClimbCoach-Blog-Fetcher/1.0'
  }
};

// Fetch posts with the Climb.Coach category
https.get(
  `${WP_API_URL}/posts?categories=${CLIMB_COACH_CATEGORY_ID}&per_page=20&_embed`,
  options,
  (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      if (res.statusCode === 200) {
        try {
          const posts = JSON.parse(data);
          console.log(`Successfully fetched ${posts.length} blog posts:`);
          posts.forEach((post, index) => {
            console.log(`${index + 1}. ${post.title.rendered} (${post.slug})`);
          });
          console.log('\nReady to rebuild the site with fresh blog data\!');
        } catch (error) {
          console.error('Error parsing response:', error.message);
        }
      } else {
        console.error(`Error fetching posts: ${res.statusCode}`);
      }
    });
  }
).on('error', (error) => {
  console.error('Error fetching blog posts:', error.message);
});
