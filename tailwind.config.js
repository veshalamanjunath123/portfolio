export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#05070f',
        surface2: '#09111f',
        accent: '#6c63ff',
        accentSoft: '#4f57ff',
        glow: '#22d3ee',
      },
      boxShadow: {
        glow: '0 0 60px rgba(45, 55, 255, 0.26)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(48, 96, 255, 0.25), transparent 35%), radial-gradient(circle at 80% 10%, rgba(56, 189, 248, 0.12), transparent 20%), linear-gradient(180deg, #02030a 0%, #05070f 100%)',
      },
    },
  },
  plugins: [],
};
