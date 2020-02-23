const path = require('path');

module.exports = {
  mode: "development",

  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "index.js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
};
