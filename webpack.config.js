const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/components/app.js'
  ],
  output: {
      filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src/components/'),
        loader: 'babel-loader',
        query: {
          presets: ["es2015"],
        },
        exclude: [
          path.resolve(__dirname, "node_modules"),
        ],
      }
    ]
  },
  debug: true
};
