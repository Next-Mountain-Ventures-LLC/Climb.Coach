import React from 'react';
import BlogCarousel from '../blog/BlogCarousel';

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-16 md:py-24 bg-gradient-to-b from-white to-cambridge-blue/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            The Climb Coach Blog
          </h2>
          <p className="text-lg text-dark-slate/70 max-w-2xl mx-auto">
            Get insights, tips, and strategies for improving your climbing performance, 
            building mental strength, and achieving your climbing goals.
          </p>
        </div>
        
        <BlogCarousel />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-mountain-green/5 rounded-full"></div>
        <div className="absolute top-1/4 -left-16 w-48 h-48 bg-blue-mell/5 rounded-full"></div>
      </div>
    </section>
  );
}