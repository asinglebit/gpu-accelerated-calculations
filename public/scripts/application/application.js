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

    if (typeof application.png === "undefined") {
      console.log("application.js : No 'png' module found! Be sure to load it up first!");
      return;
    };

    if (typeof application.renderer === "undefined") {
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

    var int32 = application.utilities.get_random_int32();

    console.log("Generated value");
    console.log(int32);

    var rgba = application.utilities.int32_to_rgba(int32);
    console.log("Generated color");
    console.log(rgba);

    // Pack data

    var packed_data = [];
    for (var i = 0; i < 1; i++) {
      for (var j = 0; j < 1; j++) {
        Array.prototype.push.apply(packed_data, rgba);
      }
    }

    // Convert to base64 data uri

    application.data = application.utilities.get_data_url(packed_data, 1, 1);

    // Initialize rendering module

    application.renderer.initialize(1, 1);

    // Render

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
