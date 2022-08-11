const path = require('path')
const webpack = require("webpack");

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'worker.js',
    path: path.join(__dirname, 'dist'),
  },
  devtool: 'cheap-module-source-map',
  mode: 'development',
  resolve: {
    alias: {
      "buffer": "buffer",
      "stream": "stream-browserify"
    },
    extensions: ['.ts', '.tsx', '.js'],
    fallback: { "stream": require.resolve("stream-browserify"), "zlib": require.resolve("browserify-zlib"), "buffer": require.resolve("buffer")  }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          // transpileOnly is useful to skip typescript checks occasionally:
          // transpileOnly: true,
        },
      },
    ],
  },
}
