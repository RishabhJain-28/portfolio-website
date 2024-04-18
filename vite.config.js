import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  plugins: [
    // input https://www.npmjs.com/package/html-minifier-terser options
    ViteMinifyPlugin({}),
    mkcert(),
  ],
});
