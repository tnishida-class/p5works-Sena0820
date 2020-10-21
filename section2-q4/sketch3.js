//バーレーン
function setup() {
  createCanvas(270,180);
  background(0);

  let h = height / 5;
  let w = width / 7;

  fill(232,1,19);
  noStroke();
  rect(2 * w,0,5 * w,height);

  fill(256);
  // noStroke();
  rect(0,0,2 * w,height);

  for(let i = 0;i < 6;i++) {
    fill(256);
    // noStroke();
    triangle(2 * w,i * h, 2 * w,(i + 1) * h,3* w,i * h+ 1/2 * h);
  }

}
