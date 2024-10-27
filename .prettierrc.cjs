/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 85,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  endOfLine: 'auto',
  arrowParens: 'always',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
};