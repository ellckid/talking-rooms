// eslint-disable-next-line no-undef
module.exports = {
  "*.{json,ts,tsx}": "prettier --write",
  "*.{ts,tsx}": ["eslint", () => "tsc --p tsconfig.json"],
  "*.{md,json}": ["prettier --write"],
};
