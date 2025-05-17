import merge from 'lodash.merge'

const baseConfig = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['dist', 'build', 'node_modules'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'no-redeclare': 'warn',
    'no-debugger': 'warn',
    'prefer-const': 'off',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Node.js builtins prefixed with `node:`.
          ['^node:'],
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^react', '^solid', '^vue', '^@?\\w'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ['^'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
  },
}

const reactConfig = {
  plugins: ['react'],
  rules: {
    'react/self-closing-comp': 'warn',
  },
}

const solidConfig = {
  plugins: ['solid'],
  extends: ['plugin:solid/recommended'],
}

export const getEslintConfig = (
  type: 'react' | 'solid' | 'default' = 'default',
  config: unknown = {}
) => {
  if (type === 'react') {
    return merge({}, baseConfig, reactConfig, config)
  }
  if (type === 'solid') {
    return merge({}, baseConfig, solidConfig, config)
  }
  return merge({}, baseConfig, config)
}
