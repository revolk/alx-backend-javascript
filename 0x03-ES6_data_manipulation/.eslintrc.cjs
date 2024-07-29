module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true // أضف هذه السطر لتعريف متغيرات Jest
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended' // أضف هذه السطر لتعريف قواعد Jest
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    // أضف قواعد مخصصة هنا إذا لزم الأمر
  }
};

