import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, human palette for Africa With Love
        sand: {
          50: '#FAF7F2',
          100: '#F8F4EC',
          200: '#F0E8D8',
          300: '#E9D8B4',
          400: '#DCC99A',
          500: '#C9B07A',
          600: '#A8915E',
          700: '#8A7549',
          800: '#6B5A39',
          900: '#4D402A',
        },
        terracotta: {
          50: '#FBF3F0',
          100: '#F7E7E1',
          200: '#EFCFC3',
          300: '#E4AE9C',
          400: '#D68B73',
          500: '#B86B4B',
          600: '#9A5539',
          700: '#7C432E',
          800: '#5E3323',
          900: '#40231A',
        },
        forest: {
          50: '#F2F5F3',
          100: '#E5EBE7',
          200: '#C8D5CD',
          300: '#A8BCB0',
          400: '#7A9988',
          500: '#3F5B4B',
          600: '#344D3F',
          700: '#2A3F33',
          800: '#203028',
          900: '#16221C',
        },
        ivory: {
          50: '#FDFCFA',
          100: '#F8F4EC',
          200: '#F3EDE0',
          300: '#EBE3D1',
          400: '#E0D6BF',
          500: '#D4C9AD',
          600: '#B8A98A',
          700: '#9A8A6A',
          800: '#7B6C50',
          900: '#5C5039',
        },
        charcoal: {
          50: '#F4F3F3',
          100: '#E8E7E6',
          200: '#D1CFCD',
          300: '#B6B3AF',
          400: '#8E8A84',
          500: '#5C5751',
          600: '#4A4540',
          700: '#3A3632',
          800: '#2E2A26',
          900: '#1F1C19',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-overlay': 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
      },
    },
  },
  plugins: [],
};

export default config;
