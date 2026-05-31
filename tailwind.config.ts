import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          soft: "#18181B",
          muted: "#6B7280",
        },
        accent: {
          DEFAULT: "#2563EB",
          soft: "#3B82F6",
          wash: "#EFF4FF",
          ink: "#1D4ED8",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          warm: "#FCFCFD",
          line: "#ECECEE",
        },
        sky: {
          chalk: "#BFDBFE",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "11xl": ["14rem", { lineHeight: "0.85", letterSpacing: "-0.045em" }],
      },
      letterSpacing: {
        tightest: "-0.05em",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,40,0.04), 0 12px 32px -12px rgba(16,24,40,0.10)",
        "card-hover":
          "0 1px 2px rgba(16,24,40,0.05), 0 28px 60px -24px rgba(37,99,235,0.22)",
        soft: "0 24px 80px -40px rgba(16,24,40,0.30)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(-2deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-22px) rotate(3deg)" },
        },
        "dash-draw": {
          to: { strokeDashoffset: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
