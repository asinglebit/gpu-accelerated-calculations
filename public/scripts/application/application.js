// Framework

var application = application || (function () {

  'use strict';

  // Private space

  var _initialize = function(){

    // Setup polyfills

    _initialize_request_animation_frame();

  };

  var _initialize_request_animation_frame = function(){
    if (!window.requestAnimationFrame){
      window.requestAnimationFrame = (function(){
        return window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback, element){
          window.setTimeout(callback, 1000 / 60);
        };
      })();
    };
  }

  // Public space

  return {

    // Initialize the application

    initialize: function (canvas) {
      _initialize(canvas);
    }

  };

})();
