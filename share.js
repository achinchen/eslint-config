module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        wrapWidth: 80
      }
    ]
  }
};
