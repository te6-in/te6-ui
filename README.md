<h1 align="center">@te6/ui</h1>

**<p align="center">A collection of UI components for Next.js, built with Tailwind CSS.</p>**

<p align="center">⚠️ This project is still in early development and might break a lot.</p>

## What's included

- Tailwind CSS Preset
  - `te6TailwindPreset`
- Layout
- Components
  - `BottomToolbar`
  - `Button`
  - `Checkbox`
  - `FloatingButton`
  - `FullScreenOverlay`
  - `Selector`
  - `Skeleton`
  - `TextArea`
  - `TextInput`
  - `Toggle`
- Utilities
  - `j` for joining classes

## Yet to come

- SSR (all pages under `/app` should be marked as `"use client"` as of now)

## Features

- General accessibility
- Color customization
- Some animations and micro-interactions
- Support for `prefers-color-scheme` (or Tailwind's class-based dark mode)
- Support for `prefers-reduced-motion`
- Support for `prefers-reduced-transparency`
- Support for `env(safe-area-inset-*)`

## Assumptions

- You use `Next.js`, `Tailwind CSS`, `react-hook-form`, `Lucide`, `framer-motion`.

## Installation

```shell
pnpm add @te6/ui && pnpm add -D tailwind-mq
```

## Config

```ts
// tailwind.config.ts

import type { Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
import { te6TailwindPreset } from "@te6/ui";

const config: Config = {
  // mandatory: add `@te6/ui` to content
  content: ["./app/**/*.tsx", "./node_modules/@te6/ui/dist/index.js"],

  // mandatory: import and add the preset
  presets: [te6TailwindPreset],

  theme: {
    extend: {
      // mandatory: extend the theme to customize all colors
      // tip: use some kind of sites like https://uicolors.app/
      colors: {
        body: {
          DEFAULT: "#F7F7F7", // use lighter color than `base-50`
          dark: "#1F1F1F", // use darker color than `base-dark-950`
        },
        base: {
          50: "#FDFDFD",
          // ... make sure all 50-950 of base are defined
          950: "#2F2F2F",
        },
        "base-dark": {
          50: "#FDFDFD",
          // ... make sure all 50-950 of base-dark are defined
          // it doesn't matter if it's the same as `base`
          950: "#2F2F2F",
        },
        primary: defaultColors.blue, // or you can do something like this
        accent: {
          50: "#FFFDF5",
          // ... make sure all 50-950 of accent are defined
          950: "#332B07",
        },
      },

      // optional: set the font family as you want
      // if you decide to do this, make sure you import the font on `globals.css`
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
```

## Shoutouts

- [`lukewarlow/tailwind-mq`](https://github.com/lukewarlow/tailwind-mq)
