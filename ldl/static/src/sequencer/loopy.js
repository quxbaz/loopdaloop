/*
  Loop class and view. Plays a looped sequence of sounds.
*/

var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var hb = require('handlebars');
var Blip = require('./blip');

function Loop(opts) {
  var defaults = {
    repeat: true
  };
  _.extend(this, defaults, opts);
  this.blips = [];
}

var fn = Loop.prototype;

fn.add = function(sampleId, opts) {
  var blip = new Blip(sampleId, opts);
  this.blips.push(blip);
  return this;
};

// TODO: Tidy up this function
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

// var LoopView = Backbone.View.extend({
//   className: 'loop',
//   template: hb.compile($('#loop-template').html()),
//   events: {
//     'click': 'onClick'
//   },
//   initialize: function(loop) {
//     this.loop = loop;
//   },
//   onClick: function(event) {
//     this.$el.trigger('select-loop', this.loop);
//   },
//   render: function() {
//     this.$el.html(this.template(this.loop));
//     return this;
//   }
// });

module.exports = {
  Loop: Loop
  // LoopView: LoopView,
}
