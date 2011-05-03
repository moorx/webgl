function Clock() {
  var self = this;
  self.start = Date.now();
  self.last = Date.now();
  self.delta = Date.now() - self.last;
  self.time = Date.now();
  self.frame = 0;

  this.update = function() {
    var now = Date.now();
    self.delta = now - self.last;
    self.time = now - self.start;
    self.last = now;
    self.frame++;
  };
}
