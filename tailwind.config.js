const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    mode: "jit",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    darkMode: "class",
    theme: {
        extend: {
            spacing: {
                calc: "calc(100% - 1rem)",
            },
            fontFamily: {
                permanent: ["Permanent Marker", "cursive"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
});
