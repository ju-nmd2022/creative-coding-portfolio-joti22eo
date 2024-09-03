// New Particle
class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.previousPosition = this.position.copy(); // Store initial position

    // Random direction and speed
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random(); // Random speed for some variation
    this.velocity = createVector(
      Math.cos(angle) * speed,
      Math.sin(angle) * speed
    );
    this.lifespan = 200 + Math.random() * 200;
  }

  update() {
    this.previousPosition.set(this.position); // Save current position as previous
    this.lifespan -= 1;

    this.velocity.mult(0.99); // Apply friction
    this.position.add(this.velocity); // Update position based on velocity
  }

  draw() {
    push();
    stroke(140, 140, 140);
    strokeWeight(1);
    line(
      this.previousPosition.x,
      this.previousPosition.y,
      this.position.x,
      this.position.y
    ); // Draw line from previous to current position
    noStroke();
    fill(140, 140, 140);
    ellipse(this.position.x, this.position.y, 2); // Draw particle
    pop();
  }

  isDead() {
    return this.lifespan <= 0;
  }
}

let particles = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(250, 246, 235);
}

function draw() {
  // Randomly generate particles
  if (random(1) < 0.05) {
    generateParticles(random(width), random(height));
  }

  for (let particle of particles) {
    particle.update();
    particle.draw();
    if (particle.isDead()) {
      particles.splice(particles.indexOf(particle), 1);
    }
  }
}

function generateParticles(x, y) {
  for (let i = 0; i < 6; i++) {
    // Generate 10 particles each time
    const particleX = x + random(-10, 10);
    const particleY = y + random(-10, 10);
    const particle = new Particle(particleX, particleY);
    particles.push(particle);
  }
}
