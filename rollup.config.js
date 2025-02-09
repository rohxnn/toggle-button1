import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/ToggleButton.tsx",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [resolve(), commonjs(), typescript()],
    external: ["react", "react-dom"]
  },
  {
    input: "dist/types/ToggleButton.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()]
  }
];
