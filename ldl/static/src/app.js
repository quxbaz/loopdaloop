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
  this.sequencer.render().$el.appendTo('#content');
  return this;
};

module.exports = App;
