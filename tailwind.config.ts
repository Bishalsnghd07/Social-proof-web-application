import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'league': ['League Spartan', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          'very-dark-magenta': 'hsl(300, 43%, 22%)',
          'soft-pink': 'hsl(333, 80%, 67%)',
          'cyan': 'hsl(179, 62%, 43%)',
          'Bright-Yellow': 'hsl(71, 73%, 54%)'
        },
        neutral: {
          'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
          'light-grayish-magenta': 'hsl(300, 24%, 96%)',
          white: 'hsl(0, 0%, 100%)',
          'Light-Gray': 'hsl(204, 43%, 93%)',
          'Grayish-Blue': 'hsl(218, 22%, 67%)'
        },
      },
    },
  },
  plugins: [],
};
export default config;
