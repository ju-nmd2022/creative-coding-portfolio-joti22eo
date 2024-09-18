// Following 11 lines of code are from ChatGPT
// Initialize Tone.Synth
const synth = new Tone.Synth({
  oscillator: {
    type: "sine",
  },
  envelope: {
    attack: 0.4,
    decay: 0.2,
    sustain: 0.0,
    release: 0.2,
  },
}).toDestination();

// Particle system
let particles = [];
let size = 10;
let waveSpeed = 0.1; // Speed of the wave motion
let waveOffset = 0; // Offset to animate the waves

function setup() {
  createCanvas(innerWidth, innerHeight);

  for (let i = 0; i < 500; i++) {
    particles.push(
      new Particle(random(width), random(height), color(0, 100, 255, 150))
    );
  }
}

class Particle {
  constructor(x, y, col) {
    this.position = createVector(x, y);
    this.initialY = y; // Store the initial y position
    this.radius = 80;
    this.color = col; // Particle color
  }

  update() {
    // The following 2 lines of code are from ChatGPT
    // Calculate wave movement
    let yOffset = sin((this.position.x + waveOffset) * 0.02) * 50;
    this.position.y = this.initialY + yOffset;
  }

  draw() {
    push();
    fill(this.color);
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

function mousePressed() {
  // Random color for the new particles on click
  let c = random(255);
  let newColor = color(c, c, 255, 160);

  particles.push(new Particle(mouseX, mouseY, newColor));

  synth.triggerAttackRelease("C4", "4n");
}
