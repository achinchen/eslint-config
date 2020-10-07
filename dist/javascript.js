module.exports = {
  extends: [
    require.resolve('./shared.js'),
    'prettier',
    'prettier/react',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  parser: '@babel/eslint-parser'
};