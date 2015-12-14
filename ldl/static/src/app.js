var _ = require('underscore');
var Sequencer = require('./audio/sequencer');
var audioManager = require('./audio/audiomanager');
var Loop = require('./audio/loop');

module.exports = {
  init: function() {
    // TODO: Return a promise that completes when all resources have
    // loaded.
    audioManager.init();
    return this;
  },
  run: function() {
    var seq = new Sequencer();
    var loop = new Loop({repeat: false});
    var duration = 300;
    loop.add({src: 'kick', duration: duration});
    loop.add({src: 'snare', duration: duration});
    loop.add({src: 'hihat', duration: duration});
    loop.add({src: 'snare', duration: duration});
    _.delay(loop.play.bind(loop), 500);
    return this;
  }
};
