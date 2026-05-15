import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1655px',
      },
      colors: {
        orange: {
          DEFAULT: '#F35901',
          50: '#fff3eb',
          100: '#fdddc6',
          200: '#fbc49d',
          300: '#f99c65',
          400: '#f77035',
          500: '#F35901',
          600: '#d14d01',
          700: '#a83d01',
          800: '#7f2e01',
          900: '#561f01',
        },
        dark: {
          900: '#070808',
          800: '#0d0d0d',
          700: '#0f1012',
          600: '#141415',
          500: '#1b1c1d',
          400: '#252526',
          300: '#2a2b2c',
        },
        muted: '#ABADAB',
      },
      fontFamily: {
        sora: ["'Sora'", 'sans-serif'],
        roboto: ["'Roboto'", 'sans-serif'],
        'roboto-condensed': ["'Roboto Condensed'", 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        glow: 'glow 2s ease-in-out infinite',
        marquee: 'marquee 60s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(243, 89, 1, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(243, 89, 1, 0.6)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow-orange': '0 0 30px rgba(243, 89, 1, 0.3)',
        'glow-orange-lg': '0 0 60px rgba(243, 89, 1, 0.4)',
      },
    },
  },
  plugins: [],
}

export default config
