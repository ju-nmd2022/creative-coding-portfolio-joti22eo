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
    this.color = color(255);
  }

  update() {
    // The following 1 line of code is from ChatGPT
    this.previousPosition.set(this.position); // Save current position as previous
    this.lifespan += 1;

    // The following 4 lines of code is from ChatGPT
    const t = map(this.lifespan, 0, 80, 0, 1);
    this.color = lerpColor(color(250, 245, 90), color(255), t);

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
      this.position.y
    );
    pop();
  }

  isDead() {
    return this.lifespan <= 0;
  }
}

let particles = [];
let noteIndex = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0);
  Tone.start(); // Start Tone.js context
  playMelody();
}

function draw() {
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
}

// The following 10 lines of code are from ChatGPT
function playMelody() {
  const noteDuration = 600; // Duration for each note in milliseconds

  twinkleStarMelody.forEach((note, index) => {
    setTimeout(() => {
      generateParticles(random(width), random(height)); // Generate particles
      synth.triggerAttackRelease(note, "8t"); // Play the note
    }, index * noteDuration); // Schedule the note
  });
}
