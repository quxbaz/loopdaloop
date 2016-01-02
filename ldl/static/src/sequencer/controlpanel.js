var Backbone = require('backbone');
var util = require('util');
var ButtonGroup = require('src/components/buttongroup');
var React = require('react');
var ReactDOM = require('react-dom');

var ControlPanel = Backbone.View.extend({

  className: 'control-panel',
  template: util.makeTemplate('control-panel'),

  events: {
    'click .close': 'actionClose'
  },

  initialize: function(opts) {
    util.requireProps(opts, ['channel']);
    this.channel = opts.channel;
  },

  actionClose: function(event) {
    event.preventDefault();
    this.$el.remove();
  },

  // <TODO>
  postRender: function(data) {

    Backbone.View.prototype.postRender.apply(this, arguments);

    // var clickHandler = function(key) {
    //   this.channel.cells.forEach(function(cell) {
    //     if (key == 0)
    //       cell.changeMode('pitch');
    //     else if (key == 1)
    //       cell.changeMode('gain');
    //   });
    // }.bind(this);

    // ReactDOM.render(
    //   <ButtonGroup buttonTexts={['Pitch', 'Gain']} onClick={clickHandler} />,
    //   this.$('.react-button-group')[0]
    // );

    return this;
  }

});

module.exports = ControlPanel;
