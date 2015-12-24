var $ = require('jquery');
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

// <todo>
// function requireArg(object, propStr, errorMessage) {}

module.exports = {
  fmt: fmt,
  makeTemplate: makeTemplate
};
