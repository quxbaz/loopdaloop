var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var hb = require('handlebars');
var loopy = require('./loopy');

var Channel = Backbone.View.extend({

  className: 'channel',
  template: hb.compile($('#channel-template').html),

  initialize: function() {
    this.loop = new loopy.Loop({muted: true, repeat: false});
  },

  play: function() {
    this.loop.play();
  },

  render: function() {
    this.$el.html(this.template(this.loop));
    return this;
  }

});

module.exports = Channel;
