module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-plusplus': 'off',
    'consistent-return': 'Off',
    'no-unused-expressions': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-syntax': 'off',
    'default-case': 'off',
    'no-underscore-dangle': 'off',
    'import/extensions': 'off',
    'no-shadow': 'off',
    'no-return-await': 'off',
    'max-classes-per-file': 'off',

  },
};
