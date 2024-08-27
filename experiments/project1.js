function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(4);
}

function draw() {
  background(255);
  strokeWeight(3);

  let w = 200;
  let h = 200;

  // First Row
  push();
  rect(10, 10, w, h);
  pop();

  push();
  rect(230, 10, w, h);
  pop();

  push();
  rect(450, 10, w, h);
  pop();

  push();
  rect(670, 10, w, h);
  pop();

  // Second row
  push();
  rect(10, 230, w, h);
  pop();

  push();
  rect(230, 230, w, h);
  pop();

  push();
  rect(450, 230, w, h);
  pop();

  push();
  rect(670, 230, w, h);
  pop();

  // Third row
  push();
  rect(10, 450, w, h);
  pop();

  push();
  rect(230, 450, w, h);
  pop();

  push();
  rect(450, 450, w, h);
  pop();

  push();
  rect(670, 450, w, h);
  pop();

  // Fourth row
  push();
  // The following 2 lines of code is from ChatGPT
  rectMode(CENTER);
  translate(105, 770);
  rotate(140);
  rect(0, 0, w, h);
  pop();

  push();
  rectMode(CENTER);
  translate(330, 770);
  rotate(145);
  rect(0, 0, w, h);
  pop();

  push();
  rectMode(CENTER);
  translate(550, 770);
  rotate(160);
  rect(0, 0, w, h);
  pop();

  push();
  rectMode(CENTER);
  translate(770, 770);
  rotate(170);
  rect(0, 0, w, h);
  pop();
}
