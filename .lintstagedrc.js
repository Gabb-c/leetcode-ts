module.exports = {
  "*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}": [
    "biome check --apply-unsafe --no-errors-on-unmatched",
  ],
  "*.{js,ts}": "vitest related --run",
};
