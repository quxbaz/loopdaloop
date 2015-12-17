var _ = require('underscore');

function Blip(audioMan, opts) {
  /*
    A single sound.
  */
  this.audioMan = audioMan;
  this.context = this.audioMan.context;
  var defaults = {
    sample: 'hihat',
    duration: 200,
    volume: 1
  };
  _.extend(this, defaults, opts);
  // this.audioNode.volume = this.volume;
}

Blip.prototype.play = function() {
  var source = this.context.createBufferSource();
  source.buffer = this.audioMan.getSampleBuffer(this.sample);
  source.connect(this.context.destination);
  source.start();
  return this;
};

module.exports = Blip;
