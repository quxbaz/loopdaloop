var ajax = require('./ajax');

function loadBuffer(context, url) {
  return ajax.get(url, 'arraybuffer').then(function(audioData) {
    return new Promise(function(resolve, reject) {
      context.decodeAudioData(
        audioData,
        function(buffer) {
          if (!buffer)
            reject('Decoding error:', url);
          resolve(buffer);
        },
        function(error) {
          reject('decodeAudioData error:', error)
        }
      );
    });
  }, function(error) {
    console.error('ajax.get error:', error);
  });
}

module.exports = {
  loadBuffer: loadBuffer
};
