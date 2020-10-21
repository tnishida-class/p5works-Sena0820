// ノルウェー
function setup() {
  createCanvas(270,180);
  background(236,0,0);

  let d = width / 6;
  fill(255);
  rect(70,0,d,height);
  fill(255);
  rect(0,70,width,d);

  fill(0,7,122);
  rect(82.5,0,d * 0.45,height);
  fill(0,7,122);
  rect(0,82.5,width,d * 0.45);
}
