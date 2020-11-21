// 最終課題を制作しよう
let count;
let cycle;
let animate;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 1000;
  animate = true;
}

function draw(){
  background(160, 192, 255);
  if(animate) count = (count + 25) % cycle;
  let size;
  size = 0;
  size = count + 100;
  // fill(199,60,46);
  // ellipse(width /2, height /2,size);

  if (size > 700) {
    textCenterMakecycle(0,0,0,255,255,255,60,'凶www');
  } else if (size > 300) {
    textCenterMakecycle(255,255,0,0,0,0,60,'吉　なんとも言えん');
  } else if (size > 0) {
    textCenterMakecycle(255,69,0,255,255,0,60,'大吉！　良かったね');
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function textCenterMakecycle(cycleC1,cycleC2,cycleC3,textC1,textC2,textC3,textS,result) {
  let size;
  size = 0;
  size = count + 100;

  fill(cycleC1,cycleC2,cycleC3);
  ellipse(width/2,height/2,size);
  textSize(textS);
  fill(textC1,textC2,textC3);
  textAlign(CENTER);
  text(result,width/2,height/2);
}
function mouseClicked() {
  animate = !animate;
}
