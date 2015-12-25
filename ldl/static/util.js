var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');

function fmt(format) {
  var args = Array.prototype.slice.call(arguments, 1);
  return format.replace(/{(\d+)}/g, function(match, number) {
    return typeof args[number] != 'undefined' ? args[number] : match;
  });
}

function makeTemplate(name) {
  var id = '#' + name + '-template';
  var $template = $(id);
  if ($template.length == 0)
    throw new Error('Template ' + id + 'not found.');
  return Handlebars.compile($template.html());
}

function requireProps(object, props) {
  _.each(props, function(prop) {
    if (!_.has(object, prop))
      throw new Error('Property @' + prop + ' is required.');
  });
}

function constrain(val, minmax) {
  return Math.min(Math.max(val, minmax[0]), minmax[1]);
}

module.exports = {
  fmt          : fmt,
  makeTemplate : makeTemplate,
  requireProps : requireProps,
  constrain    : constrain
};
