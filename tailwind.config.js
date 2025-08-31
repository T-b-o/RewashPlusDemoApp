/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./**/*.razor",
        "./**/*.cshtml",
        "./**/*.html"
    ],
    theme: {
        extend: {
            colors: {
                rewash: {
                    dark: "#0a0f1f",
                    blue: "#1e3a8a",
                    sky: "#3b82f6",
                    accent: "#60a5fa",
                },
            },
            backgroundImage: {
                "rewash-gradient": "linear-gradient(to bottom, #0a0f1f, #1e3a8a, #3b82f6)",
                "rewash-card": "linear-gradient(to right, #1e3a8a, #3b82f6)",
                "rewash-dark": "linear-gradient(to right, #0a0f1f, #1e3a8a)",
            },
            boxShadow: {
                rewash: "0 4px 20px rgba(59, 130, 246, 0.3)",
            }
        },
    },
    plugins: [],
};
