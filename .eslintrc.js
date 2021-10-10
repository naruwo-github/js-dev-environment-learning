// リンター ESLint の設定

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // ESLintのルールは後勝ちするため、後に設定したものが優先される
    'eslint:recommended',
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',

    // 下記は、TypeScript対応で導入したプラグイン@typescript-eslint/eslint-pluginとのルールの競合を抑えるためのルール設定。
    '@typescript-eslint/quotes': 0,
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-extra-parens': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/type-annotation-spacing': 'off',
  },
}
