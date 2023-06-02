import { build } from "esbuild";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const entryPoint = join(process.cwd(), "index.js");

build({
  entryPoints: [entryPoint],
  bundle: true,
  outfile: "dist/bundle.js",
  platform: 'node', 
}).catch(() => process.exit(1));
