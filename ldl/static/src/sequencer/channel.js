var Backbone = require('backbone');
var util = require('util');
var loopy = require('./loopy');

var Channel = Backbone.View.extend({

  className: 'channel',
  template: util.makeTemplate('channel'),

  events: {},

  initialize: function() {
    this.loop = new loopy.Loop({muted: true, repeat: false});
  },

  play: function() {
    this.loop.play();
  }

});

module.exports = Channel;
