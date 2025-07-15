import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx,css}'],
  theme: {
    extend: {
      colors: {
        teal: '#087F8C',
        purple: '#4F1D75',
        tertiary: '#FF0054',
        yellow: '#FFBD00',
        white: '#FFFFFF',
        dark: '#000000',
        orange: '#FF5400',
        'event-pink': '#B82458',
        'event-orange': '#F5722F',
        'text-dark': '#737373',
      },
      fontSize: {
        '2xs': '0.6rem',
      },
    },
    fontFamily: {
      lexend: ['var(--font-lexend)', 'sans-serif'],
    },
    screens: {
      '2xs': '440px',
      xs: '520px',
      ...defaultTheme.screens,
      '3xl': '1800px',
      '4xl': '2050px',
      '5xl': '2300px',
      '6xl': '2550px',
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
  },
  plugins: [],
};
export default config;
