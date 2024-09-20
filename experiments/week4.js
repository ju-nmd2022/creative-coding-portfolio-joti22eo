// Initialize Tone.Synth
const synth = new Tone.PolySynth({
  oscillator: {
    type: "sine",
  },
  envelope: {
    attack: 0.4,
    decay: 0.2,
    sustain: 0.0,
    release: 1,
  },
}).toDestination();

// Sound Notes
const twinkleStarMelody = [
  "C4",
  "C4",
  "G4",
  "G4",
  "A4",
  "A4",
  "G4",
  "F4",
  "F4",
  "E4",
  "E4",
  "D4",
  "D4",
  "C4",
  "G4",
  "G4",
  "F4",
  "F4",
  "E4",
  "E4",
  "D4",
  "G4",
  "G4",
  "F4",
  "F4",
  "E4",
  "E4",
  "D4",
  "C4",
  "C4",
  "G4",
  "G4",
  "A4",
  "A4",
  "G4",
  "F4",
  "F4",
  "E4",
  "E4",
  "D4",
  "D4",
  "C4",
];

// New Particle
class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    // The following 7 lines of code are from ChatGPT
    this.previousPosition = this.position.copy(); // Store initial position

    // Random direction and speed
    const angle = Math.random() * Math.PI * 2;
    const speed = 5 + Math.random() * 5; // Random speed for some variation
    this.velocity = createVector(
      Math.cos(angle) * speed,
      Math.sin(angle) * speed
    );
    this.lifespan = 0;
    this.color = color(31, 6, 6);
  }

  update() {
    // The following 1 line of code is from ChatGPT
    this.previousPosition.set(this.position); // Save current position as previous
    this.lifespan += 2;

    // The following 4 lines of code is from ChatGPT
    const t = map(this.lifespan, 0, 400, 0, 1);
    this.color = lerpColor(color(255), color(31, 6, 6), t);

    this.velocity.mult(0.99); // Apply friction
    this.position.add(this.velocity); // Update position based on velocity
  }

  draw() {
    push();
    stroke(this.color);
    strokeWeight(1);
    line(
      this.previousPosition.x,
      this.previousPosition.y,
      this.position.x,
      this.position.y - this.lifespan
    );
    pop();
  }

  isDead() {
    return this.lifespan <= 0;
  }
}

let particles = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0);
  Tone.start(); // Start Tone.js context
}

function draw() {
  // The following 3 lines of code are from ChatGPT
  // Randomly generate particles
  if (random(1) < 0.06) {
    // Frequency of particles appearing
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
  for (let i = 0; i < 140; i++) {
    const particleX = x + random(-10, 10);
    const particleY = y + random(-10, 10);
    const particle = new Particle(particleX, particleY);
    particles.push(particle);
  }

  // Play a random sound when particles are generated
  let randomNote = random(twinkleStarMelody);
  synth.triggerAttackRelease(randomNote, "8t");
}
