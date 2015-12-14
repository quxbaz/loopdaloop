var audioManager = require('./audiomanager');

function Blip(opts) {
  /*
    A single sound.
  */
  this.audio = audioManager.clone(opts.src);
  this.duration = opts.duration || 200;
}

Blip.prototype.play = function() {
  this.audio.play();
  return this;
};

module.exports = Blip;
