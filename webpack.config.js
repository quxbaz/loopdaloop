require('es6-promise').polyfill();
var path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: './app/static/entry.js',
  output: {
    path: path.join(__dirname, 'app/static/build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx', include: [path.resolve(__dirname, 'app/static/src/')]},
      {test: /\.jsx$/, loader: 'jsx', include: [path.resolve(__dirname, 'app/static/src/components/')]},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: 'style!css!less'}
    ]
  },

  resolve: {
    root: path.resolve('./app/static'),
    extensions: ['', '.js', '.jsx'],
    alias: {
      'jquery'      : 'lib/jquery/dist/jquery.js',
      'ember'       : 'lib/ember/ember.js',
      'underscore'  : 'lib/underscore/underscore.js',
      'backbone'    : 'lib/backbone/backbone.js',
      'handlebars'  : 'lib/handlebars/handlebars.js',
      'react'       : 'lib/react/react.js',
      'react-dom'   : 'lib/react/react-dom.js',
      // 'arr2d'       : 'lib/arr2d.js/arr2d.js',
      'http'        : 'lib/http.js/http.js',
      'render'      : 'lib/render.js/render.js',
      'bind'        : 'lib/bind.js/bind.js',
      'timer'       : 'lib/timer.js/timer.js',
      'util'        : 'util.js'
    }
  }
}
