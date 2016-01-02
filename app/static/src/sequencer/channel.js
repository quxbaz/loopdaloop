var _ = require('underscore');
var Backbone = require('backbone');
var util = require('util');
var Loop = require('./loop');
var Cell = require('./cell');

var Channel = Backbone.View.extend({

  className: 'channel',
  template: util.makeTemplate('channel'),

  events: {
    'click .channel-title': 'actionClickChannelTitle'
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
      sampleName: this.sampleName,
      cells: this.cells
    }
  },

  actionClickChannelTitle: function(event) {
    this.$el.trigger('clickChannelTitle', this);
  }

});

module.exports = Channel;
