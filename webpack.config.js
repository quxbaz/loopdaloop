require('es6-promise').polyfill();
var path = require('path');

module.exports = {
  devtool: 'source-map',
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
      'jquery'      : 'lib/jquery/dist/jquery.js',
      'underscore'  : 'lib/underscore/underscore.js',
      'backbone'    : 'lib/backbone/backbone.js',
      'handlebars'  : 'lib/handlebars/handlebars.js',
      // 'arr2d'       : 'lib/arr2d.js/arr2d.js',
      'http'        : 'lib/http.js/http.js',
      'render'      : 'lib/render.js/render.js',
      'bind'        : 'lib/bind.js/bind.js',
      'util'        : 'util.js'
    }
  }
}
