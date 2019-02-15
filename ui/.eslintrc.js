module.exports = {
  'extends': ['standard', 'plugin:react'],
  'react/prop-types': [
    'enabled',
    { ignore: 'ignore', customValidators: 'customValidator' }
  ],
  'globals': { fetch: false }
}
