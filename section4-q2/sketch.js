// テキスト「アニメーション」
let x, y, vx, vy,angle;


function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  // x = 0;
  y = height / 2;
  // y = 0;
  vx = 3;
  vy = 3;
  angle = 0;
}

function draw(){
  background(160, 192, 255);
  // BLANK[2] (hint: 作った star 関数を使います)
  noStroke();
  fill(255,241,86)

  angle += 0.1;
  star(x,y,20,angle);

  x += vx;
  y += vy;
  // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}

function star(cx, cy, r, angle){
  push();
  beginShape();
  for(var i = 0; i < 20; i++){
    // rotation += rotation + angle;
    // rotation = rotation + 100;
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    theta += angle;
    // var rotation = 0;

    // let rot;
    // rot = rot + (angle / 360);
    // theta += angle / 360;
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;

    vertex(x,y);

  }

  endShape(CLOSE);
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
