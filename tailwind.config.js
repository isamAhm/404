/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
        "fira-code": ['"Fira Code"', "cursive"],
        blackOps: ['"Black Ops One"', "serif"],
        zenDots: ['"Zen Dots"', "serif"],
        lemonada: ['"Lemonada"', "serif"],
      },
      keyframes: {
        shimmer: {
          from: { opacity: 0 },
          to: { opacity: 0.7 },
        },
        "alien-text": {
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "alien-text": "alien-text 1s steps(11) infinite alternate",
        shimmer: "shimmer 1.5s infinite alternate",
      },
    },
  },
  plugins: [],
};
