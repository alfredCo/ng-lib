var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BaseConfig = require('./webpack.config-base')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var AngularCompilerPlugin = require( "@ngtools/webpack" ).AngularCompilerPlugin;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// Webpack Config
var webpackConfig = {
  plugins: [
    // new webpack.ContextReplacementPlugin(
    //   // The (\\|\/) piece accounts for path separators in *nix and Windows
    //   /angular(\\|\/)core(\\|\/)@angular/,
    //   path.resolve(__dirname, './src'),
    //   {
    //     // your Angular Async Route paths relative to this root directory
    //   }
    // ),
    new HtmlWebpackPlugin({
     template: 'src/index.html',
     chunks: ['polyfills','frontend'],
     favicon: 'src/favicon.ico'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 8883,
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: false,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info'
    }),
    new MiniCssExtractPlugin({filename:"css/[name].css"}),
    new AngularCompilerPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: 'src/app/app.module#AppModule'
  })
  ],
  // optimization: {
  //   minimizer: [new UglifyJsPlugin()]
  // }
};

module.exports = webpackMerge(BaseConfig, webpackConfig);
