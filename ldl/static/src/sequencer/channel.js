var Backbone = require('backbone');
var util = require('util');
var Loop = require('./loop');

var Channel = Backbone.View.extend({

  className: 'channel',
  template: util.makeTemplate('channel'),

  events: {},

  initialize: function() {
    this.loop = new Loop({muted: true, repeat: false});
  },

  play: function() {
    this.loop.play();
  }

});

module.exports = Channel;
