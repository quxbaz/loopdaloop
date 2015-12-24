var _ = require('underscore');
var Backbone = require('backbone');
var util = require('util');
var Loop = require('./loop');
var Cell = require('./cell');

var Channel = Backbone.View.extend({

  className: 'channel',
  template: util.makeTemplate('channel'),

  events: {
    'cellClick': 'actionToggleCell'
  },

  defaults: {
    sampleName: ''
  },

  initialize: function(opts) {
    _.extend(this, this.defaults, opts);
    this.loop = new Loop({sampleName: this.sampleName});
    this.cells = _.times(16, function(i) {
      return new Cell({
        blip: this.loop.blips[i]
      });
    }.bind(this));
  },

  templateData: function() {
    return {
      cells: this.cells
    }
  },

  actionToggleCell: function(event, cell) {
    cell.blip.toggleMute();
  }

});

module.exports = Channel;
