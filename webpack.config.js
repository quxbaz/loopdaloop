require('es6-promise').polyfill();
var path = require('path');

module.exports = {
  entry: './ldl/static/entry.js',
  output: {
    path: path.join(__dirname, 'ldl/static/build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: 'style!css!less'}
    ]
  },
  resolve: {
    root: path.resolve('./ldl/static'),
    alias: {
      jquery: 'lib/jquery/dist/jquery.js',
      // lodash: 'lib/lodash/lodash.js',
      underscore: 'lib/underscore/underscore.js',
      backbone: 'lib/backbone/backbone.js'
    }
  }
}
