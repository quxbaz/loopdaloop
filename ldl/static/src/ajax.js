module.exports = {
  GET: function GET(url, responseType) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    if (typeof responseType !=  'undefined')
      request.responseType = responseType;
    request.send();
    return new Promise(function(resolve, reject) {
      request.onload = function() {
        resolve(request.response);
      };
      request.onerror = function() {
        console.error('GET error:', request.response);
      };
    });
  }
};
