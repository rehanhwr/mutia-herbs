const { colors: { orange } } = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        "./src/**/*.svelte",
        "./src/**/*.html"
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#556052',
                'dark-primary': '#4a5448',
                'secondary': '#af6b58',
                'neutral': orange[200],
                // 'neutral': '#cbbcb1',
                'light-neutral': '#f2efea',
            }
        }
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'visited'],
    },
    plugins: [],
}