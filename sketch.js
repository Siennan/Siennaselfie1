function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background('#fae');
  
  
  fill(225, 0, 0, 50);
  rect(185, 0, 30, height);
  rect(265,0,30, height);
  rect(345, 0, 30, height);
  rect(105, 0, 30, height);
  rect(25, 0, 30, height);

  rect(0, 25, 400, 30);
    rect(0, 105, 400, 30);
    rect(0, 345, 400, 30);
    rect(0, 265, 400, 30);
    rect(0, 185, 400, 30);
  
  fill('#e6e6e6'); //color setting always goes before shape
  square(100, 100, 200, 30);
  
  
//hair
    fill('#663300');
  rect(130,150,140,150,20)
  ellipse(140, 230, 50, 140);
   ellipse(260, 230, 50, 140);
  //ellipse(x, y, w, [h])
  arc(140, 270, 70, 60, 0, PI);
  arc(260, 270, 70, 60, 0, PI);
  //arc(x, y, w, h, start, stop, [mode], [detail])
  
  
  //neck
  
     fill('#cc99ff');
triangle(130, 300, 270, 300, 210, 260);
    fill('#ffb999');
  triangle(170, 300, 230, 300, 210, 180);

//triangle(x1, y1, x2, y2, x3, y3)
  
  
//face
 
      fill('#ffb999');
  ellipse(150, 205, 20, 40);
  ellipse(250, 210, 20, 40);
  fill('#FFCEB4');
  ellipse(200,210,100,130); //x,y,w,h
  
  //eyebrows
    fill('#661a00');
rect(160, 175, 30, 5, 20, 15, 10, 5);
  rect(210, 177, 30, 5, 20, 15, 10, 5);
  //rect(x, y, w, h, [detailX], [detailY])
  
  
  //eyes
fill('#ffffff')
  ellipse(175, 195, 27, 20);
  ellipse(225, 195, 27, 20);
    fill('#000');
  ellipse(180, 195, 15, 15);
  ellipse(230, 195, 15, 15);
  
  
  //hair bangs
  fill('#663300');
  arc(230, 190, 81, 120, -210, -270);
  
  arc(180, 188, 110, 120, -330, -120);
  
//nose
 fill('#ffb999');
  triangle(200, 195, 190, 220, 210, 220);
    ellipse(200, 220, 25, 10);
  
  //x1, y1, x2, y2, x3, y3

//mouth
  fill('#fff')
  arc(200, 235, 40, 40, 0, PI);
  //arc(x, y, w, h, start, stop, [mode], [detail])
  


}

