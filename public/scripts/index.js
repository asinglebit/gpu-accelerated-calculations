void function(){

  // Check application availability

  if (typeof application == "undefined") {
    console.log("index.js : No 'application' found! Be sure to load it up first!");
    return;
  };

  // Bootstrap

  document.addEventListener("DOMContentLoaded", function(event) {
    application.bootstrap();

    var data = [];
    for (var i = 0; i < 1000; i++) {
      for (var j = 0; j < 1000; j++) {
        var r = parseInt(Math.floor(Math.random() * (255 + 1)));
        var g = parseInt(Math.floor(Math.random() * (255 + 1)));
        var b = parseInt(Math.floor(Math.random() * (255 + 1)));
        var a = parseInt(Math.floor(Math.random() * (255 + 1)));
        data.push(r, g, b, a);
      }
    }

    application.utilities.measure(function(){      
      console.log(application.utilities.get_data_url(data, 1000, 1000));
    });
  });
}();
