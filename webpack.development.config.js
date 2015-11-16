var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      "./App.js"
    ],
    output: {
      path: __dirname + '/public',
      filename: "bundle.js"
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot','babel', 'jsx']},
        { test: /\.css$/, loader: 'style!css'}
      ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
