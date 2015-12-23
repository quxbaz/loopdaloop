/*
  audiomanager.js
  This is intended to be used as a singleton class. Call init to load
  audio samples.
*/

var _ = require('underscore');
var webaudio = require('../webaudio');

var SAMPLE_NAMES = ['snare', 'hihat', 'kick', 'clap'];

function AudioManager(context) {
  if (typeof context == 'undefined')
    throw Error('AudioManager must be instantiated with an AudioContext object.')
  this.context = context;
  this.sampleNames = _.clone(SAMPLE_NAMES);
  this.samples = {};
}

var fn = AudioManager.prototype;

fn.init = function() {
  /*
    Initializes the object and returns a promise when everything is loaded.
  */
  return this.loadSamples(this.sampleNames, '/static/samples/');
};

fn.loadSamples = function(sampleNames, url, filetype) {
  /*
    You should memoize this if you ever use it more than once.
  */
  if (typeof filetype == 'undefined')
    var filetype = '.mp3';
  return Promise.all(_.map(sampleNames, function(id) {
    return webaudio.loadBuffer(this.context, url + id + filetype);
  }, this)).then(function(buffers) {
    for (var i=0; i < buffers.length; i++)
      this.samples[sampleNames[i]] = buffers[i];
    return this.samples;
  }.bind(this));
};

fn.getSampleBuffer = function(sampleName) {
  if (SAMPLE_NAMES.indexOf(sampleName) == -1)
    throw new Error('Sample "' + sampleName + '" is not a valid sample.');
  return this.samples[sampleName];
};

module.exports = AudioManager;
