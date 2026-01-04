import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginImport from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'

export default tseslint.config([
  {ignores: ['node_modules', 'dist', '*.config.mjs']},
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      parser: tseslint.parser,
      globals: globals.browser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: pluginImport,
      prettier: prettierPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
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
            // Группируем React отдельно (опционально)
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react-dom',
              group: 'external',
              position: 'before',
            },
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
      'react-refresh/only-export-components': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    },
    // settings: {
    //   'import/resolver': {
    //     typescript: {
    //       project: './tsconfig.json',
    //     },
    //     node: {
    //       extensions: ['.js', '.jsx', '.ts', '.tsx'],
    //     },
    //   },
    //   'import/parsers': {
    //     '@typescript-eslint/parser': ['.ts', '.tsx'],
    //   },
    // },
  },
  eslintConfigPrettier,
])
