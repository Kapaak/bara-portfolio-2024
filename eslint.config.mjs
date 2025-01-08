import eslint from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      '**/dist',
      '**/node_modules',
      '**/.astro',
      '**/.github',
      '**/.changeset',
      'astro.config.mjs',
    ],
  },
  // Global config
  // JavaScript
  eslint.configs.recommended,
  // TypeScript
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
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
    rules: {
      'tailwindcss/no-custom-classname': 'off',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
      'no-console': 'warn',
    },
  }
);
