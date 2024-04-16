import { defineConfig } from "vitepress";
import { author, license } from "../../package.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LeetCode-ts",
  description: "Mastering Coding Challenges in TypeScript",
  themeConfig: {
    siteTitle: "LeetCode-ts",
    nav: [{ text: "Home", link: "/" }],
    sidebar: [],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Gabb-c/leetcode-ts",
        ariaLabel: "Repository link",
      },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/gabriel-da-cunha/",
        ariaLabel: "LinkedIn link",
      },
    ],
    search: {
      provider: "local",
    },
    footer: {
      message: `Made with ❤️ Released under the ${license} License`,
      copyright: `Copyright © 2024-present ${author.name}`,
    },
  },
  cleanUrls: true,
});
