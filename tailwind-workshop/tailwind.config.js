/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('/tailwind.jpg')", // Använd tailwind.jpg som bakgrund
      },
    },
  },
  plugins: [],
};
