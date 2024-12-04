let img;
let canvas;

function preload() {
  img = loadImage('../images/SelfReal_6.jpg'); 
}

function setup() {
  const scaleFactor = 0.75;
  img.resize(img.width * scaleFactor, img.height * scaleFactor);

  canvas = createCanvas(img.width, img.height);
  centerCanvas();
  image(img, 0, 0);
}

function draw() {}

function mouseDragged() {
  stroke(0);
  strokeWeight(15);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed() {
  if (key === 's') {
    save('blackout-poetry.png');
  }
}

function centerCanvas() {
  const x = (windowWidth - width) / 2;
  const y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function windowResized() {
  centerCanvas();
}
