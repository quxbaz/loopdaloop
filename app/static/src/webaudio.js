var http = require('http');

function decode(context, buffer) {
  /*
    Async function that decodes an audio buffer.
  */
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
  /*
    Makes a server request to an audio file and decodes it.
  */
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
