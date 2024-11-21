const imports = require('./config/eslint/imports.cjs');
const react = require('./config/eslint/react-ts.cjs');
const typescript = require('./config/eslint/typescript.cjs');

module.exports = {
  root: true,
  ignorePatterns: ['**/*'],
  plugins: ['@nx'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: '*',
                onlyDependOnLibsWithTags: ['*'],
              },
            ],
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@nx/typescript',
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@tanstack/eslint-plugin-query/recommended"
      ],
      env: {
        ...imports.env,
        ...typescript.env,
        ...react.env,
      },
      plugins: [...imports.plugins, ...typescript.plugins, ...react.plugins, "react-refresh"],
      rules: {
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        ...imports.rules,
        ...typescript.rules,
        ...react.rules,
      },
      settings: {
        ...react.settings,
      },
      overrides: [...typescript.overrides],
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:@nx/javascript'],
      rules: {},
    },
    {
      files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
      env: {
        jest: true,
      },
      rules: {},
    },
  ],
};
