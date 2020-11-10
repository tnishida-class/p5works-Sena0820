/ チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;

  noStroke();
  for(let i = 0; i < 8; i++){
    // fill(196);
    // rect(size * i,size * j)
    // fill(196);
    // rect(80,30,10,10);

    for(let j = 0; j < 8; j++){
      if(i % 2 !== 0 && j % 2 == 0) {


        fill(128);
        rect(size * i,size * j,size,size);
        // ellipse(()(size * i + size * (i + 1))/2),(size * j + size * (j + 1))/2),24);
        if(j < 3) {
        fill(255,0,0);
        // ellipse(37.5,12.5,20);
        ellipse(size * i + size/2,size * j + size/2,20);
      }
        if(j > 4) {
          fill(0,0,0);
    // ellipse(37.5,12.5,20);
          ellipse(size * i + size/2,size * j + size/2,20);
  }

      }
      if(i % 2 == 0 && j % 2 !== 0) {
        fill(128);
        rect(size * i,size * j,size,size);
          if(j < 3) {
            fill(255,0,0);
        // ellipse(37.5,12.5,20);
            ellipse(size * i + size/2,size * j + size/2,20);
      }
          if(j > 3) {
            fill(0,0,0);
      // ellipse(37.5,12.5,20);
            ellipse(size * i + size/2,size * j + size/2,20);
    }
      }

      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)

    }
  }
}
