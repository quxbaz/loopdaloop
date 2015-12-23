var _ = require('underscore');

function Blip(opts) {
  this.am = app.am;
  this.context = this.am.context;
  var defaults = {
    sampleName: '',
    duration: 200,
    offset: 0,
    gain: 1,
    mute: false
  };
  _.extend(this, defaults, opts);
}

var fn = Blip.prototype;

fn.isMute = function() {
  return this.mute || this.sampleName == '';
};

fn.toggleMute = function() {
  this.mute = !this.mute;
};

fn.play = function() {
  if (this.isMute())
    return this;

  var that = this;
  var source = this.context.createBufferSource();
  source.buffer = this.am.getSampleBuffer(this.sampleName);
  var defaultGainValue = this.context.createGain().gain.value;
  if (this.gain != defaultGainValue) {
    var gainNode = this.context.createGain();
    source.connect(gainNode);
    gainNode.connect(this.context.destination);
    gainNode.gain.value = this.gain;
  }
  source.connect(this.context.destination);
  source.start(this.context.currentTime + this.offset / 1000);

  // Returns a promise that resolves when the blip is done playing.
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(this);
    }, that.duration);
  });
};

module.exports = Blip;
