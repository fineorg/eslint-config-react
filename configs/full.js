module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "import", "unused-imports"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "prefer-template": ["error"],
    "prefer-destructuring": [
      "error",
      {
        object: true,
        array: false,
      },
    ],
    "no-else-return": "error",
    "spaced-comment": "error",
    "react-hooks/rules-of-hooks": "error",
    "@typescript-eslint/explicit-member-accessibility": ["warn"],
    "import/no-default-export": ["error"],
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always-and-inside-groups",
      },
    ],
    "import/first": ["error"],
    "import/no-duplicates": ["error"],
    "import/newline-after-import": ["error"],
    "unused-imports/no-unused-imports": ["error"],
  },
};
