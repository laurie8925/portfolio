/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "rgba(var(--theme))",
        background: "rgba(var(--background))",
        lightpink: "rgba(var(--primary))",
        redpink: "rgba(var(--secondary))",
        st6: "rgba(var(--theme))",
        st7: "rgba(var(--primary))",
        textprimary: "rgba(var(--text-primary))",
      },
    },
  },
  plugins: [],
};
