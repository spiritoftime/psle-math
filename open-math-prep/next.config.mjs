import createMDX from "fumadocs-mdx/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const withMDX = createMDX({
  mdxOptions: {
    remarkPlugins: [remarkMath],
    // Place it at first so that it won't be changed by rehype-pretty-code
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: "standalone",
};

export default withMDX(config);
