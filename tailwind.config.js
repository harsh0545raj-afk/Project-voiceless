/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0B0C0B',
          900: '#101110',
          800: '#141614',
        },
        charcoal: {
          DEFAULT: '#191A18',
          subtle: '#151614',
          card: '#1F211E',
          elevated: '#282B26',
        },
        ivory: {
          DEFAULT: '#F5F1E8',
          pure: '#FAF8F4',
          muted: '#DCD6C9',
          faint: '#8E8C85',
        },
        gold: {
          DEFAULT: '#C8A66A',
          light: '#DFBF82',
          dark: '#A68345',
          dim: 'rgba(200, 166, 106, 0.15)',
        },
        earth: {
          DEFAULT: '#725D48',
          light: '#8E755D',
          dark: '#4F3E2E',
        },
        cinematic: {
          border: 'rgba(245, 241, 232, 0.08)',
          'border-hover': 'rgba(200, 166, 106, 0.3)',
          divider: 'rgba(245, 241, 232, 0.06)',
          overlay: 'rgba(11, 12, 11, 0.75)',
        }
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        cinematic: '0.25em',
        widest: '0.15em',
      },
      backgroundImage: {
        'vignette-radial': 'radial-gradient(circle at center, transparent 30%, rgba(11, 12, 11, 0.85) 100%)',
        'subtle-grain': 'radial-gradient(ellipse at top, rgba(200, 166, 106, 0.04), transparent 60%)',
        'gold-glow': 'radial-gradient(circle, rgba(200, 166, 106, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
