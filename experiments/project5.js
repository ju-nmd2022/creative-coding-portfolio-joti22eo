let agents = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);

  for (let i = 0; i < 40; i++) {
    agents.push(new Agent(random(width), random(height)));
  }
}

// The following 6 lines of code are from ChatGPT
class Agent {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.radius = 10;
  }

  // The following 15 lines of code are from ChatGPT
  update() {
    this.position.add(this.velocity);

    // Bounce off edges
    if (
      this.position.x > width - this.radius ||
      this.position.x < this.radius
    ) {
      this.velocity.x *= -1;
    }

    if (
      this.position.y > height - this.radius ||
      this.position.y < this.radius
    ) {
      this.velocity.y *= -1;
    }
  }

  draw() {
    push();
    fill(106, 150, 176, 255);
    noStroke();
    ellipse(this.position.x, this.position.y, this.radius * 2);
    fill(254, 234, 104, 255);
    ellipse(this.position.x, this.position.y - 5, this.radius * 2);
    pop();
  }
}

function draw() {
  background(255);

  for (let agent of agents) {
    agent.update();
    agent.draw();
  }
}
