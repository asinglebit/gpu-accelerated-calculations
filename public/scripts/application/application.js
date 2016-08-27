// Framework

var application = application || (function () {

  'use strict';

  var _initialize = function(){

    // Check application

    if (typeof application.polyfills === 'undefined') {
      console.log('application.js : No "polyfills" module found! Be sure to load it up first!');
      return;
    };

    if (typeof application.utilities === 'undefined') {
      console.log('application.js : No "utilities" module found! Be sure to load it up first!');
      return;
    };

    if (typeof application.renderer == "undefined") {
      console.log("application.js : No 'renderer' module found! Be sure to load it up first!");
      return;
    };

    // Setup polyfills

    application.polyfills.setup();

    // Application entry point

    _main();
  };

  var _main = function(){

    // Initialize data

    var data = [];
    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 16; j++) {
        var r = parseInt(Math.floor(Math.random() * (255 + 1)));
        var g = parseInt(Math.floor(Math.random() * (255 + 1)));
        var b = parseInt(Math.floor(Math.random() * (255 + 1)));
        var a = parseInt(Math.floor(Math.random() * (255 + 1)));
        data.push(r, g, b, a);
      }
    }

    application.utilities.measure(function(){
      application.data = application.utilities.get_data_url(data, 16, 16);
    });

    // Initialize modules

    application.renderer.initialize(16, 16);

    // Initialize

    _tick();
  }

  var _tick = function tick(){

    // Actions

    application.renderer.tick();

    // Setup the next frame

    requestAnimationFrame(tick);
  }

  // Public space

  return {

    // Initialize the application

    initialize: _initialize

  };

})();
