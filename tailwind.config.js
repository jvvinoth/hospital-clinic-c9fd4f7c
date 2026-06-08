/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a5f',
        secondary: '#2c5282',
        accent: '#d4a574',
        background: '#ffffff',
        surface: '#f8f9fb',
        'text-primary': '#1a202c',
        'text-muted': '#64748b',
        border: '#e2e8f0',
        success: '#059669',
        'success-dark': '#047857',
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        prose: '65ch',
      },
    },
  },
  plugins: [],
}
