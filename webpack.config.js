const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // modeはnone, development, productionの3つがある
  // none: 特に何もしない
  // development: 開発用
  // production: 最適化をしてくれる
  mode: 'none',
  // entry: SPAなら基本的に一つだが、MPAなら複数のエントリポイントを連想配列の形式で指定可能
  entry: './src/index.js',
  // output: entryごとに出力ファイルを作成することもできる
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      // JavaScriptをコンパイルする設定
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // HTMLファイルにバンドルしたJavaScriptファイルを埋め込む設定
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      // TypeScriptをJavaScriptに変換する設定
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
