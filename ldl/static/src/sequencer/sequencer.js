var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var hb = require('handlebars');
var Array2d = require('arr2d');
var Loop = require('./loop');

var Sequencer = Backbone.View.extend({

  className: 'sequencer',
  template: hb.compile($('#sequencer-template').html()),

  events: {
    'click .blip-btn'     : 'addBlip',
    'click .control-play' : 'play'
  },

  initialize: function(opts) {
    var opts = opts || {};
    this.cellWidth = opts.width;
    this.cellHeight = opts.height;
    this.grid = new Array2d(16, 12);

    // TEMP
    this.testLoop = new Loop({repeat: false});
  },

  addBlip: function(event) {
    var sampleId = $(event.currentTarget).data('sample-id');
    console.log(sampleId);
    var duration = 200;
    this.testLoop.add(sampleId, {
      duration: duration
    });
    this.render();
    return this;
  },

  play: function() {
    this.testLoop.play();
  },

  render: function() {
    this.$el.html(this.template({
      grid: this.grid,
      sampleIds: app.am.sampleIds,
      loop: this.testLoop
    }));
    return this;
  }

});

module.exports = Sequencer;
