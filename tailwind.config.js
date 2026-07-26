/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pearl: '#FBF9F5',
        ivory: '#F4EFE6',
        beige: '#EAE2D2',
        mist: '#E9EEEC',
        navy: {
          DEFAULT: '#0F2436',
          light: '#1B3A52',
        },
        dental: {
          blue: '#2C5F73',
          light: '#7FB2C0',
        },
        emerald: {
          DEFAULT: '#1F5C4E',
          soft: '#3E8573',
        },
        cyan: {
          soft: '#9FDDD6',
        },
        stone: {
          warm: '#8A8577',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest2: '0.28em',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
