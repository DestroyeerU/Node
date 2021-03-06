module.exports = {
  env: {
    "es6": true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/react",
  ],
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "__DEV__": "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    "ecmaFeatures": {
        "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  plugins: [
    "react",
    "prettier",
  ],
  rules: {
    // 'camelcase': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    'import/prefer-default-export': 'off',
  }
};
