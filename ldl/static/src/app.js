var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Array2d = require('arr2d');

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

function Loop() {
  /*
    Loop class. Plays a looped sequence of sounds.
  */
  this.blips = [];
};

Loop.prototype.add = function(opts) {
  var blip = new Blip(opts);
  this.blips.push(blip);
  return this;
};

Loop.prototype.play = function() {
  // Plays the sequence.
  var durationMap = _.pluck(_.initial(this.blips), 'duration');
  if (durationMap.length > 1) {
    for (var i=1; i < durationMap.length; i++)
      durationMap[i] += durationMap[i-1];
  }
  for (var i=0; i < this.blips.length; i++) {
    if (i == 0)
      this.blips[i].play();
    else {
      (function(blip) {
        setTimeout(function() {
          blip.play();
        }, durationMap[i-1]);
      })(this.blips[i]);
    }
  }
};

Loop.prototype.schedulePlay = function(clock) {
  // Plays the sound if it's the right time.
};

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

var Sequencer = Backbone.View.extend({

  initialize: function(opts) {
    var opts = opts || {};
    this.cellWidth = opts.width;
    this.cellHeight = opts.height;
    this.grid = new Array2d(8, 10);
  },

  render: function() {

  }

});

$(function() {
  audioManager.init();
  var seq = new Sequencer();
  var loop = new Loop();
  var duration = 300;
  loop.add({src: 'kick', duration: duration});
  loop.add({src: 'snare', duration: duration});
  loop.add({src: 'hihat', duration: duration});
  loop.add({src: 'snare', duration: duration});
  _.delay(loop.play.bind(loop), 500);
});
