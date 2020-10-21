//ジャマイカ
function setup() {
  createCanvas(270,180);
  background(253,209,0);
  noStroke();
  const green = color(0,156,59);
  const black = color(0);

  let d = height / 6;
  let e = width /7;

  fill(black);
  triangle(0,d,0,5 * d ,2.8 * e ,1/2 * height);
  fill(black);
  triangle(7*e,d,7 * e,5 * d ,4.2 * e ,1/2 * height);

  fill(green);
  triangle(1 / 26 * width,0, 25/26 * width,0,1/2 * width,2/5 * height);
  fill(green);
  triangle(1 / 26 * width,height, 25/26 * width,height,1/2 * width,3/5 * height);

}
