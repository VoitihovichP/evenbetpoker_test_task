/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-unused-vars': 'warn', // Warns about unused variables
    'no-else-return': 'error', // Enforces consistent use of return statements in else blocks
    'no-use-before-define': ['error', { functions: false, classes: false }], // Disallows the use of variables before they are defined
    eqeqeq: 'error', // Enforces the use of strict equality (===)

    // General Improvements
    'consistent-return': 'error', // Requires all return statements in a function to either specify a value or not

    // Style
    indent: ['error', 2], // Enforces consistent indentation
    quotes: ['error', 'single'], // Enforces the use of single quotes
    semi: ['error', 'never'], // Enforces no semicolons at the end of lines
    'comma-dangle': ['error', 'never'], // Disallows trailing commas in object and array literals
    'no-trailing-spaces': 'error', // Disallows trailing whitespace at the end of lines
    'object-curly-spacing': ['error', 'always'], // Enforces consistent spacing inside braces of object literals
    'array-bracket-spacing': ['error', 'never'] // Disallows spaces inside brackets in array literals
  }
}
