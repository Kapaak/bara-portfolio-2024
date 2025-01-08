import eslint from '@eslint/js';
import tsESlintPlugin from '@typescript-eslint/eslint-plugin';
import eslintPluginAstro from 'eslint-plugin-astro';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      '**/dist',
      '**/node_modules',
      'node_modules/*',
      '**/.astro',
      '**/.github',
      '**/.changeset',
      'astro.config.mjs',
      'eslint.config.mjs',
    ],
  },
  //This plugin causes the warnings in the console after yarn eslint
  importPlugin.flatConfigs.recommended,
  // Global config
  // JavaScript
  eslint.configs.recommended,
  // TypeScript
  ...tseslint.configs.recommended,
  // Allow triple-slash references in `*.d.ts` files.
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  // Astro
  ...eslintPluginAstro.configs.recommended,

  // Set globals for Node scripts.
  {
    files: ['scripts/**'],
    languageOptions: {
      globals: globals.node,
    },
  },
  ...eslintPluginTailwindCSS.configs['flat/recommended'],
  {
    files: ['**/*.astro', '**/*.{ts,tsx}', '**/*.{js,jsx}'],
    plugins: {
      'jsx-a11y': jsxA11y,
      '@typescript-eslint': tsESlintPlugin,
    },
    rules: {
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-unresolved': 'off',
      'import/namespace': 'off',
      'import/default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'tailwindcss/no-custom-classname': 'off',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
      'no-console': 'warn',
    },
  }
);
