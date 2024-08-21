/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: 
    {
        fontFamily: {
            'manrope': ["Manrope", "sans-serif"]
    },
        colors: {
        'green': '#ABEF5F',
        'title': '#212121',
        'description': '#494949',
        'secondary': 'rgba(171, 239, 95, 0.5);',
    },
    plugins: [],
  }
}