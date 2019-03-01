var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
const versions = require('../environments/versions');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
 
  output: {
    path: helpers.root('dist'),
    publicPath: '',
    filename: '[name].versions.versions.revision.js',
    chunkFilename: '[id].versions.versions.revision.chunk.js'
  },
  plugins: [
    
    new ExtractTextPlugin('[name].versions.versions.revision.css'),
 
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    }),
    new Chunks2JsonPlugin({ outputDir: 'dist/', publicPath })
    
  ]
});