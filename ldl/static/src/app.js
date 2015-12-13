var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Array2d = require('arr2d');

var Sequencer = Backbone.View.extend({

  initialize: function(opts) {
    var opts = opts || {};
    this.cellWidth = opts.width;
    this.cellHeight = opts.height;
    this.grid = new Array2d(8, 10);
  },

  render: function() {

  }

});

$(function() {
  var grid = new Grid();
});
