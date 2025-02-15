export default [
  {
    input: "src/index.ts",  
    output: [
      {
        file: "dist/index.d.ts",
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
    input: "src/index.d.ts", 
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()]
  }
];
