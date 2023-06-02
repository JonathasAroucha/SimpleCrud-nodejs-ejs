const { build } = require("esbuild");

build({
  entryPoints: ["src"],
  bundle: true,
  target: "node14",
  outfile: "dist/bundle.js",
  loader: {
    ".ejs": "text",
  },
}).catch(() => process.exit(1));
