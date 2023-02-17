module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  rules: {
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-nested-ternary": "warn",
    "arrow-body-style": "warn",
    "import/order": "warn",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-key": "warn",
    "react/self-closing-comp": "warn",
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "warn",
  },
};
