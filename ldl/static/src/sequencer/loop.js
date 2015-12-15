var _ = require('underscore');
var Backbone = require('backbone');
var Blip = require('./blip');

/*
  Loop class. Plays a looped sequence of sounds.
*/

var Loop = Backbone.Model.extend({

  initialize: function() {
    var defaults = {
      repeat: true
    };
    var opts = _.extend(defaults, opts) || defaults;
    this.blips = [];
    this.repeat = opts.repeat;
  },

  add: function(opts) {
    var blip = new Blip(opts);
    this.blips.push(blip);
    return this;
  },

  play: function() {
    // Plays the sequence.
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
  },

  schedulePlay: function(clock) {
    // Plays the sound if it's the right time.
  }

});

module.exports = Loop;
