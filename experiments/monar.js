function setup() {
  createCanvas(1000, 1000);
}

const size = 100;
const layers = 10;

function getRandomValue(pos, variance) {
  return pos + map(Math.random(), 0, 1, -variance, variance);
}

function drawLayers(x, y, size, layers) {
  /* const half = size / 2; */
  const variance = size / layers;
  noFill();
  /* rectMode(CENTER); */
  for (let i = 0; i < layers; i++) {
    if (Math.random() > 0.4) {
      continue;
    }
    const s = (size / layers) * i;
    const half = s / 2;
    beginShape();
    vertex(
      getRandomValue(x - half, variance),
      getRandomValue(y - half, variance)
    );
    vertex(
      getRandomValue(x + half, variance),
      getRandomValue(y - half, variance)
    );
    vertex(
      getRandomValue(x + half, variance),
      getRandomValue(y + half, variance)
    );
    vertex(
      getRandomValue(x - half, variance),
      getRandomValue(y + half, variance)
    );
    endShape(CLOSE);
    /* rect(x - half, y - half, s, s); */
  }
}

function draw() {
  background(255, 255, 255);

  drawLayers(100, 100, size, layers);

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      drawLayers(size / half + x + size, size / half + y + size, size, layers);
    }
  }
  noLoop();
}
