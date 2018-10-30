var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// Webpack Config
var webpackConfig = {
  entry: {
    'polyfills': ['./src/polyfills.ts'],
    'frontend': ['./src/main.ts','./src/less/index.less']
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './built'),
    filename: 'js/[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    rules: [
      // .ts files for TypeScript
      // {
      //   test: /\.ts$/,
      //   loaders: [
      //     'awesome-typescript-loader',
      //     'angular2-template-loader'
      //     // 'angular2-router-loader'
      //   ]
      // },
      { test: /\.ts$/, loaders: ['@ngtools/webpack'] },
      { test: /\.less$/, loaders: ['to-string-loader', 'css-loader',"less-loader"] },
      { test: /\.html$/, loader: 'raw-loader' },
      {
        test:/\.gif|png|jpg|jpeg|svg|woff|ttf|woff2?|eot/,
        use:[{
            loader:"file-loader",
            options:{
                name:"img/[name].[ext]"
            }
        }]
      },
      {
        test: /\.less$/, 
        use:[MiniCssExtractPlugin.loader,"css-loader","less-loader"]
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
    modules: [ path.resolve(__dirname, 'src/lib'),path.resolve(__dirname, 'node_modules') ],
    plugins: [new TsConfigPathsPlugin()]
  },
  // optimization: {
  //   splitChunks: {
  //     // Apply optimizations to all chunks, even initial ones (not just the
  //     // ones that are lazy-loaded).
  //     chunks: "all"
  //   },
  //   // I pull the Webpack runtime out into its own bundle file so that the
  //   // contentHash of each subsequent bundle will remain the same as long as the
  //   // source code of said bundles remain the same.
  //   runtimeChunk: "single"
  // }
};

module.exports = webpackConfig;
