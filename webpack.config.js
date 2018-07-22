const path = require('path');

module.exports = {
  entry: './src/panorama.js',
  output: {
    filename: 'panorama.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
