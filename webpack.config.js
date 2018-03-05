process.env.NODE_ENV = 'development';
const path = require('path');

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      './client/main.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(jsx|js|es6)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.es6'],
  }
};
