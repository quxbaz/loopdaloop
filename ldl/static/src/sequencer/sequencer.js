var $ = require('jquery');
var Backbone = require('backbone');
var util = require('util');
var Channel = require('./channel');

var INITIAL_CHANNELS = 4;       // Starting number of channels to display.

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
      sampleIds: app.am.sampleIds,
      loops: this.loops
    };
  }

});

module.exports = Sequencer;
