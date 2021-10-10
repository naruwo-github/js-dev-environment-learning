# js-dev-environment-learning
JavaScriptの開発環境構築のキャッチアップ用プロジェクト

## 実行環境
- OS: macOS BigSur version 11.6
- Editor: Visual Studio Code version 1.60.2
- yarn: node package manager, version 1.22.15

## 各技術について
### Babel
- @babel/core: JavaScriptのコンパイラ（トランスパイラ）。ES6以降の書式のコードをES5の書式に変換してくれる。
- @babel/cli: babelをコマンドで使えるようにしてくれるもの。
  - ```yarn babel src/index.js --out-dir dist```でbabelを動かして、コンパイルしたファイルをdistフォルダ下に生成するよ。
- babelの設定ファイルは、```.babelrc```か```babel.config.js```とする（他のファイル名でもOKだが、指定したファイル名だとファイルを生成するだけで自動で設定を読み取ってくれる）
  - 各設定は、設定ファイル内に1行ずつ追記する（例: ```plugins: ["@babel/plugin-transform-arrow-functions"]```）
  - これでは面倒なので、ひとまとめになった設定詰め合わせパック（```@babel/preset-env```）が便利
    - これは、browserslist, compat-table, electron-to-chromiumという3つの設定を参照し、それに合う形式にコンパイルしてくれるという優れもの
     - この中でpolyfillの設定もできる
### ESLint
- ```yarn add -D eslint```で導入。```-D```なのは、開発環境でしか必要ないからだね。
- .eslintrc.jsに各種設定を記述する。```yarn eslint --init```である程度雛形を作れる。
- 該当ファイルにESLintを適用する（```yarn eslint src/index.js```）。

### Prettier
- コードフォーマッタ。ソースコードを整形してくれる機能を持つもの。
  - 読みやすさを担保できる。
  - チーム開発で不要なコードの差分を出さないメリットもある。
- ```yarn prettier --write './src/**/*.{js,ts,tsx}'```でフォーマッタを適用できる
  - フォーマットする基準の設定は、```prettier.config.js```内に記載する

### Webpack
- モジュールバンドラ。複数のjsを含むassetファイルの依存関係の解決を行うもの。
  - 依存を持つjsファイルのentry pointを受け取り、その依存を解決したファイルを成果物としてoutputする。（この使い方が一般的だが、他の使い方もある。）
  - 設定は```webpack.config.js```に書く
- リンカとも言えるが、ただのリンカではなく複雑であり、loaderやserveという仕組みを用いていろいろなことができる。その一例を次に示す。
  - Babelを呼び出す
    - babel-loaderをインストールし、webpack.config.js内に設定を記述する必要がある
  - TypeScriptのコンパイラを呼び出す
    - ...
  - 開発用サーバを立てる
    - ...
  - HTMLにバンドルしたJavaScriptファイルを埋め込める
    - html-webpack-pluginをインストールし、webpack.config.js内に設定を記述する必要がある
  - 他にも色々...
- webpackとcliツールを導入する
  - ```yarn add -D webpack webpack-cli```の後、webpackコマンドが使えるようになる。

### Jest
- ...
