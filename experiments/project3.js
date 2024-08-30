function setup() {
  createCanvas(innerWidth, innerHeight);
}

// The following 7 lines of code are from ChatGPT
// Draws random rectangles within the ellipse boundary
function drawRandomRect(centerX, centerY, width) {
  // Generate a random point inside the ellipse
  let angle = random(TWO_PI);
  let radius = sqrt(random(1)) * (width / 2);
  let x = centerX + radius * cos(angle);
  let y = centerY + radius * sin(angle);

  // Random size and color for rectangles
  let w = random(2, 12); // Radius (size)
  let c = random(255); // Color

  // Draw the ellipses at the random point
  fill(255, 160, c);
  rect(x, y, w);
}

function draw() {
  background(250, 246, 235);
  noStroke();

  // The following 4 lines of code are from ChatGPT
  // Ellipse Boundary
  // Center it
  const centerX = width / 2;
  const centerY = height / 2;
  // Width & height
  const ellipseRadius = 300;
  // Number of rectangles
  const numRects = 260;

  for (let i = 0; i < numRects; i++) {
    drawRandomRect(centerX, centerY, ellipseRadius);
  }

  noLoop();
}
