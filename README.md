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