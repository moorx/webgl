var engine = null;

function main(id) {
  engine = new Engine();
  engine.clock = new Clock();
  var graphics = new Graphics(id);
  engine.renderer = new Renderer(graphics);
  engine.scene = new Scene();
  engine.clock = new Clock();

  engine.update = function() {
    engine.clock.update();
    engine.renderer.update();
  };

  engine.start();
}
