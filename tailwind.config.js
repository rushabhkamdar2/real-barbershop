/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8CC5A',
          dark: '#B8912A',
        },
        dark: {
          DEFAULT: '#050505',
          100: '#0F0F0F',
          200: '#181818',
          300: '#242424',
        },
        cream: {
          DEFAULT: '#F8F4EE',
          muted: '#A8A098',
          faded: '#6B6560',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-up-delay-1': 'fadeUp 0.8s ease 0.2s forwards',
        'fade-up-delay-2': 'fadeUp 0.8s ease 0.4s forwards',
        'fade-up-delay-3': 'fadeUp 0.8s ease 0.6s forwards',
        'fade-up-delay-4': 'fadeUp 0.8s ease 0.8s forwards',
        'fade-up-delay-5': 'fadeUp 0.8s ease 1s forwards',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}
