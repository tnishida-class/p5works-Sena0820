// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  // balloon("I love keyakizaka46",255,0,200,200);
  balloon("Keyakizaka46 changed its name",255,0,100,100);
}



function balloon(t,col,bakcol,x,y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;//余白の大きさ
  fill(bakcol);
  rect(x, y, w + p * 2, h + p * 2);
  fill(col);
  text(t, p+x, h + p + y);
  fill(bakcol);
  triangle(x, y + h + p*2,x, y + h/2 + p,x - 6* p,y + h + p*2);
}
