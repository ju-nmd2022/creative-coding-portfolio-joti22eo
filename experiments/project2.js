function setup() {
  createCanvas(innerWidth, innerHeight);
}

function randomLines() {
  // The following 4 lines of code are from ChatGPT
  let x1 = random(width);
  let y1 = random(height);
  let x2 = random(width);
  let y2 = random(height);

  line(x1, y1, x2, y2);
}

function draw() {
  background(250, 246, 235);
  stroke(0, 0, 255);
  strokeWeight(16);

  for (let i = 0; i < 160; i++) {
    randomLines();
  }

  noLoop();
}
