module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
      screens: {
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1200px",
          xxl: "1400px"
      },

      fontFamily: {
          sans: ["Poppins, sans-serif"]
      },

      extend: {
          colors: {
              "primary": "#0D6EFD",
              "secondary": "#6C757D",
              "success": "#198754",
              "info": "#0DCAF0",
              "warning": "#FFC107",
              "danger": "#DC3545",
          },
          backgroundImage: {
              "hero": "url('/images/1.png')",
            }
      },
  },
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ]
}
