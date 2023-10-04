import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import RemixRouter from "vite-plugin-remix-router";
import mdx from "@mdx-js/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    { enforce: "pre", ...mdx() },
    react(),
    RemixRouter({ extensions: ["jsx", "tsx"] }),
  ],
});
