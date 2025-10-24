// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "http://localhost:4321",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Disable caching
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: false
      }
    },
    // Clear cache on build
    cacheDir: '.vite-temp-cache'
  },
});
