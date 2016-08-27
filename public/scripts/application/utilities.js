// Utilities

void function(){

  var ONE_BYTE = 256;
  var TWO_BYTES = 65536;
  var THREE_BYTES = 16777216;
  var FOUR_BYTES = 4294967296;

  // Check application availability

  if (typeof application === "undefined") {
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
    var p = new application.png(width, height, 256);
    for (var i = 0; i < width; i++) {
    	for (var j = 0; j < height; j++) {
    		p.buffer[p.index(i, j)] = p.color(data[0], data[1], data[2], data[3]);
    	}
    }
    return 'data:image/png;base64,' + p.getBase64();

    // This produces lossy results due to canvas premultiplication!

    // var canvas = document.createElement("canvas");
    // canvas.width = width;
    // canvas.height = height;
    // var context = canvas.getContext("2d");
    // var palette = context.getImageData(0, 0, width, height);
    // palette.data.set(new Uint8Array(data));
    // context.putImageData(palette, 0, 0);
    // return canvas.toDataURL();
  };

  function _int32_to_rgba(int){
    var baked = [parseInt(int / THREE_BYTES), parseInt(int / TWO_BYTES), parseInt(int / ONE_BYTE)];
    return [baked[0], baked[1] - baked[0] * ONE_BYTE, baked[2] - baked[1] * ONE_BYTE, int - baked[2] * ONE_BYTE];
  };

  function _rgba_to_int32(rgba){
    return rgba[0] * THREE_BYTES + rgba[1] * TWO_BYTES + rgba[2] * ONE_BYTE + rgba[3];
  };

  function _get_random_int32(){
    return Math.floor(Math.random() * (FOUR_BYTES + 1));
  };

  var utilities = {

    // Methods

    measure: _measure,
    get_data_url: _get_data_url,
    int32_to_rgba: _int32_to_rgba,
    rgba_to_int32: _rgba_to_int32,
    get_random_int32: _get_random_int32
  };

  application.utilities = utilities;

}();
