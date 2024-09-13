let particles = [];
let cols, rows;
let size = 10;
// The following 2 lines of code are from ChatGPT
let waveSpeed = 0.1; // Speed of the wave motion
let waveOffset = 0; // Offset to animate the waves

function setup() {
  createCanvas(innerWidth, innerHeight);
  cols = floor(width / size);
  rows = floor(height / size);

  // Initialize particles
  for (let i = 0; i < 500; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.initialY = y; // Store the initial y position
    this.radius = 80;
  }

  update() {
    // The following 2 lines of code are from ChatGPT
    // Calculate wave movement
    let yOffset = sin((this.position.x + waveOffset) * 0.02) * 50;
    this.position.y = this.initialY + yOffset;
  }

  draw() {
    push();
    fill(0, 100, 255, 150);
    noStroke();
    ellipse(this.position.x, this.position.y, this.radius);
    pop();
  }
}

function draw() {
  background(10, 140, 255, 150);

  // The following 1 line of code is from ChatGPT
  // Update wave offset
  waveOffset += waveSpeed;

  // Update and draw particles
  for (let particle of particles) {
    particle.update();
    particle.draw();
  }
}
