
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#DC2626',
          dark: '#0F0F0F',
          card: '#1A1A1A',
          light: '#F5F5F5',
        }
      },
      fontFamily: {
        heading: ['Clash Display', 'sans-serif'],
        body: ['Satoshi', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob-1': 'blob-move 15s infinite alternate ease-in-out',
        'blob-2': 'blob-move 20s infinite alternate-reverse ease-in-out',
        'blob-3': 'blob-move 18s infinite alternate ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: .8, transform: 'scale(1.05)' },
        },
        'blob-move': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(220, 38, 38, 0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(220, 38, 38, 0)' },
        }
      }
    },
  },
  plugins: [],
}
