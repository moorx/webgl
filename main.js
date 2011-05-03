var engine = null;

function main(id) {
  engine = new Engine();
  var graphics = new Graphics(id);
  engine.renderer = new Renderer(graphics);

  engine.update = function() {
    engine.renderer.update();
  };

  engine.start();
}
