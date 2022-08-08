/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",],
    purge: ["./src/**/*.{vue,js,ts,jsx,tsx}",
        "./index.html"],
    theme: {
        extend: {},
    },
    plugins: [

        ]
}
