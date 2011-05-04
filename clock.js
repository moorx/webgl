function Clock() {
  this.start = Date.now();
  this.last = Date.now();
  this.delta = Date.now() - this.last;
  this.time = Date.now();
  this.frame = 0;

  this.update = function() {
    var now = Date.now();
    this.delta = now - this.last;
    this.time = now - this.start;
    this.last = now;
    this.frame++;
  };
}
