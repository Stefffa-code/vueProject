
module.exports = {
  root: false,
  env: {
    node: false
  },
  // extends: [
  //   // 'plugin:vue/essential',
  //   // '@vue/standard'
  // ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  // rules: {
  //   'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //   'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  // }

  rules: {
    'no-console': 0,
  },
  parser:"vue-eslint-parser"
}
