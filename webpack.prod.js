const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { merge } = require('webpack-merge')

const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ test: /\.js(\?.*)?$/i })]
  },
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
              {
                displayName: false,
                minify: true,
                pure: true,
                namespace: 'super',
                transpileTemplateLiterals: true
              }
            ],
            '@babel/plugin-proposal-class-properties'
          ]
        }
      }
    ]
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
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
