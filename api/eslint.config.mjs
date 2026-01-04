import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import pluginImport from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
  {ignores: ['node_modules', 'dist', '*.config.mjs']},
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.ts'],
    languageOptions: {
      globals: { ...globals.node, ...globals.es2022 },
      parser: tseslint.parser,
      parserOptions: {
        // project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      import: pluginImport,
      prettier: prettierPlugin
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts'],
        },
        typescript: {
          project: './tsconfig.json',
        },
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts'],
      },
    },
    rules: {
      'prettier/prettier': 'error',
      // ✅ Сортировка импортов с поддержкой алиасов
      'import/order': [
        'error',
        {
          groups: [
            'builtin',        // fs, path
            'external',       // react, lodash
            'internal',       // @/...
            'parent',         // ../
            'sibling',        // ./same
            'index',          // ./index
          ],
          pathGroups: [
            // алиасы → internal
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-duplicates': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/consistent-type-assertions': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  eslintConfigPrettier,
)