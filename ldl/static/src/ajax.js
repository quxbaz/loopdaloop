module.exports = {
  get: function(url, opts) {
    if (typeof options == 'undefined')
      var opts = {};
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    if (opts.hasOwnProperty('responseType'))
      request.responseType = opts.responseType;
    var promise = new Promise(function(resolve, reject) {
      request.onload = function() {
        resolve(request.response);
      };
      request.onerror = console.error.bind(console, 'GET error:', request.response);
    });
    request.send();
    return promise;
  }
};
