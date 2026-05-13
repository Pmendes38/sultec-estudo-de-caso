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
      colors: {
        orange: {
          50: '#fff7ed',
          100: '#fed7aa',
          200: '#fdba74',
          300: '#fb923c',
          400: '#f97316',
          500: '#ff6a00',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        dark: {
          900: '#0A0A0A',
          800: '#0B0B0B',
          700: '#0E0E0E',
          600: '#101010',
          500: '#121212',
          400: '#141414',
          300: '#1A1A1A',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
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
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(255, 106, 0, 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(255, 106, 0, 0.6)' },
        },
      },
      backdropFilter: {
        'blur-xl': 'blur(20px)',
      },
      boxShadow: {
        'glow-orange': '0 0 30px rgba(255, 106, 0, 0.3)',
        'glow-orange-lg': '0 0 60px rgba(255, 106, 0, 0.4)',
      },
    },
  },
  plugins: [],
}

export default config
