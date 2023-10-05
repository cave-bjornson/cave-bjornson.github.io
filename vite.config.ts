import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import RemixRouter from "vite-plugin-remix-router";
import mdx from "@mdx-js/rollup";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({ providerImportSource: "@mdx-js/react" }),
    },
    react(),
    // RemixRouter({ extensions: ["tsx", "mdx"] }),
    Pages({ extensions: ["tsx", "jsx", "ts", "js", "mdx"] }),
  ],
});
