import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Import the Vite plugin

export default defineConfig({
  vite: {
    plugins: [tailwindcss()], // Add it to the Vite plugins array
  },
});