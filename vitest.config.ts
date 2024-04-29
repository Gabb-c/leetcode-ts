import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  esbuild: { target: "ESNext" },
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    coverage: {
      provider: "v8",
      include: ["src/**/*.ts"],
      exclude: ["**/*.bench.ts"],
    },
  },
});
