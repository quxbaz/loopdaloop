var $ = require('jquery');
var Backbone = require('backbone');
var util = require('util');
var Channel = require('./channel');

var INITIAL_CHANNELS = 3;  // Starting number of channels rendered

var Sequencer = Backbone.View.extend({

  className: 'sequencer',
  template: util.makeTemplate('sequencer'),

  events: {
    'click .control-play' : 'play',
    'click .blip-btn'     : 'addBlip'
  },

  initialize: function() {
    this.channels = [];
    this.addChannels(INITIAL_CHANNELS);
  },

  addChannels: function(n) {
    for (var i=0; i < n; i++)
      this.channels.push(new Channel());
  },

  play: function() {
  },

  addBlip: function(event) {
    if (!this.selectedLoop)
      return;
    var sampleId = $(event.currentTarget).data('sample-id');
    this.selectedLoop.add(sampleId);
    this.render();
    return this;
  },

  templateData: function() {
    return {
      channels: this.channels
    };
  }

});

module.exports = Sequencer;
