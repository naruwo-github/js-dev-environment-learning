module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                // usage: polyfillを自動で使えるように設定してくれる
                "useBuiltIns": "usage",
                "corejs": 3
            }
        ]
    ]
}