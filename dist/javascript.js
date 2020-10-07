module.exports = {
  extends: [
    require.resolve('./share.js'),
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  parser: '@babel/eslint-parser'
};