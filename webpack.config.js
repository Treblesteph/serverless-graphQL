var path = require("path");
var nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  entry: './lambda.js',
  target: 'node',
  node: {
    net: 'empty',
    fs: 'empty'
   },
   externals: [nodeExternals()],
   output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}