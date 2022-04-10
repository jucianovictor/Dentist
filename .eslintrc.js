module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		'next/core-web-vitals',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		project: './tsconfig.json',
		ecmaVersion: 12,
		sourceType: 'module',
		warnOnUnsupportedTypeScriptVersion: false,
	},
	globals: {
		React: 'readonly',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'react/display-name': 'off',
		'react/prop-types': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		semi: "off",
  	"@typescript-eslint/semi": ["error"],
		'space-before-function-paren': ['error', 'always'],
		'arrow-parens': 'off',
		'import/extensions': ['error', 'never'],
		indent: ['error', 'tab'],
		'linebreak-style': [
			'error',
			process.platform === 'win32' ? 'windows' : 'unix',
		],
		'prefer-const': 'error',
		quotes: ['error', 'single'],
		'no-extra-semi': 'error',
	},
};
