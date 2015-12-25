/*
 View for blip cells.
*/

var Backbone = require('backbone');
var util = require('util');

var Cell = Backbone.View.extend({

  className: 'cell',
  template: util.makeTemplate('cell'),

  events: {
    'click' : 'actionToggleMute'
  },

  initialize: function(opts) {
    util.requireProps(opts, ['blip']);
    this.blip = opts.blip;
  },

  actionToggleMute: function(event) {
    this.blip.toggleMute();
    this.render();
    this.$el.toggleClass('muted', this.blip.muted);
  },

  templateData: function() {
    return this.blip;
  }

});

module.exports = Cell;
