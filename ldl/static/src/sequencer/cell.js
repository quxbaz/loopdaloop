/*
 View for blip cells.
*/

var Backbone = require('backbone');
var util = require('util');

var Cell = Backbone.View.extend({

  className: 'cell',
  template: util.makeTemplate('cell'),

  events: {
    'mousedown' : 'actionToggleMute'
  },

  initialize: function(opts) {
    util.requireProps(opts, ['blip']);
    this.blip = opts.blip;
  },

  actionToggleMute: function(event) {
    this.blip.toggleMute();

    // <TODO> Bind this render to the template
    this.render();

    this.$el.toggleClass('muted', this.blip.muted);
  },

  templateData: function() {
    return this.blip;
  }

});

module.exports = Cell;
