'use strict';

module.exports = {
  rules: {
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'prefer-const': 0,
    'comma-dangle': 0,
    'prefer-arrow-callback': 0,
    'func-names': 0,
    'prefer-rest-params': 0,
    'no-underscore-dangle': 0,
    'array-callback-return': 0,
    'consistent-return': 0,

    'no-irregular-whitespace': [2, {
      'skipStrings': true,
      'skipComments': true
    }],

    'space-before-function-paren': [2, {
      'anonymous': 'never',
      'named': 'never'
    }],

    'generator-star-spacing': [2, {
      'before': false,
      'after': true
    }]
  }
};