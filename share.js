module.exports = {
  extends: [
    'prettier/react',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        wrapWidth: 100
      }
    ]
  }
};
