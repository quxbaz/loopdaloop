var audioManager = {

  preload: function() {
    this.srcs = {
      'snare' : new Audio('/static/audio/snare.mp3'),
      'hihat' : new Audio('/static/audio/hihat.mp3'),
      'kick'  : new Audio('/static/audio/kick.mp3'),
      'clap'  : new Audio('/static/audio/clap.mp3')
    };
  },

  init: function() {
    this.preload();
  },

  clone: function(src) {
    return this.srcs[src].cloneNode();
  }

};

module.exports = audioManager;
