// 小手調べ
//
function setup(){
  createCanvas(100,100);
  background(196);
  for(let i = 0; i < 10; i++){
    // BLANK[1]

    // if(i < 5) {
      let x = i * 10 + 10

      // fill(0,0,255);
      stroke(255,0,0);
      noFill();
      ellipse(50,50, x);
      if(i < 5) {
        stroke(0,0,255);
        ellipse(50,50,x);
      }



    // }

  }
}
