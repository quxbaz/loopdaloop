var Backbone = require('backbone');
var util = require('util');

var ControlPanel = Backbone.View.extend({

  className: 'control-panel',
  template: util.makeTemplate('control-panel'),

  initialize: function(opts) {
    util.requireProps(opts, ['channel']);
    this.channel = opts.channel;
  }

});

module.exports = ControlPanel;
