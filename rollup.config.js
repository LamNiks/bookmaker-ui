import packageJSON from "./package.json";

import { defineConfig } from "rollup";
import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default defineConfig([
  {
    input: "src/index.ts",
    treeshake: true,
    output: [
      {
        format: "cjs",
        file: packageJSON.main,
        sourcemap: true,
        exports: "named",
      },
      {
        format: "esm",
        file: packageJSON.module,
        exports: "named",
        sourcemap: "inline",
      },
    ],
    external: ["react", "react-dom"],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        outDir: `dist/${process.env.OUT_DIR}/types`,
        exclude: ["**/*.spec.tsx"],
        rootDir: "src",
      }),
      postcss({
        modules: true,
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      terser(),
    ],
  },
]);
