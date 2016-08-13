var path = require('path')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var srcPath = path.resolve(__dirname, 'src')
var indexHtmlPath = path.resolve(__dirname, 'index.html')
var faviconPath = path.resolve(__dirname, 'favicon.ico')

module.exports = {
  context: srcPath,
  entry: [
    require.resolve('webpack-dev-server/client') + '?http://localhost:8080',
    require.resolve('webpack/hot/dev-server'),
    path.join(srcPath, 'index.js'),
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    pathinfo: true,
    publicPath: '',
  },
  module: {
    loaders: [
      {
        test: /\.(less|css)$/,
        loader: 'style!css!postcss!less',
      }, {
        test: /\.(scss|sass)$/,
        loader: 'style!css!sass',
      }, {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel',
      }, {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=[name].[hash].[ext]',
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
  },
  postcss: function () {
    return [autoprefixer]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: indexHtmlPath,
      favicon: faviconPath,
    })
  ]
}
