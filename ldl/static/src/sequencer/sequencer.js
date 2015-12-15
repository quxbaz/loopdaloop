var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var hb = require('handlebars');
var Array2d = require('arr2d');
var audioManager = require('./audiomanager');
var Loop = require('./loop');

var LoopView = Backbone.View.extend({
  className: 'loop',
  template: hb.compile($('#loop-template').html()),
  render: function() {
    this.$el.html(this.template(this.model))
    return this;
  }
});

var Sequencer = Backbone.View.extend({

  className: 'sequencer',
  template: hb.compile($('#sequencer-template').html()),

  events: {
    'click .blip-btn'     : 'addBlip',
    'click .add-loop'     : 'addLoop',
    'click .loop'         : 'selectLoop',
    'click .control-play' : 'play'
  },

  initialize: function(opts) {
    var opts = opts || {};
    this.cellWidth = opts.width;
    this.cellHeight = opts.height;
    this.grid = new Array2d(8, 10);

    // TEMP
    this.loops = [];
  },

  addBlip: function(event) {
    var sample = $(event.currentTarget).data('sample');
    var duration = 300;
    this.activeLoop.add({sample: sample, duration: duration});
    this.render(); // TEMP
    return this;
  },

  addLoop: function() {
    this.loops.push(new Loop());
    if (this.loops.length == 1)
      this.activeLoop = this.loops[0];
    this.render(); // TEMP
    return this;
  },

  selectLoop: function(event) {
    $('.loop').removeClass('outline');
    var $loop = $(event.currentTarget);
    $loop.addClass('outline');
    this.activeLoop = _.findWhere(this.loops, {cid: $loop.data('cid')});
    return this;
  },

  play: function() {
    for (var i=0; i < this.loops.length; i++)
      this.loops[i].play();
  },

  render: function() {
    this.$el.html(this.template({
      samples: _.keys(audioManager.samples)
    }));
    for (var i=0; i < this.loops.length; i++) {
      var view = new LoopView({model: this.loops[i]});
      view.render().$el.appendTo($('.loops', this.el));
      view.$el.attr('data-cid', this.loops[i].cid);
    }
    return this;
  }

});

module.exports = Sequencer;
