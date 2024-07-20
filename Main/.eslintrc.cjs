module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true, commonjs: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    ecmaFeatures: {
      arrowFunctions: true,
      binaryLiterals: true,
      blockBindings: true,
      classes: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      generators: true,
      modules: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      octalLiterals: true,
      regexUFlag: true,
      regexYFlag: true,
      spread: true,
      superInFunctions: true,
      templateStrings: true,
      unicodeCodePointEscapes: true,
      globalReturn: true,
      jsx: true
    }
  },
  plugins: ['react', 'react-refresh', 'simple-import-sort', 'import'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-useless-catch': 'off',
    'no-unused-expressions': [
      2,
      {
        allowTernary: true
      }
    ],
    'no-useless-escape': 1,
    'no-extra-parens': 0,
    'no-undef': 2,
    'no-var': 2,
    curly: 2,
    'space-infix-ops': 2,
    'no-multi-spaces': 2,
    indent: [
      2,
      2,
      {
        flatTernaryExpressions: false,
        SwitchCase: 1
      }
    ],
    'padded-blocks': [2, 'never'],
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'return',
          'if',
          'switch',
          'for',
          'continue',
          'break',
          'do',
          'while',
          'try',
          'throw',
          'let',
          'const',
          'var',
          'multiline-block-like',
          'multiline-expression',
          'multiline-const',
          'multiline-let',
          'multiline-var'
        ]
      },
      {
        blankLine: 'always',
        prev: ['let', 'const', 'var'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['let', 'const', 'var'],
        next: ['singleline-const', 'singleline-let', 'singleline-var']
      }
    ],
    'one-var': [2, 'never'],
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'space-in-parens': [2, 'never'],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'key-spacing': [
      2,
      {
        mode: 'strict',
        beforeColon: false,
        afterColon: true
      }
    ],
    'object-curly-spacing': [2, 'always'],
    'array-bracket-spacing': [2, 'never'],
    'space-before-blocks': 2,
    'operator-assignment': [2, 'always'],
    'keyword-spacing': [
      2,
      {
        before: true
      }
    ],
    eqeqeq: [2, 'always'],
    'no-console': 1,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [2],
    'no-invalid-this': 2,
    'no-prototype-builtins': 0,
    'arrow-parens': [
      2,
      'as-needed',
      {
        requireForBlockBody: false
      }
    ],
    'no-case-declarations': 1,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'react/jsx-no-target-blank': 1,
    'react/display-name': 0,
    'react/jsx-quotes': [0, 'single'],
    'react/jsx-no-undef': [
      2,
      {
        allowGlobals: true
      }
    ],
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        noSortAlphabetically: true,
        shorthandFirst: false,
        shorthandLast: false,
        reservedFirst: ['key', 'ref']
      }
    ],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-string-refs': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-multi-comp': 2,
    'react/no-unknown-property': 2,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/self-closing-comp': 2,
    'react/jsx-curly-spacing': 2,
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-tag-spacing': [
      2,
      {
        closingSlash: 'never',
        // beforeSelfClosing: 'never',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/wrap-multilines': [
      0,
      {
        declaration: true,
        assignment: true,
        return: true,
        arrow: true
      }
    ],
    'react/jsx-no-duplicate-props': 2,
    'react/style-prop-object': 2
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['*.json'],
      rules: {
        'no-unused-expressions': 'off',
        quotes: 'off'
      }
    }
  ]
}