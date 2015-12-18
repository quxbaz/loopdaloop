var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var hb = require('handlebars');
var loopy = require('./loopy');

var Sequencer = Backbone.View.extend({

  className: 'sequencer',
  template: hb.compile($('#sequencer-template').html()),

  events: {
    'click .control-play' : 'play',
    'click .blip-btn'     : 'addBlip'
  },

  initialize: function() {
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

  render: function() {
    this.$el.html(this.template({
      sampleIds: app.am.sampleIds
    }));
    return this;
  }

});

module.exports = Sequencer;
