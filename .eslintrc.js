module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'es6': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended'
  ],
  'globals': {
    ReactRouterDOM: false,
    PropTypes: false,
    ReactDOM: false,
    config: false,
    Swiper: false,
    moment: false,
    React: false,
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [2,2],
    'linebreak-style': [
      0,
      'unix'
    ],
    'quotes': [
      'warn',
      'single'
    ],
    'react/prop-types': 0,
    'semi': [
      'warn',
      'always'
    ],
    'no-unused-vars': [
      'warn',
      {
        'varsIgnorePattern': 'config',
        'args': 'after-used',
        'vars': 'all'
      }
    ],
    'arrow-parens': ['error', 'as-needed'],
    'camelcase': 0,
    'vars-on-top': 1,
    'no-console': 1,
    'template-curly-spacing': ['error', 'never']
  }
};
