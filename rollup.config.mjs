import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
// import preserveDirectives from "rollup-plugin-preserve-directives";

const rollupConfig = [
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      // preserveModules: true,
    },
    external: [
      "framer-motion",
      "lucide-react",
      "next/link",
      "next/navigation",
      "react",
      "react/jsx-runtime",
      "tailwind-mq",
    ],
    plugins: [
      typescript({
        tsconfig: "./src/tsconfig.json",
      }),
      babel({
        babelHelpers: "bundled",
        presets: [
          "@babel/preset-env",
          ["@babel/preset-react", { runtime: "automatic" }],
          "@babel/preset-typescript",
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      // XXX: Used to preserve "use client" directives
      // preserveDirectives(),
      terser({
        compress: {
          directives: false,
        },
      }),
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: {
      file: "dist/index.d.ts",
    },
    plugins: [
      dts({
        tsconfig: "./src/tsconfig.json",
      }),
    ],
  },
];

export default rollupConfig;
