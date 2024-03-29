module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:lodash/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react-refresh"],
  rules: {
    "prettier/prettier": 2,
    "@typescript-eslint/consistent-type-imports": 2,
    "react/react-in-jsx-scope": 0,
    "import/order": 2,
    "import/namespace": 0,
    "no-warning-comments": [2, { terms: ["TODO", "FIXME"], location: "start" }],
    "no-console": 1,
    "react/jsx-props-no-spreading": 2,
    "lodash/prefer-lodash-method": 0,
    "lodash/prefer-constant": 0,
    "lodash/prefer-lodash-typecheck": 0,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "react/jsx-props-no-spreading": 2,
        "react/prop-types": 0,
      },
    },
  ],
};
