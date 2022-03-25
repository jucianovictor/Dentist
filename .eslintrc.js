module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "airbnb-typescript/base",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: "./tsconfig.json",
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  rules: {
    "react/display-name": "off",
    "space-before-function-paren": "off",
    "react/prop-types": "off",
    "arrow-parens": "off",
    "import/extensions": ["error", "never"],
    "indent": [
      "error",
      2
    ],
    "linebreak-style": ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
}