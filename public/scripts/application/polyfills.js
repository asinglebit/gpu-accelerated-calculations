// Polyfills

void function(){

  'use strict';

  // Check application availability

  if (typeof application === "undefined") {
    console.log("polyfills.js : No 'application' module found! Be sure to load it up first!");
    return;
  };

  function _initialize_request_animation_frame() {
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = (function() {
        return window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback, element){
          window.setTimeout(callback, 1000 / 60);
        };
      })();
    };
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
  }

  var polyfills = {

    // Methods

    setup : _setup
  };

  application.polyfills = polyfills;

}();
