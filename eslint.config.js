// eslint.config.js
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  {
    ignores: ['node_modules', 'dist', 'build'],
  },
  ...tseslint.configs.recommended,
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
      '@typescript-eslint/no-unused-vars': 'off', // handled by unused-imports
    },
  },
];
