/**
 * Tailwind theme for Nexora — ported verbatim from
 * `nexora-brand/tokens/tailwind.config.snippet.js`, which is itself derived
 * from `nexora-brand/tokens/design-tokens.json` (the single source of truth).
 *
 * Why a JS config: the brand kit ships a v3 `theme.extend` snippet, so porting
 * it 1:1 keeps the tokens authoritative with zero translation. The same values
 * are mirrored as CSS custom properties in `src/styles/global.css` so changing
 * one token recolors the whole site from either surface (utility or `:root`).
 *
 * Do not hardcode hex/px/font in components — reference these tokens/utilities.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070C1C',
          900: '#0B1530',
          800: '#111E3D',
          700: '#1B294F',
          600: '#293B66',
          500: '#3B4F7E',
          DEFAULT: '#0B1530',
        },
        blue: {
          700: '#1D4FD7',
          600: '#2563EB',
          500: '#3B82F6',
          400: '#60A5FA',
          100: '#DBE6FE',
          50: '#EFF4FF',
          DEFAULT: '#2563EB',
        },
        cyan: { DEFAULT: '#22D3EE' },
        slate: { DEFAULT: '#5B6470' },
        whatsapp: '#25D366',
        background: '#F8FAFC',
        surface: '#FFFFFF',
        'surface-dark': '#111E3D',
        border: '#E2E8F0',
        'border-dark': '#1B294F',
        'text-primary': '#0B1530',
        'text-muted': '#5B6470',
        'text-on-dark': '#F8FAFC',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Geist', 'Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        h1: ['2.5rem', { lineHeight: '1.10', letterSpacing: '-0.02em', fontWeight: '700' }],
        h2: ['2rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '600' }],
        h3: ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        h4: ['1.25rem', { lineHeight: '1.30', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.60' }],
        body: ['1rem', { lineHeight: '1.60' }],
        small: ['0.875rem', { lineHeight: '1.50' }],
        caption: ['0.75rem', { lineHeight: '1.40', letterSpacing: '0.06em', fontWeight: '600' }],
      },
      spacing: {
        1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '24px',
        6: '32px', 7: '48px', 8: '64px', 9: '96px', 10: '128px',
      },
      borderRadius: {
        sm: '6px', md: '10px', lg: '14px', xl: '20px', '2xl': '28px', full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(11,21,48,0.06), 0 1px 1px rgba(11,21,48,0.04)',
        md: '0 4px 12px rgba(11,21,48,0.08), 0 2px 4px rgba(11,21,48,0.04)',
        lg: '0 12px 32px rgba(11,21,48,0.12), 0 4px 8px rgba(11,21,48,0.06)',
        glow: '0 0 0 1px rgba(37,99,235,0.20), 0 8px 28px rgba(37,99,235,0.28)',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
        decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
        accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
      },
      transitionDuration: { fast: '150ms', base: '250ms', slow: '400ms' },
    },
  },
  plugins: [],
};
