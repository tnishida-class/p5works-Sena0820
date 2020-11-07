// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);
  // dayOfWeek(2020,10,28);

  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
    // if(d<8) {
    //   document.write(d);
    // }
    // document.write(d);
    text(d,100,100);
    // if(dayOfWeek(y,m,d) == 0) {
    //   d.context.fillStyle = "red";
    // }
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1]
  return isLeapyear(y) ? 366 : 365;
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2]
  //基準2020年1月1日水曜日0が水曜日6が火曜日
  if(dayOfYear(2020,11,1) - dayOfYear(y,m,d) % 7 == 0) {
    return 0 ; }
    else if(dayOfYear(2020,11,1) - dayOfYear(y,m,d) % 7 == 1) {
    return 1
    }
    else if(dayOfYear(2020,11,1) - dayOfYear(y,m,d) % 7 == 2) {
    return 2
    }
    else if(dayOfYear(2020,11,1) - dayOfYear(y,m,d) % 7 == 3) {
    return 3
    }
    else if(dayOfYear(2020,11,1) - dayOfYear(y,m,d) % 7 == 4) {
    return 4
    }
    else if(dayOfYear(2020,11,1) - dayOfYear(y,m,d) % 7 == 5) {
    return 5
    }
    else {
    return 6
    }
  }
  // return
// }

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
