module.exports = {
  root: true,
  extends: '@egs33',
  overrides: [
    {
      files: '*.ts',
      extends: '@egs33/eslint-config/typescript-node',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
