module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        'no-empty': 'off',
        'prefer-const': 'warn',
        'no-unused-vars': 'warn',
        quotes: ['warn', 'single'],
        'no-empty-function': 'warn',
        'eol-last': ['warn', 'never'],
        'comma-dangle': ['warn', 'never'],
        'quote-props': ['warn', 'as-needed'],
        'jsx-quotes': ['warn', 'prefer-single'],
        semi: ['warn', 'always', { omitLastInOneLineBlock: true }]
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    ignorePatterns: ['dist', 'node_modules']
};