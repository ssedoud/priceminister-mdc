var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
        },      { test: /\.json$/, loader: 'json-loader' }]
    },
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: 'dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        headers: { 'Access-Control-Allow-Origin': '*' },
        hot: true
    },
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
