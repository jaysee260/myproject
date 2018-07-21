const config = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    // proxy: {
    //   '/': 'http://localhost:3000'
    // },
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(scss|sass)/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};

module.exports = config;