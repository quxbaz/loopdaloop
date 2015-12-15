var _ = require('underscore');
var audioManager = require('./audiomanager');

function Blip(opts) {
  /*
    A single sound.
  */
  var defaults = {
    sample: 'hihat',
    duration: 200,
    volume: 1
  };
  _.extend(this, defaults, opts);
  this.audioNode = audioManager.clone(this.sample);
  this.audioNode.volume = this.volume;
}

Blip.prototype.play = function() {
  this.audioNode.play();
  return this;
};

module.exports = Blip;
