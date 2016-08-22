// Framework

var application = application || (function () {

  'use strict';

  // Private space

  var _bootstrap = function(){

    if (typeof application.polyfills === 'undefined') {
      console.log('application.js : No "polyfills" module found! Be sure to load it up first!');
      return;
    };

    if (typeof application.utilities === 'undefined') {
      console.log('application.js : No "utilities" module found! Be sure to load it up first!');
      return;
    };

    // Setup polyfills

    application.polyfills.setup();

  };

  // Public space

  return {

    // Initialize the application

    bootstrap: function (canvas) {
      _bootstrap(canvas);
    }

  };

})();
