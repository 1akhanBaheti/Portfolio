module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021, // Or the ECMAScript version you are using
    sourceType: "module", // Or 'script' if you're using CommonJS or other modules
  },
  plugins: ["react", "@typescript-eslint", "import"],
  extends: [
    "next",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/warnings"
  ],
  settings: {
    next: {
      "rootDir": "."
    },
    "import/resolver": {
      typescript: {},
      node: {
        moduleDirectory: ["node_modules", "."],
      },
    },
  },
  rules: {
    "prefer-const": "error",
    "no-irregular-whitespace": "error",
    "no-trailing-spaces": "error",
    "no-duplicate-imports": "error",
    "arrow-body-style": ["error", "as-needed"],
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-img-element": "off",
    "react/jsx-key": "error",
    "react/self-closing-comp": ["error", { component: true, html: true }],
    "react/jsx-boolean-value": "error",
    "react/jsx-no-duplicate-props": "error",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["function", "variable"],
        format: ["camelCase", "snake_case", "UPPER_CASE", "PascalCase"],
      },
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling",],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/**",
            group: "internal",
          }
        ],
        pathGroupsExcludedImportTypes: ["builtin", "internal", "react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },

};
