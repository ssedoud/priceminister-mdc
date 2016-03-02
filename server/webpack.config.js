const path = require('path')
const webpack = require('webpack')

const publicPath = path.join(__dirname, '..', 'public')

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(publicPath, 'src/index.js')
  ],
  output: {
    path: publicPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: 'node_modules'
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules'
      }
    ]
  }
}
