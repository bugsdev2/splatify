/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'bs-primary': '#0D6EFD',
                'bs-secondary': '#6C757D',
                'bs-warning': '#FFC107',
                'bs-success': '#198754',
                'bs-danger': '#DC3545',
                'bs-dark': '#212529',
                'bs-light': '#F8F9FA',
                primary: {
                    100: '#35A38E',
                    200: '#038281',
                },
                darker: '#1F2937',
                light: '#E2E8F0',
            },
            fontFamily: {
                poppins: ['Poppins'],
            },
        },
    },
    plugins: [],
};
