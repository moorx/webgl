var gl = null;

function initGLContext(canvas) {
  var context = null;
  var names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
  
  for (var i = 0; i < names.length; i++) {
    try {
      context = canvas.getContext(names[i]);
    } catch (e) {}
    if (context) {
      break;
    }
  }

  return context;
}

function Graphics(id) {
  var canvas = document.getElementById(id);
  gl = initGLContext(canvas);
}
