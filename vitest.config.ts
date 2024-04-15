import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    coverage: {
      provider: "v8",
      exclude: ["**/*.bench.ts", ".lintstagedrc.js", "commitlint.config.js"],
    },
    logHeapUsage: true,
  },
});
