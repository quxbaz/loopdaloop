var H = require('handlebars');

function setup() {
  H.registerHelper('times', function(n, options) {
    var str = '';
    var data = options.data ? H.createFrame(options.data) : {};
    for (var i=0; i < n; i++) {
      data.index = i;
      str += options.fn(this, {data: data});
    }
    return str;
  });
};

module.exports = {
  setup: setup
};
