let img;
let canvas;

function preload() {
  img = loadImage('../images/SelfReal_6.jpg');
}

function setup() {
  canvas = createCanvas(img.width, img.height);
  centerCanvas();
  image(img, 0, 0);
}

function draw() {

}

function mouseDragged() {
  stroke(0);
  strokeWeight(5);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed() {
  if (key === 's') {
    save('blackout-poetry.png'); // Save the canvas as an image
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
