/*
  Loop class. Plays a sequence of blips.
*/

var _ = require('underscore');
var Blip = require('./blip');

function Loop(opts) {
  var defaults = {
    sampleName: ''
  };
  _.extend(this, defaults, opts);
  this.blips = [];
  _.times(16, this.addBlip.bind(this));
}

var fn = Loop.prototype;

fn.addBlip = function() {
  this.blips.push(new Blip({
    sampleName: this.sampleName,
    mute: true
  }));
  return _.last(this.blips);
};

// fn.play = function() {
//   if (!this.blips.length)
//     return;
//   var blips = this.blips;
//   var repeat = this.repeat;
//   (function play(blip, i) {
//     if (i < blips.length)
//       blip.play().then(function() {
//         play(blips[i], i + 1);
//       });
//     else if (repeat)
//       play(blips[0], 0);
//   })(blips[0], 0);
// };

fn.playBlip = function(i) {
  if (i < this.blips.length)
    this.blips[i].play();
};

module.exports = Loop;
