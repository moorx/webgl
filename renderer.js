function Renderer(graphics) {
  var self = this;
  self.graphics = graphics;

  this.update = function() {
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
  };
}
