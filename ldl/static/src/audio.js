var http = require('http');

function decode(context, buffer) {
  return new Promise(function(resolve, reject) {
    context.decodeAudioData(
      buffer,
      function(decoded) {
        if (!decoded)
          reject('Decoding error:', url);
        resolve(decoded);
      },
      function(error) {
        reject('decodeAudioData error:', error)
      }
    );
  });
}

function loadBuffer(context, url) {
  return http.get(url, {responseType: 'arraybuffer'}).then(
    function(buffer) {
      return decode(context, buffer);
    },
    function(error) {
      console.error('http.get error:', error);
    }
  );
}

module.exports = {
  decode: decode,
  loadBuffer: loadBuffer
};
