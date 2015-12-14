// Styles
require('./lib/normalize-css/normalize.css')
require('./less/style.less');

// Scripts
var app = require('./src/app.js');

document.addEventListener('DOMContentLoaded', function() {
  app.init().run();
});
