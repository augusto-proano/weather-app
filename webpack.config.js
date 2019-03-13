const isDev = process.env.NODE_ENV === 'development'
const Fiber = require('fibers')
const CssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          isDev
            ? 'style-loader' // creates style nodes from JS strings
            : CssExtractPlugin.loader, //extracts stylesheets into a dedicated file
          'css-loader', // translates CSS into CommonJS
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              implementation: require('sass'),
              fiber: Fiber
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CssExtractPlugin({
      path: __dirname,
      filename: './public/style/index.css'
    })
  ]
}
