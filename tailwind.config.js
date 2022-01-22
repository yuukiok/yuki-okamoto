module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darktheme: '#222222',
        lighttheme: '#fff4ea',
        green: {
          0: '#ebedf0',
          100: '#9be9a8',
          200: '#40c463',
          300: '#30a14e',
          400: '#216e39',
        },
      },
    },
  },
  plugins: [],
}
