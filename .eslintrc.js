module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
    // "plugin:storybook/recommended",
    // "airbnb-typescript",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    indent: 'off',
    // "@typescript-eslint/indent": ["error", 2],
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error'],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true
      }
    ],
    'no-extra-semi': 'off',
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    '@typescript-eslint/no-extra-semi': ['error'],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
    '@typescript-eslint/prefer-enum-initializers': 'error',
    'linebreak-style': ['off', 'unix'],
    semi: ['error', 'always'],

    '@typescript-eslint/no-unused-expressions': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'error',
    'no-case-declarations': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    'no-fallthrough': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-async-promise-executor': 'off',
    'no-prototype-builtins': 'off',
    'prefer-rest-params': 'off',
    'no-useless-escape': 'off',
    'no-empty-pattern': 'off',
    'prefer-const': 'warn',
    'no-useless-catch': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/prop-types': 'off',
    'no-var': 'warn',
    'no-compare-neg-zero': 'warn',
    'react/no-deprecated': 'warn',
    'no-extra-boolean-cast': 'off',
    'no-irregular-whitespace': 'off',
    '@typescript-eslint/no-array-constructor': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-len': [2, { code: 200, ignoreComments: true }],
    'no-console': 'warn',
    'prefer-template': 'error',
    'no-unexpected-multiline': 'error',
    '@typescript-eslint/quotes': 'off',
    // quotes: ["error", "double", { allowTemplateLiterals: true }],
    // "no-use-before-define": [
    //   "error",
    //   {
    //     functions: true,
    //     classes: true,
    //     variables: true
    //   }
    // ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error', { ignoreTypeValueShadow: true }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
