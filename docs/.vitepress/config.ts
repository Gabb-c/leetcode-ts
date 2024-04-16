import { defineConfig } from "vitepress";
import { author, license } from "../../package.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LeetCode-ts",
  description: "Mastering Coding Challenges in TypeScript",
  themeConfig: {
    siteTitle: "LeetCode-ts",
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Gabb-c/leetcode-ts" }],
    search: {
      provider: "local",
    },
    footer: {
      message: `Made with ❤️<br/>Released under the ${license} License`,
      copyright: `Copyright © 2024-present ${author.name}`,
    },
  },
  cleanUrls: true,
});
