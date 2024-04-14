/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "rgb(240, 240, 240)",
        gray: "rgb(200, 200, 200)",
        "gray-dark": "rgb(150, 150, 150)",
      },
    },
  },
  plugins: [],
};
