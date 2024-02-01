import type { Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
import { te6TailwindPreset } from "./src/libs/tailwind";

const config: Config = {
  presets: [te6TailwindPreset],
  content: ["./src/**/*.tsx", "./app/**/*.tsx", "./.ladle/**/*.tsx"],
  darkMode: ["class", '[data-theme="dark"]'], // this is only for Next.js and Ladle
  theme: {
    extend: {
      colors: {
        body: {
          DEFAULT: "#f6f6f9",
          dark: "#040404",
        },
        base: defaultColors.stone,
        "base-dark": defaultColors.neutral,
        primary: defaultColors.indigo,
        accent: defaultColors.amber,
      },
      fontFamily: {
        sans: [
          "Wanted\\ Sans\\ Variable",
          "Wanted\\ Sans",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
};

export default config;
