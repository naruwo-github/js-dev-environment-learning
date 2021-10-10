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
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
