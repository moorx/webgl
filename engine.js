function initUpdateFunction() {
  window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback, element) {
      window.setTimeout(callback, 16);
    };
}

function Engine() {
  initUpdateFunction();
  var self = this;

  this.start = function() {
    window.requestAnimFrame(self.requestUpdate);
  };

  this.requestUpdate = function() {
    window.requestAnimFrame(self.requestUpdate);
    self.update();
  };
}
