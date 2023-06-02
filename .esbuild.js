import { build } from "esbuild";

build({
  // configurações do esbuild
  entryPoints: ["src/index.js"],
  bundle: true,
  outfile: "dist/bundle.js",
}).catch(() => process.exit(1));
