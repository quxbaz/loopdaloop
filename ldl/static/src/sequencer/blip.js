var _ = require('underscore');

function Blip(context, opts) {
  /*
    A single sound.
  */
  this.context = context;
  var defaults = {
    sample: 'hihat',
    duration: 200,
    volume: 1
  };
  _.extend(this, defaults, opts);
  this.audioNode.volume = this.volume;
}

Blip.prototype.play = function() {
  var source = context.createBufferSource();
  source.buffer = this.context.getSampleBuffer(this.sample);
  source.connect(context.destination);
  source.start();
  return this;
};

module.exports = Blip;
