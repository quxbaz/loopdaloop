/*
 View for blip cells.
*/

var Backbone = require('backbone');
var util = require('util');

var Cell = Backbone.View.extend({

  className: 'cell',
  template: util.makeTemplate('cell'),

  events: {
    'mousedown' : 'cellClick'
  },

  initialize: function(opts) {
    util.requireProps(opts, ['blip']);
    this.blip = opts.blip;
  },

  cellClick: function(event) {
    this.$el.trigger('cellClick', this);

    // <TODO> Bind this render to the template
    this.render();
  },

  templateData: function() {
    return this.blip;
  }

});

module.exports = Cell;
