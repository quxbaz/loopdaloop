var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var hb = require('handlebars');
var Array2d = require('arr2d');
var loopy = require('./loopy');

var Sequencer = Backbone.View.extend({

  className: 'sequencer',
  template: hb.compile($('#sequencer-template').html()),

  events: {
    'click .control-play' : 'play',
    'click .blip-btn'     : 'addBlip',
    'click .grid td'      : 'createLoop',
    'select-loop'         : 'selectLoop'
  },

  initialize: function(opts) {
    var opts = opts || {};
    this.cellWidth = opts.width;
    this.cellHeight = opts.height;
    this.grid = new Array2d(12, 24);
  },

  getGridPos: function(el) {
    return [
      parseInt($(el).attr('data-pos-x')),
      parseInt($(el).attr('data-pos-y'))
    ];
  },

  // Selects a dom grid element by it's coordinate position.
  $getTd: function(pos) {
    return $('.grid td[data-pos-x=' + pos[0] + '][data-pos-y=' + pos[1] + ']', this.el);
  },

  play: function() {
    this.grid.iter(function(val) {
      try {
        val.play();
      } catch (error) {}
    });
  },

  addBlip: function(event) {
    if (!this.selectedLoop)
      return;
    var sampleId = $(event.currentTarget).data('sample-id');
    this.selectedLoop.add(sampleId);
    this.render();
    return this;
  },

  createLoop: function(event) {
    var td = event.currentTarget;
    var pos = this.getGridPos(td);
    if (this.grid.get(pos) != undefined)
      return;
    var loop = new loopy.Loop({repeat: false});
    this.grid.set(pos, loop);
    this.selectLoop({}, loop);
    this.render();
  },

  selectLoop: function(event, loop) {
    this.selectedLoop = loop;
  },

  render: function() {
    this.$el.html(this.template({
      grid: this.grid,
      sampleIds: app.am.sampleIds,
      loop: this.testLoop
    }));
    $('.grid tr', this.el).each(function(y) {
      $('td', this).each(function(x) {
        $(this).attr({
          'data-pos-x': x,
          'data-pos-y': y
        });
      });
    });
    this.grid.iter(function(val, pos) {
      if (typeof val != 'object')
        return;
      var view = new loopy.LoopView(val);
      view.render().$el.appendTo(this.$getTd(pos));
    }.bind(this));
    return this;
  }

});

module.exports = Sequencer;
