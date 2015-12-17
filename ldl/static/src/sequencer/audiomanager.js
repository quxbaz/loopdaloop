/*
  audiomanager.js
  This is intended to be used as a singleton class. Call init to load
  audio samples.
*/

var _ = require('underscore');
var webaudio = require('../webaudio');

var sampleIds = ['snare', 'hihat', 'kick', 'clap'];

function AudioManager(context) {
  if (typeof context == 'undefined')
    throw Error('AudioManager must be instantiated with an AudioContext object.')
  this.context = context;
  this.samples = {};
}

var fn = AudioManager.prototype;

fn.init = function() {
  /*
    Initializes the object and returns a promise when everything is loaded.
  */
  return this.loadSamples(sampleIds, '/static/samples/');
};

fn.loadSamples = function(sampleIds, url, filetype) {
  if (typeof filetype == 'undefined')
    var filetype = '.mp3';
  return Promise.all(_.map(sampleIds, function(id) {
    return webaudio.loadBuffer(this.context, url + id + filetype);
  }, this)).then(function(buffers) {
    for (var i=0; i < buffers.length; i++)
      this.samples[sampleIds[i]] = buffers[i];
    return this.samples;
  }.bind(this));
};

fn.getSampleBuffer = function(sample) {
  return this.samples[sample];
};

module.exports = AudioManager;
