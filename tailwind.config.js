/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'blue': '#306BDD',
                'dark-blue': '#18366F',
                'white': '#ffffff',
                'grey': '#E7EAE8'
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
