var _ = require('underscore');
var Sequencer = require('./sequencer/sequencer');
var AudioManager = require('./sequencer/audiomanager');

function App() {
  window.app = this;            // GLOBAL
  this.am = new AudioManager(new AudioContext());
  this.sequencer = new Sequencer();
}

var fn = App.prototype;

fn.load = function() {
  /*
    Loads resources; async.
  */
  return this.am.init();
};

fn.run = function() {
  this.render().sequencer.$el.appendTo('#content');
  return this;
};

fn.render = function() {
  this.sequencer.render();
  return this;
};

module.exports = App;
