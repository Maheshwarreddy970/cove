/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #AFE0FF 0%, #82DCFF 51.72%)',
        'custom-gradientbutton': `linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))`,
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
     
    },
  },
  plugins: [],
};
