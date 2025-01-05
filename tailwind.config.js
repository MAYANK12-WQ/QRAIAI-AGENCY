/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#FF1493',
          cyan: '#00FFFF',
          gold: '#FFD700',
          purple: '#9400D3'
        }
      },
      fontFamily: {
        joystix: ['Joystix', 'monospace']
      },
      animation: {
        'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite'
      },
      keyframes: {
        'text-shimmer': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px currentColor)' },
          '50%': { filter: 'drop-shadow(0 0 25px currentColor)' }
        }
      }
    }
  },
  plugins: []
};