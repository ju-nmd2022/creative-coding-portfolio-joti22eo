function setup() {
  createCanvas(innerWidth, innerHeight);
}

// The following 7 lines of code are from ChatGPT
// Draws random ellipses within the ellipse boundary
function drawRandomRect(centerX, centerY, width) {
  // Generate a random point inside the ellipse
  let angle = random(TWO_PI);
  let radius = sqrt(random(1)) * (width / 2);
  let x = centerX + radius * cos(angle);
  let y = centerY + radius * sin(angle);

  // Random size and color for ellipses
  let r = random(20, 60); // Radius (size)
  let c = random(120, 220); // Color

  // Draw the ellipses at the random point
  fill(c, 255, c);
  rect(x, y, r);
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
  const ellipseRadius = 200;
  // Number of rectangles
  const numRects = 260;

  for (let i = 0; i < numRects; i++) {
    drawRandomRect(centerX, centerY, ellipseRadius);
  }
}
