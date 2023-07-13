module.exports = {
  extends: '@it-incubator/eslint-config',
  rules: { 'no-console': ['warn', { allow: ['warn', 'error'] }] },
  settings: {"import/resolver": { "node": { "extensions": [".js", ".jsx", ".ts", ".tsx"] } }},
}