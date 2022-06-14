import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";

export default {
  input: "babel-transpile/app.js",
  output: {
    file: "public/bundle.js",
    format: "es", // immediately-invoked function expression suitable for <script> tags
    sourcemap: true
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        "development"
      ),
      preventAssignment: true
    }), // replace process.env.NODE_ENV with 'development' or 'production'
    nodeResolve(), // tells Rollup how to find the package in node_modules
    commonjs(), // converts commonjs modules in node modules to ES modules
    json()
  ]
};
