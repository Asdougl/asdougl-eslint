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
  rules: {
    "prettier/prettier": 2,
    "@typescript-eslint/consistent-type-imports": 2,
    "react/react-in-jsx-scope": 0,
    "import/order": 2,
    "no-warning-comments": [2, { terms: ["TODO", "FIXME"], location: "start" }],
    "no-console": 1,
    "react/jsx-props-no-spreading": 2,
    "lodash/prefer-lodash-method": 0,
    "lodash/prefer-constant": 0,
    "react/prop-types": 0,
  },
};
