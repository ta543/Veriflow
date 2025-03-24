const tseslint = require('typescript-eslint');
const playwright = require('eslint-plugin-playwright');
const unusedImports = require('eslint-plugin-unused-imports');

module.exports = [
  {
    ignores: ['node_modules', 'dist', 'build'],
  },

  ...tseslint.configs.recommended,

  // Base TypeScript rule set
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      'playwright': playwright,
      'unused-imports': unusedImports,
    },
    rules: {
      'playwright/no-skipped-test': 'warn',
      'playwright/no-force-option': 'warn',
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  // ✅ Override for files in src/tobias-playwright to relax unused vars
  {
    files: ['src/tobias-playwright/**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
];
