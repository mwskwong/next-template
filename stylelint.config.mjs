// @ts-check

/** @type {import("stylelint").Config} */
const stylelintConfig = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  overrides: [
    {
      files: ["**/*.module.css"],
      extends: ["stylelint-config-css-modules"],
      rules: {
        "selector-class-pattern": "^[a-z][a-zA-Z0-9]*$", // enforce CSS module class names to be in camelCase
      },
    },
  ],
};

export default stylelintConfig;
