/*
 View for blip cells.
*/

var Backbone = require('backbone');
var util = require('util');

var Cell = Backbone.View.extend({

  className: 'cell',
  template: util.makeTemplate('cell'),

  events: {
    'click' : 'cellClick'
  },

  initialize: function(opts) {
    this.blip = opts.blip;
  },

  cellClick: function(event) {
    this.$el.trigger('cellClick', this);
  }

});

module.exports = Cell;
