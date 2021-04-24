module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'class-methods-use-this': 0,
    // Changing max row length from 80 to 150.
    // Remember to change in .editorconfig also, although am not sure if that file is even needed?
    // Especially as scaffolding gave 100 as max len while ESLint default is 80...
    'max-len': [
      'error',
      {
        code: 150,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/ban-ts-ignore': 0,
  },
  // These are added if you chose also to install Jest plugin for Vue CLI
  // With my own modifications here as an example
  overrides: [
    {
      files: [
        './src/**/__tests__/*.spec.{j,t}s',
        './src/**/__mock__/*.{j,t}s',
      ],
      env: {
        jest: true,
      },
      rules: {
        'no-unused-expressions': 0,
      },
    },
  ],
};