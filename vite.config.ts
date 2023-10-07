import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import Pages from "vite-plugin-pages";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkFrontmatter from "remark-frontmatter";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import rehypeHighlight from "rehype-highlight";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        providerImportSource: "@mdx-js/react",
        rehypePlugins: [rehypeMdxCodeProps, rehypeHighlight],
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
    },
    react(),
    Pages({
      extensions: ["tsx", "jsx", "ts", "js", "mdx"],
      exclude: ["**/components/*"],
    }),
  ],
});
