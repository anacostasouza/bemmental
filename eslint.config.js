import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

import tseslintParser from '@typescript-eslint/parser';
import tseslintPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ['dist'] 
  },

  js.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'], 
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.app.json', 
      },
    },
    plugins: {
      '@typescript-eslint': tseslintPlugin,
    },
    rules: {
      ...tseslintPlugin.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off'
    },
  },

  {
    files: ['**/*.{ts,tsx}'], 
    languageOptions: {
      globals: {
        ...Object.fromEntries(
          Object.entries(globals.browser).map(([key, value]) => [key.trim(), value])
        ),
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];