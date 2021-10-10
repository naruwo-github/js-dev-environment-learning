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
- JSのテストランナー。```yarn add -D jest```で導入。
- デフォルトでは```xxx.test.js```というファイル名内がテスト対象となる。

### TypeScript
- JavaScriptのコードで型定義ができるようになる拡張機能のこと。これ自体を言語と捉える場合もある。
- 実行する際にはJavaScriptに変換される。安全性や補完の恩恵を得られるメリットをJSに添加したものですね。
- ここで学ぶ内容: tsc, tsconfig, ESLintをTS用に設定, PrettierをTS用に設定, WebpackをTS用に設定, JestをTS用に設定
- tsc: TypeScriptのコンパイラ。```yarn tsc xxx.ts --outDir dist```とすると、xxx.tsをxxx.jsに変換してdist/に出力できる。
- tsconfig.json: コンパイル時の詳細設定ファイル。```yarn tsc --init```で作成可能。
- ESLintの設定にTypeScript用の設定を組み込む
  - ```.eslintrc.js```に設定を追記するが```yarn```で```@typeScript-eslint/eslint-plugin```モジュールをプロジェクトに追加したのち、あれこれとプラグインの設定（extendsの中に色々書く）をする。
    - ```plugin:@typescript-eslint/recommended```は方を必要としない基本設定を詰め込んだもの。
    - ```plugin:@typescript-eslint/eslint-recommended```はTypeScriptでチェックされる項目を除外する設定。
    - ```@typeScript-eslint/parser```は、TypeScriptのコードをリントするために必要。
- PrettierをTypeScript用に設定する
  - ```.eslintrc.js```に```@typescript-eslint```ライブラリを入れる必要がある。
- Webpackでtscを使うように設定する
  - ts-loaderが必要。```yarn add -D ts-loader```で導入。
- JestでTypeScriptのコードをテストする
  - ```yarn add -D @types/jest ts-jest```で必要なモジュールを導入。
  - @types/jest: Jest用の型定義ファイル。これがないとテストコードをTSで書いた時にエディタ上で警告が出る（実行はできる）。
  - ts-jest: JestのTypeScriptプリプロセッサ。