import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171522",
        paper: "#F5EFE2",
        panel: "#FFFFFF",
        coral: "#FF5A5F",
        teal: "#1FA8A0",
        sun: "#FFC23C",
        grape: "#6C5CE7"
      },
      fontFamily: {
        display: ["'Big Bimbo'", "sans-serif"],
        body: ["var(--font-space-grotesk)", "sans-serif"]
      },
      boxShadow: {
        comic: "6px 6px 0 #171522",
        "comic-sm": "3px 3px 0 #171522",
        "comic-btn": "4px 4px 0 #171522"
      },
      borderRadius: {
        comic: "18px"
      }
    }
  },
  plugins: []
};

export default config;
