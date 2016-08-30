// Polyfills

void function(){

  'use strict';

  function _initialize_request_animation_frame() {
    if (!window.requestAnimationFrame) (function() {
      function requestAnimationFrame(callback) {
        var currentTime = now(), delay = Math.max(0, 16 - (currentTime - lastTime));
        lastTime = currentTime;
        return setTimeout(function () {
          lastTime = now();
          callback(lastTime - startTime);
        }, delay);
      };
      function cancelAnimationFrame(id) {
        clearTimeout(id);
      };
      var raf = 'RequestAnimationFrame', caf = 'CancelAnimationFrame', webkit = 'webkit', moz = 'moz', now = Date.now || function () {
        return new Date().getTime();
      }, startTime = now(), lastTime = startTime;
      window.requestAnimationFrame = window[moz + raf] || window[webkit + raf] || requestAnimationFrame;
      window.cancelAnimationFrame = window[moz + caf] || window[webkit + caf] || window[webkit + 'CancelRequestAnimationFrame'] || cancelAnimationFrame;
    })();
  };

  function _initialize_btoa() {
    window.btoa = window.btoa || function (input) {
      var str = '' + input;
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      for (
        var block, charCode, idx = 0, map = chars, output = '';
        str.charAt(idx | 0) || (map = '=', idx % 1);
        output += map.charAt(63 & block >> 8 - idx % 1 * 8)
      ) {
        charCode = str.charCodeAt(idx += 3/4);
        block = block << 8 | charCode;
      }
      return output;
    };
  };

  function _setup(){
    _initialize_request_animation_frame();
    _initialize_btoa();
  };

  var polyfills = {

    // Methods

    setup : _setup
  };

  application.polyfills = polyfills;

}();
