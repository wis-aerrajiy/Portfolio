/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                'calc': 'calc(100% - 1rem)',
            },
            // add font family : font-family: "Permanent Marker", cursive;
            fontFamily: {
                'permanent': ['Permanent Marker', 'cursive'],
            },
        },
    
    },
    plugins: [],
}