import React from 'react';
import { Facebook, Twitter, Linkedin, Link } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
  // Encode the URL and title for sharing
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  
  // Handle copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="flex flex-col space-y-3">
      <h3 className="text-sm font-medium text-dark-slate">Share This Post</h3>
      <div className="flex space-x-3">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1877F2] hover:bg-gray-100 rounded-full p-2 transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1DA1F2] hover:bg-gray-100 rounded-full p-2 transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A66C2] hover:bg-gray-100 rounded-full p-2 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <button
          onClick={copyToClipboard}
          className="text-dark-slate hover:bg-gray-100 rounded-full p-2 transition-colors"
          aria-label="Copy link to clipboard"
        >
          <Link className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SocialShare;