// New Particle
class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random();

    //Direction and speed of particle
    this.velocity = createVector(
      Math.cos(angle) * speed,
      Math.sin(angle) * speed
    );
    this.lifespan = 200 + Math.random() * 200;
  }

  update() {
    this.lifespan = this.lifespan - 1;

    this.velocity.mult(0.99); // Created friction - reduces magnitude of the velocity, makes it slow down
    this.position.add(this.velocity); // Updates the position based on velocity
  }

  draw() {
    push();
    translate(this.position.x, this.position.y);
    stroke(140, 140, 140);
    fill(140, 140, 140);
    ellipse(0, 0, 1);
    pop();
  }

  // Checks the state of the particle (alive/dead)
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
  if (random(1) < 0.08) {
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
  for (let i = 0; i < 1; i++) {
    // Generates 10 particles each time
    const particleX = x + random(-10, 10);
    const particleY = y + random(-10, 10);
    const particle = new Particle(particleX, particleY);
    particles.push(particle);
  }
}
