/*
  Loop class. Plays a looped sequence of sounds.
*/

var _ = require('underscore');
var Blip = require('./blip');

function Loop(sampleId, opts) {
  var defaults = {
    // repeat: false
  };
  _.extend(this, defaults, opts);
  this.sampleId = sampleId;
  this.blips = [];
}

var fn = Loop.prototype;

fn.add = function(blip) {
  this.blips.push(blip);
  return this;
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
