let flowerSize = 20;
let amount = 4;
let gap = 60;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);
}

function flower() {
  noStroke();
  let petals = 14;

  for (let y = 0; y < petals; y++) {
    for (let x = 0; x < petals; x++) {
      // Green part
      fill(0, 255, 111);
      rect(x, y, 10, 1);

      // Flower petals
      fill(100, 5, 11);
      rect(x, y, 20, 11);

      // Center of flower
      fill(255, 100);
      ellipse(x, y, 5);

      rotate(PI / 5);
    }
  }
}

function draw() {
  let y = height - flowerSize * amount - (gap * (amount - 1)) / 2;
  for (let i = 0; i < amount; i++) {
    let x = width - flowerSize * amount - gap * (amount - 1);
  }
  flower();
}
