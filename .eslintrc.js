module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },

  "env": {
        "browser": true,
        "node":true,
        "es6": true
    },

  extends: 'airbnb',

  'rules': {
    "indent": ["error", 4],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    'consistent-return':'off',
    'linebreak-style':'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': ["error", { "props": false }],
    'no-useless-escape':'off',
    'no-cond-assign':'off',
    'no-multi-assign':'off',
    'no-unneeded-ternary': ["error", { "defaultAssignment": false }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'react/prefer-stateless-function':'off',
    'no-plusplus':'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'global-require':'off',
    "react/jsx-indent": [2, 4],
    'react/require-default-props': 'off',
    'no-unused-expressions': ["error", { "allowTernary": true }],
    'react/forbid-prop-types':'off',
    'react/prop-types':'off',
    'react/no-multi-comp': 'off',
    'react/no-array-index-key': 'off',
    'no-nested-ternary':'off'
  }
}
