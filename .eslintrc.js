/*
 * @Description: 
 * @autor: zhan.liang  <liang.zhan06@hand-china.com>
 * @Date: 2022-04-20 15:48:43
 * @LastEditors: Seven
 * @version: 0.0.1
 * @copyright: Copyright (c) 2019, Hand
 */
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // 'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    //'standard'
  ],
  // required to lint *.vue files
  plugins: [
    //'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
