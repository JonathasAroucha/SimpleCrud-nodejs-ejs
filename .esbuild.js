import { build } from "esbuild";
import path from "path";

const entryPoint = path.join(__dirname, "index.js");

build({
  entryPoints: [entryPoint],
  bundle: true,
  outfile: "dist/bundle.js",
}).catch(() => process.exit(1));
