const isProduction = process.env.NODE_ENV === "production";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        foreground: "var(--foreground)",
        background: "var(--background)",
        "sidebar-top-bottom": "var(--sidebar-top-bottom)",
        heading: "var(--heading)",
        "sub-heading": "var(--sub-heading)",
        button: "var(--button)",
        icon: "var(--icon)",
        input: "var(--input)",
        "input-border": "var(--input-border)",
        border: "var(--border)",
        "color-mode": "var(--color-mode)",
        "active-color": "var(--active-color)",
        "deactive-color": "var(--deactive-color)",
        tag: "var(--tag)",
        "active-tag": "var(--active-tag)",
        "user-icon": "var(--user-icon)",
        "input-text-color": "var(--input-text-coor)",
        "disable-button-border": "var(--disable-button-border)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  important: isProduction ? "#whatsapp-extension-root" : "#root",
};
