// リンター ESLint の設定

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        // ESLintのルールは後勝ちするため、後に設定したものが優先される
        "eslint:recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": ["prettier"],
    "rules": {
    }
};
