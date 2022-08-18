/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'light-blue': '#F9FBFE',
                'blue': '#306BDD',
                'dark-blue': '#18366F',
                'hover-blue': '#D6E1F8',
                'white': '#ffffff',
                'grey': '#E7EAE8'
            },
            fontFamily: {
                'sans': ['WorkSans', 'sans-serif'],
                'sans-thin': ['WorkSans-Thin', 'sans-serif'],
                'sans-italic': ['WorkSans-Italic', 'sans-serif'],
                'sans-medium': ['WorkSans-Medium', 'sans-serif'],
                'sans-bold': ['WorkSans-Bold', 'sans-serif'],
            },
            fontSize: {
                '2xl': '32px',
                '4xl': '40px'
            },
            backgroundImage: {
                'vector-1': "url('/vector-1.png')"
            },
            backgroundSize: {
                '35%': '35%',
                '65%': '65%',
            },
            backgroundPosition: {
                'left-5': 'top left 4rem',
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
