// Utilities

void function(){

  'use strict';

  // Check application availability

  if (typeof application == "undefined") {
    console.log("utilities.js : No 'application' module found! Be sure to load it up first!");
    return;
  };

  function _measure(callback) {
    var start = new Date().getTime();
    callback();
    var elapsed = new Date().getTime() - start;
    console.log('Time elapsed: ' + elapsed);
  };

  function _get_data_url(data, width, height){
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext("2d");
    var palette = context.getImageData(0, 0, width, height);
    palette.data.set(new Uint8ClampedArray(data));
    context.putImageData(palette, 0, 0);
    return canvas.toDataURL();
  };

  var utilities = {

    // Methods

    measure : _measure,
    get_data_url : _get_data_url
  };

  application.utilities = utilities;

}();
