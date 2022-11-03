const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { DefinePlugin } = require('webpack')
const { merge } = require('webpack-merge')

const common = require('./webpack.common')

module.exports = merge(common, {
  target: 'web',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript'
          ],
          plugins: [
            '@babel/plugin-transform-runtime',
            [
              'babel-plugin-styled-components',
              { displayName: true, pure: true, namespace: 'cs' }
            ],
            '@babel/plugin-proposal-class-properties'
          ]
        }
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: 'http://localhost:3000/'
  },
  devServer: {
    liveReload: true,
    contentBase: path.resolve(__dirname, 'dist'),
    writeToDisk: true,
    historyApiFallback: {
      index: 'index.html'
    },
    hot: true,
    open: true,
    compress: true,
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  devtool: 'eval-cheap-source-map',
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify(
        '/api'
      )
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ]
})
