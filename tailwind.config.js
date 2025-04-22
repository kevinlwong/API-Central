/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // ← App Router files
    "./src/pages/**/*.{js,ts,jsx,tsx}", // ← if you use /pages
    "./src/components/**/*.{js,ts,jsx,tsx}", // ← shared components
    "./src/**/*.{md,mdx}", // ← optional: markdown/mdx
  ],
  theme: {
    extend: {},
  }, 
  plugins: [],
};
