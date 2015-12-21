var _ = require('underscore');

function Blip(sampleId, opts) {
  /*
    A single sound.
  */
  this.am = app.am;
  this.context = this.am.context;
  this.sampleId = sampleId;
  var defaults = {
    duration: 200,
    offset: 0,
    gain: 1,
    mute: false
  };
  _.extend(this, defaults, opts);
  if (this.sampleId == '')
    this.mute = true;
}

Blip.prototype.play = function() {
  if (this.mute)
    return this;
  var source = this.context.createBufferSource();
  source.buffer = this.am.getSampleBuffer(this.sampleId);
  var defaultGainValue = this.context.createGain().gain.value;
  if (this.gain != defaultGainValue) {
    var gainNode = this.context.createGain();
    source.connect(gainNode);
    gainNode.connect(this.context.destination);
    gainNode.gain.value = this.gain;
  }
  source.connect(this.context.destination);
  source.start(this.context.currentTime + this.offset / 1000);
  return this;
};

module.exports = Blip;
