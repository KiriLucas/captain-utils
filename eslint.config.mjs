import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  { ignores: ['dist', 'coverage', '*.mjs', '*.js', 'jest.config.ts'] },
  eslint.configs.recommended,
  eslintPluginPrettierRecommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        allowDefaultProject: true,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
    },
  },
  {
    files: ['**/*.test.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-argument': 'off',
    },
  },
  {
    files: ['**/*.mock.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
);
