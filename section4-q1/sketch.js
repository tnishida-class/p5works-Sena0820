// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 80;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  let size;
  size = count + 100;
  // size += 1;
  fill(199,60,46);
  ellipse(width / 2, height / 2, size);
  // size += 100;

  if (size > 160) {
    // size += 50;
    size = 150;
  }
}
