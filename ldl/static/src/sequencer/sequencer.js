var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var util = require('util');
var Channel = require('./channel');

var Sequencer = Backbone.View.extend({

  className: 'sequencer',
  template: util.makeTemplate('sequencer'),

  events: {
    'click .pause'       : 'actionPausePlaying',
    'click .resume'      : 'actionResumePlaying',
    'click .add-channel' : 'actionAddChannel'
  },

  initialize: function() {
    this.channels = [];
    this.addChannels(1);
    this.currentBeat = 0;
    this.beatDuration = 200;
    this.testInitChannels();
    _.delay(this.play.bind(this), 100);
  },

  testInitChannels: function() {
    var Blip = require('./blip');
    var samples = [
      [
        'kick', 'clap', 'snare', 'clap',
        'kick', 'clap', 'snare', 'clap',
        'kick', 'clap', 'snare', 'clap',
        'kick', 'hihat', 'hihat', 'snare'
      ],
      // [
      //   'kick' , '', 'kick', 'kick',
      //   ''     , '', ''    , ''    ,
      //   'kick' , '', 'kick', ''    ,
      //   ''     , '', ''    , ''
      // ],
      // [
      //   '', '', 'hihat', 'hihat',
      //   '', '', '', '',
      //   '', '', '', '',
      //   'kick', 'clap', 'kick', 'clap'
      // ]
    ];
    for (var i=0; i < samples.length; i++) {
      for (var n=0; n < 16; n++) {
        // this.channels[i].loop.add(new Blip(samples[i][n % 4], {duration: this.beatDuration}));
        this.channels[i].loop.add(new Blip(samples[i][n], {duration: this.beatDuration}));
      }
    }
  },

  addChannels: function(n) {
    for (var i=0; i < n; i++)
      this.channels.push(new Channel());
  },

  actionPausePlaying: function(event) {
    event.preventDefault();
    clearInterval(this.testPlayId);
    $(event.currentTarget).addClass('hide');
    $('.resume').removeClass('hide');
  },

  actionResumePlaying: function(event) {
    event.preventDefault();
    this.play();
    $(event.currentTarget).addClass('hide');
    $('.pause').removeClass('hide');
  },

  actionAddChannel: function(event) {
    this.addChannels(1);
    this.render();
  },

  play: function() {
    var that = this;
    this.testPlayId = setInterval(function() {
      var beat = that.currentBeat;
      $('.cell').removeClass('playing');
      $('.cells').each(function(i) {
        that.channels[i].loop.playBlip(beat);
        $('.cell', this).eq(beat).addClass('playing');
      });
      that.currentBeat = (beat + 1) % 16;
    }, this.beatDuration);
  },

  templateData: function() {
    return {
      channels: this.channels
    };
  }

});

module.exports = Sequencer;
