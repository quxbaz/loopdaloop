var _ = require('underscore');
var Backbone = require('backbone');
var util = require('util');
var Loop = require('./loop');

var Channel = Backbone.View.extend({

  className: 'channel',
  template: util.makeTemplate('channel'),

  defaults: {
    sampleId: 'snare'
  },

  initialize: function(opts) {
    _.extend(this, opts, this.defaults);
    // <TODO> Construct properly
    this.loop = new Loop({sampleId: this.sampleId});
  },

  play: function() {
    this.loop.play();
  }

});

module.exports = Channel;
