let cols, rows;
let flowField;
let size = 30; // Size of each vector in the flow field
let particles = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  // Following 3 lines of code are from ChatGPT
  // Setting up the grid
  cols = floor(width / size);
  rows = floor(height / size);
  flowField = new Array(cols * rows); // New array to store values for each cell
  background(250, 246, 235);
}

function draw() {
  // The following 7 lines of code are from ChatGPT
  // Generate flow field based on Perlin noise
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      let angle = noise(x * 0.1, y * 0.1) * TWO_PI; // Perlin noise
      flowField[index] = p5.Vector.fromAngle(angle);
    }
  }

  // The following 3 lines of code are from ChatGPT
  // Randomly generate particles
  if (random(1) < 0.1) {
    generateParticles(random(width), random(height));
  }

  // Update and draw particles
  for (let particle of particles) {
    particle.follow(flowField);
    particle.update();
    particle.draw();

    // Remove dead particles
    if (particle.isDead()) {
      particles.splice(particles.indexOf(particle), 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    // The following 1 line of code is from ChatGPT
    this.previousPosition = this.position.copy();
    this.velocity = createVector(0, 0);
    this.lifespan = 200 + random(200);
  }

  // The following 6 lines of code are from ChatGPT
  update() {
    this.previousPosition.set(this.position);
    this.velocity.limit(2); // Limit the speed
    this.position.add(this.velocity);
    this.lifespan -= 1;
  }

  // The following 7 lines of code are from ChatGPT
  follow(flowField) {
    let x = floor(this.position.x / size);
    let y = floor(this.position.y / size);
    let index = x + y * cols;
    let force = flowField[index];
    this.velocity.add(force);
  }

  draw() {
    stroke(140, 140, 140, this.lifespan);
    line(
      this.previousPosition.x,
      this.previousPosition.y,
      this.position.x,
      this.position.y
    );
  }

  isDead() {
    return this.lifespan <= 0;
  }
}

function generateParticles(x, y) {
  for (let i = 0; i < 8; i++) {
    let particle = new Particle(x, y);
    particles.push(particle);
  }
}
