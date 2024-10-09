/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F9FAFB',
          200: '#EAECF0',
          300: '#D0D5DD',
          700: '#344054',
          600: '#475467',
          800: '#1D2939',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      boxShadow: {
        header: '0px 1px 17px 0px rgba(0, 0, 0, 0.05)',
        'action-btn': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'button-pop': {
          '0%': {
            transform: 'scale(0.98)',
          },
          '40%': {
            transform: 'scale(1.02)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'enter-top': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'grow-to-right': {
          '0%': {
            transform: 'scaleX(0)',
            transformOrigin: 'left',
            opacity: '0',
          },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        },
      },
      animation: {
        'button-pop': 'button-pop 0s ease-out',
        'enter-top': 'enter-top 500ms ease both',
        'grow-to-right': 'grow-to-right 500ms ease both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
