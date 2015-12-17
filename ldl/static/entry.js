// Styles
require('./lib/normalize-css/normalize.css')
require('./less/style.less');

// App scripts
var App = require('./src/app.js');

document.addEventListener('DOMContentLoaded', function() {
  var app = new App();
  app.load().then(function() {
    app.run();
  });
});
