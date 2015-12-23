var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Timer = require('timer').Timer;
var util = require('util');
var Channel = require('./channel');

var Sequencer = Backbone.View.extend({

  className: 'sequencer',
  template: util.makeTemplate('sequencer'),

  events: {
    'click .pause'         : 'actionPause',
    'click .play'          : 'actionPlay',
    'click .sample-option' : 'actionAddChannel'
  },

  initialize: function() {
    this.channels = [];
    this.playing = false;
    this.currentBeat = 0;
    this.beatDuration = 200;
    this.addChannel();

    this.testInitChannels();

    this.timer = new Timer({tickInterval: this.beatDuration})
      .on('tick', function() {
        if (this.playing)
          this.playBeat();
      }.bind(this)).start();
  },

  addChannel: function(opts) {
    if (typeof opts == 'undefined')
      opts = {};
    this.channels.push(new Channel(opts));
    return _.last(this.channels);
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

  actionPause: function(event) {
    event.preventDefault();
    this.playing = false;
    $(event.currentTarget).addClass('hide');
    $('.play').removeClass('hide');
  },

  actionPlay: function(event) {
    event.preventDefault();
    this.playing = true;
    $(event.currentTarget).addClass('hide');
    $('.pause').removeClass('hide');
  },

  actionAddChannel: function(event) {
    event.preventDefault();
    this.addChannel({
      sampleId: $(event.currentTarget).data('sample')
    }).render()
      .$el.insertAfter($('.channel', this.el).last());
  },

  playBeat: function() {
    var that = this;
    var beat = this.currentBeat;
    $('.cell').removeClass('playing');
    $('.cells').each(function(i) {
      that.channels[i].loop.playBlip(beat);
      $('.cell', this).eq(beat).addClass('playing');
    });
    this.currentBeat = (beat + 1) % 16;
  },

  templateData: function() {
    return {
      sampleIds: app.am.sampleIds,
      channels: this.channels
    };
  }

});

module.exports = Sequencer;
