/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Bao gồm tất cả các file cần áp dụng Tailwind CSS
    "./src/components/**/*.{js,ts,jsx,tsx}", // Bao gồm tất cả các file trong thư mục components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}