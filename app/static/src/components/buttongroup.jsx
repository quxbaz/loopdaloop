var React = require('react');

var ButtonGroup = React.createClass({

  getInitialState: function() {
    return {
      activeButtonKey: -1
    };
  },

  handleClick: function(event, key) {
    this.setState({
      activeButtonKey: key
    });
    this.props.onClick(key);
  },

  render: function() {
    return (
      <span className="button-group">
        {this.props.buttonTexts.map(function(text, i) {
          var boundClick = this.handleClick.bind(this, i);
          var classes = 'button' + (this.state.activeButtonKey == i ? ' active': '');
          return (
            <button type="button" className={classes} key={i} onClick={boundClick}>
              {text}
            </button>
          );
        }.bind(this))}
      </span>
    );
  }

});

module.exports = ButtonGroup;
