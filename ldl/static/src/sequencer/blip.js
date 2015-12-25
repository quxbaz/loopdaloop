var _ = require('underscore');

function Blip(opts) {
  this.am = app.am;
  this.context = this.am.context;
  var defaults = {
    sampleName   : '',
    mute         : false,
    duration     : 200,
    offset       : 0,
    gain         : 1,
    playbackRate : 1
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

  var source = this.context.createBufferSource();
  source.buffer = this.am.getSampleBuffer(this.sampleName);
  source.playbackRate.value = this.playbackRate;
  var defaultGainValue = this.context.createGain().gain.value;
  if (this.gain != defaultGainValue) {
    var gainNode = this.context.createGain();
    source.connect(gainNode);
    gainNode.connect(this.context.destination);
    gainNode.gain.value = this.gain;
  }
  source.connect(this.context.destination);
  source.start(this.context.currentTime + this.offset / 1000);

  var duration = this.duration;
  // Returns a promise that resolves when the blip is done playing.
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(this);
    }, duration);
  });

};

module.exports = Blip;
