import js from "@eslint/js";
import astroParser from "astro-eslint-parser";
import astroPlugin from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astroPlugin.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      parser: tseslint.parser,
    },
  },
  {
    ignores: [
      "dist",
      ".astro",
      "node_modules",
      "*.config.{js,mjs,cjs}",
      "scripts/**",
    ],
  },
];
