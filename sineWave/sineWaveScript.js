let angle = 0;
let w;
let cols;
let rows;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  w = 40;
  cols = floor(width / w) - 1;
  rows = floor(height / w) - 1;
}

function draw() {
  background(255);
  rotateX(PI / 3);
  rotateY(QUARTER_PI);

  translate(-width / 2, -height / 2);

  for (let j = 0; j < rows; j++) {
    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i < cols; i++) {
      const x = i * w;
      const y = j * w;
      const z1 = sin(angle + dist(x, y, mouseX, mouseY) * 0.01) * 50;
      const z2 = sin(angle + dist(x, y + w, mouseX, mouseY) * 0.01) * 50;

      fill(map(z1, -50, 50, 0, 255), 0, map(z1, -50, 50, 255, 0));
      vertex(x, y, z1);
      vertex(x, y + w, z2);
    }
    endShape();
  }

  angle -= 0.1;
}

function mousePressed() {
  angle = random(-TWO_PI, TWO_PI);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
