// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "https://climb.coach",
  integrations: [react()],
  image: {
    remotePatterns: [{ protocol: "https" }],
    formats: ["image/avif", "image/webp"],
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: false,
      },
    },
    cacheDir: ".vite-temp-cache",
  },
});
