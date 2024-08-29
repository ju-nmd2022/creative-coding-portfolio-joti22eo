function setup() {
  createCanvas(innerWidth, innerHeight);
}

function randomLines() {
  // The following 4 lines of code are from ChatGPT
  let x1 = random(width);
  let y1 = random(height);
  let r = random(20, 60);
  let c = random(120, 220);

  fill(255, c, c);
  ellipse(x1, y1, r);
}

function draw() {
  background(250, 246, 235);
  noStroke();

  for (let i = 0; i < 160; i++) {
    randomLines();
  }

  noLoop();
}
