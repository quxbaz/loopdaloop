var audioManager = require('./audio/audiomanager');
var Sequencer = require('./audio/sequencer');
var Loop = require('./audio/loop');

$(function() {
  audioManager.init();
  var seq = new Sequencer();
  var loop = new Loop({repeat: false});
  var duration = 300;
  loop.add({src: 'kick', duration: duration});
  loop.add({src: 'snare', duration: duration});
  loop.add({src: 'hihat', duration: duration});
  loop.add({src: 'snare', duration: duration});
  _.delay(loop.play.bind(loop), 500);
});
