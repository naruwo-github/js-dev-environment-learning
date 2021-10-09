# js-dev-environment-learning
JavaScriptの開発環境構築のキャッチアップ用プロジェクト

## 実行環境
- OS: macOS BigSur version 11.6
- Editor: Visual Studio Code version 1.60.2
- yarn: node package manager, version 1.22.15

## yarn経由で導入するパッケージたち
- @babel/core: JavaScriptのコンパイラ（トランスパイラ）。ES6以降の書式のコードをES5の書式に変換してくれる。
- @babel/cli: babelをコマンドで使えるようにしてくれるもの。
  - ```yarn run babel src/main.js --out-dir dist```でbabelを動かして、コンパイルしたファイルをdistフォルダ下に生成するよ。

## 各技術について
### Babel
- babelの設定ファイルは、```.babelrc```か```babel.config.js```とする（他のファイル名でもOKだが、指定したファイル名だとファイルを生成するだけで自動で設定を読み取ってくれる）
  - 各設定は、設定ファイル内に1行ずつ追記する（例: ```plugins: ["@babel/plugin-transform-arrow-functions"]```）
  - これでは面倒なので、ひとまとめになった設定詰め合わせパック（```@babel/preset-env```）が便利
    - これは、browserslist, compat-table, electron-to-chromiumという3つの設定を参照し、それに合う形式にコンパイルしてくれるという優れもの