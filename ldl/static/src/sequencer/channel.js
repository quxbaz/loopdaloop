var _ = require('underscore');
var Backbone = require('backbone');
var util = require('util');
var Loop = require('./loop');

var Channel = Backbone.View.extend({

  className: 'channel',
  template: util.makeTemplate('channel'),

  defaults: {
    sampleName: ''
  },

  initialize: function(opts) {
    _.extend(this, this.defaults, opts);
    // <TODO> Construct properly
    this.loop = new Loop({sampleName: this.sampleName});
  },

  play: function() {
    this.loop.play();
  }

});

module.exports = Channel;
