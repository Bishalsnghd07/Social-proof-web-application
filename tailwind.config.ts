import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      fontFamily: {
        sans: ['var(--font-spartan)'],
      },
    extend: {
      colors: {
        primary: {
          'very-dark-magenta': 'hsl(300, 43%, 22%)',
          'soft-pink': 'hsl(333, 80%, 67%)',
        },
        neutral: {
          'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
          'light-grayish-magenta': 'hsl(300, 24%, 96%)',
          white: 'hsl(0, 0%, 100%)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
