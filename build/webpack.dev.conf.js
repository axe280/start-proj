const webpack =  require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV config
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    host: '192.168.0.105',
    disableHostCheck: true,
    port: 3000,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  module: {
    rules: [{
      test: /img\/(-?\w\/?){0,}\.(png|jpg|gif|svg)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: '../img/[name].[ext]'
      }
    },
    {
      test: /fonts\/(-?\w\/?){0,}\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: '../fonts/[name].[ext]'
      }
    }]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
