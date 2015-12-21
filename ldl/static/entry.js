// Styles
require('./lib/normalize-css/normalize.css')
require('./less/style.less');

// Library scripts
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var render = require('render');
var bind = require('bind');

// Local app scripts
var App = require('./src/app.js');

render.setup(Handlebars, Backbone.View.prototype);
bind.setup(Handlebars);

Backbone.View.prototype.postRender = function(data) {
  bind.bindProps(this, this.el);
  return this;
};

document.addEventListener('DOMContentLoaded', function() {
  var app = new App();
  app.load().then(function() {
    app.run();
  });
});
