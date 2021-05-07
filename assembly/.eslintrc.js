module.exports = {
  root: true,
  extends: '@egs33/eslint-config/typescript-base',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/prefer-for-of': 'off',
  }
};
