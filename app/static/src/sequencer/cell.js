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
    'mousedown' : 'actionToggleMute',
    'wheel'     : 'routeWheelAction'
  },

  initialize: function(opts) {
    util.requireProps(opts, ['blip']);
    this.blip = opts.blip;
    this.adjustMode = 'pitch';
  },

  templateData: function() {
    return this.blip;
  },

  // <TODO>
  changeMode: function(mode) {
    var modes = ['pitch', 'gain'];
    if (modes.indexOf(mode) == -1)
      throw Error('@' + mode + ' is not a valid mode.');
    this.adjustMode = mode;
  },

  actionToggleMute: function(event) {
    this.blip.toggleMute();
    this.render();
    this.$el.toggleClass('muted', this.blip.muted);
  },

  routeWheelAction: function(event) {
    event.preventDefault();
    if (this.blip.mute)
      return;
    var direction = event.originalEvent.deltaY > 0 ? 'down' : 'up';
    if (this.adjustMode == 'pitch')
      this.adjustPitch(direction);
    else if (this.adjustMode == 'gain')
      this.adjustGain(direction);
  },

  adjustPitch: function(direction) {
    if (direction == 'up')
      this.blip.playbackRate += 0.1;
    else if (direction == 'down')
      this.blip.playbackRate -= 0.1;
    this.blip.playbackRate = util.constrain(this.blip.playbackRate, [0.05, 4]);
    this.render();
  },

  renderPitchScale: function() {
    var min = 0.05, max = 4.0;
    var offset = (this.blip.getPitchScale() * 0.8 + 0.07) * 100;
    $('.pitch-scale', this.el).css('bottom', offset + '%');
  },

  render: function() {
    var ret = Backbone.View.prototype.render.apply(this, arguments);
    this.renderPitchScale();
    var pitchLabel = Math.floor(this.blip.getPitchScale() * 100);
    if (parseInt(pitchLabel) != 24)
      this.$('.pitch-label').text(pitchLabel);
    return ret;
  }

});

module.exports = Cell;
