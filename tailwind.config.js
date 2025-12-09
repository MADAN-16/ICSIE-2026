/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#1B3C53', // Deep Slate (now Primary)
        secondary: '#456882', // Blue-Grey (remains Secondary)
        accent: {
          slate: '#D2C1B6', // Beige (now Accent)
          light: '#F9F3EF', // Off-White (Background)
        },
        neutral: {
          smoke: '#1B3C53', // Deep Slate (Text)
          mobster: '#456882', // Blue-Grey
          slate: '#F9F3EF', // Off-White (Background)
        },
        dark: {
          900: '#F9F3EF', // Off-White
          800: '#e5e5e5', // Light Grey
          700: '#cccccc', // Grey
          600: '#999999',
        }
      },
      backgroundImage: {
        'beige-blue': 'linear-gradient(135deg, #1B3C53 0%, #456882 100%)',
        'deep-slate': 'linear-gradient(to bottom, #F9F3EF, #e5e5e5)',
        'slate-smoke': 'linear-gradient(135deg, #F9F3EF 0%, #D2C1B6 100%)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(27, 60, 83, 0.5)' }, // Deep Slate glow
          '50%': { boxShadow: '0 0 30px rgba(27, 60, 83, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}