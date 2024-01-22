import { mediaQueries } from "tailwind-mq";
import type { Config } from "tailwindcss";

export const te6TailwindPreset: Config = {
  plugins: [mediaQueries()],
  theme: {
    extend: {
      minHeight: {
        // @ts-expect-error: Tailwind supports this but the types don't (I think)
        screen: ["100vh", "100dvh"],
      },
      maxHeight: {
        // @ts-expect-error: Tailwind supports this but the types don't (I think)
        screen: ["100vh", "100dvh"],
        // @ts-expect-error: Tailwind supports this but the types don't (I think)
        fullScreenOverlay: ["calc(100vh - 3rem)", "calc(100svh - 3rem)"],
      },
      boxShadow: {
        "upward-sm": "0 -1px 2px 0 rgb(0 0 0 / 0.05);",
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-3px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(3px, 0, 0)",
          },
        },
        fadeout: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        fadein: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        shake: "shake 0.5s both",
        fadeout: "fadeout 0.2s both",
        fadein: "fadein 0.2s both",
      },
    },
  },
};
