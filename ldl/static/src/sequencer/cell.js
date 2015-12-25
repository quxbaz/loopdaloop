/*
 View for blip cells.
*/

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var util = require('util');

var Cell = Backbone.View.extend({

  className: 'cell muted',
  template: util.makeTemplate('cell'),

  events: {
    'click' : 'actionToggleMute',
    'wheel' : 'actionAdjustPitch'
  },

  initialize: function(opts) {
    util.requireProps(opts, ['blip']);
    this.blip = opts.blip;
  },

  templateData: function() {
    return this.blip;
  },

  actionToggleMute: function(event) {
    this.blip.toggleMute();
    this.render();
    this.$el.toggleClass('muted', this.blip.muted);
  },

  actionAdjustPitch: function(event) {
    if (this.blip.mute)
      return;
    var direction = event.originalEvent.deltaY > 0 ? 'down' : 'up';
    if (direction == 'up')
      this.blip.playbackRate += 0.1;
    else if (direction == 'down')
      this.blip.playbackRate -= 0.1;
    this.blip.playbackRate = util.constrain(this.blip.playbackRate, [0.05, 4]);
    this.renderPitchScale();
  },

  renderPitchScale: function() {
    var min = 0.05, max = 4.0;
    var scale = (this.blip.playbackRate - min) / (max - min);
    var offset = (scale * 0.8 + 0.07) * 100;
    $('.pitch-scale', this.el).css('bottom', offset + '%');
  },

  render: function() {
    var ret = Backbone.View.prototype.render.apply(this, arguments);
    this.renderPitchScale();
    return ret;
  }

});

module.exports = Cell;
