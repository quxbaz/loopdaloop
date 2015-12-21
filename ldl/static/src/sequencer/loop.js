/*
  Loop class and view. Plays a looped sequence of sounds.
*/

var _ = require('underscore');
var Blip = require('./blip');

function Loop(opts) {
  var defaults = {
    repeat: false
  };
  _.extend(this, defaults, opts);
  this.blips = [];
}

var fn = Loop.prototype;

fn.add = function(blip) {
  this.blips.push(blip);
  return this;
};

// <TODO> Review and tidy up this function
fn.play = function() {
  var durations = _.pluck(this.blips, 'duration');
  var totalDuration = _.reduce(durations, function(a, b) {return a + b;});
  var durationMap = _.initial(durations);
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
  if (this.repeat)
    setTimeout(this.play.bind(this), totalDuration);
};

module.exports = Loop;
