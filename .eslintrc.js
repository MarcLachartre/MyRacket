module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  "rules": {
    "no-console": "off",
    "comma-dangle": "off",
    "quotes": "off",
    "react/prop-types": 0,
    "arrow-body-style": 0,
    "space-before-function-paren": 0
  }, 
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
  },
};
