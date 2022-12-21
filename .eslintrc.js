module.exports = {
  root: true,
  extends: ['standard'],
  rules: {
    'no-console': [
      process.env.NODE_ENV === 'production' ? 'error' : 0,
      { allow: ['warn', 'error'] },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 0,
    'no-var': 'warn',
    'prefer-const': 'warn',
    'no-else-return': 'error',
    'vue/order-in-components': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'no-trailing-spaces': 0,
    'no-multiple-empty-lines': 0,
    indent: 0,
  },
}
