/*
  audiomanager.js
  This is a singleton class. Call init to load audio samples.
*/

var audioManager = {

  preload: function() {
    this.samples = {
      'snare' : new Audio('/static/samples/snare.mp3'),
      'hihat' : new Audio('/static/samples/hihat.mp3'),
      'kick'  : new Audio('/static/samples/kick.mp3'),
      'clap'  : new Audio('/static/samples/clap.mp3')
    };
  },

  init: function() {
    this.preload();
  },

  clone: function(sample) {
    return this.samples[sample].cloneNode();
  }

};

module.exports = audioManager;
