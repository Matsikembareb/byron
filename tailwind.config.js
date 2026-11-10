/** @type {import('tailwindcss').Config} */
// Colours are CSS variables (see src/styles/global.css), so one `data-theme`
// attribute on <html> switches the whole site between light and dark.
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        line: 'var(--border)',
        ink: 'var(--text)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        'accent-fill': 'var(--accent-fill)',
        'on-accent': 'var(--on-accent)',
        // Project tile colours from the Figma design (same in both themes).
        tile: {
          blue: '#1e5eff',
          orange: '#f97316',
          teal: '#0f766e',
          violet: '#7c3aed',
          pink: '#be185d',
          sky: '#0369a1',
        },
      },
      borderRadius: {
        DEFAULT: '4px',
      },
      maxWidth: {
        wrap: '1440px',
        prose: '720px',
      },
      letterSpacing: {
        eyebrow: '3px',
      },
    },
  },
  plugins: [],
};
