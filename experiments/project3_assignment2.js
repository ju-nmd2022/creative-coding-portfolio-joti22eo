let particles = [];
const fieldSize = 50; // Size of each cell in the flow field
const cols = Math.ceil(window.innerWidth / fieldSize);
const rows = Math.ceil(window.innerHeight / fieldSize);
let flowField = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  generateFlowField();

  // Initialize particles
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function generateFlowField() {
  flowField = [];
  for (let x = 0; x < cols; x++) {
    flowField[x] = [];
    for (let y = 0; y < rows; y++) {
      let angle = random(TWO_PI); // Random direction for each cell
      flowField[x][y] = p5.Vector.fromAngle(angle);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.size = random(10, 30);
    this.color = color(random(255), random(255), random(255), random(100, 200));
  }

  update() {
    // Determine which cell the particle is in
    let x = Math.floor(this.position.x / fieldSize);
    let y = Math.floor(this.position.y / fieldSize);

    // Get the flow vector for that cell
    let flow =
      flowField[x] && flowField[x][y]
        ? flowField[x][y]
        : createVector(random(-1, 1), random(-1, 1));
    this.position.add(flow);

    // Wrap particles around the screen edges
    if (this.position.x > width) this.position.x = 0;
    if (this.position.x < 0) this.position.x = width;
    if (this.position.y > height) this.position.y = 0;
    if (this.position.y < 0) this.position.y = height;
  }

  display() {
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.size);
  }
}

function draw() {
  background(250, 246, 235);

  // Update and display each particle
  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}
