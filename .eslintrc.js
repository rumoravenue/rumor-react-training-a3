module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.js', './src/serviceWorker.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'unused-imports'],
  rules: {
    'prettier/prettier': 'warn',
    'no-unused-vars': 'warn',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': 'warn',
  },
}
