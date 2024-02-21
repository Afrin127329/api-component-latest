"use strict";

import path from "path";

export default ({ config }) => {
  // This is how you can distinguish the `build` command from the `serve`
  const isBuild = config.mode === "production";

  return {
    ...config,
    mode: "development",
    entry: "./src/index.ts",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      static: path.resolve(__dirname, "dist"),
      port: 8080,
      hot: true,
    },
    module: {
      rules: [{}, ...config.module.rules],
    },
  };
};
