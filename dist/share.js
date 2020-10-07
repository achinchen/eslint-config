module.export = {
  extends: [
    'prettier/react',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'trailingComma': 'none',
        'wrapWidth': 100
      }
    ],
    'consistent-return': 'warn',
    'default-case': 'warn',
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'no-console': 'warn',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-new-func': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': 'error',
    'no-unneeded-ternary': 'error',
    'no-use-before-define': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'radix': 'error'
  }
};