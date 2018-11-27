var myLoc;

var myMap;
var canvas;

//animals
var beluga;
var butt;
var eagle;
var elep;
var goat;
var bear;
var tiger;
var tort;

var mappa = new Mappa('MapboxGL','pk.eyJ1Ijoic2xvb3ZpcyIsImEiOiJjam95cmE5ODEwejg4M3FtdGdybGo3dnZ1In0.26V-ATtagaCZ14SKyE7ocg')

//beluga 12
var belugaLat = 27.9673207
var belugaLon = -112.3548758

var options = {
  lat: 27.5926237,
  lng: -38.4393463,
  zoom: 1.5,
  style: 'mapbox://styles/sloovis/cjoyri21f5yrg2smcb4z17v2g',
}

//butterfly 300.000
var buttLat = 40.234374
var buttLon = -89.517825



//eagle 70.000
var eagleLat = 36.2030373
var eagleLon = -113.7709579

var eagleLat1 = 33.5722677
var eagleLon1 = -7.6572045

var eagleLat2 = 40.4378693
var eagleLon2 = -3.8199648

var eagleLat3 = 43.254022
var eagleLon3 = 12.122821

var eagleLat4 = 63.772159
var eagleLon4 = 16.727999

var eagleLat5 = 49.143661
var eagleLon5 = 24.029683

var eagleLat6 = 45.978635
var eagleLon6 = 78.294023

var eagleLat7 = 43.747713
var eagleLon7 = 133.274266

var eagleLat8 = 21.923041
var eagleLon8 = 57.632381




//elephant 2.500
var elepLat = -0.579144
var elepLon = 101.421043



//goat unknown
var goatLat = 14.402861
var goatLon = 108.191189

var goatLat1 = 19.328651
var goatLon1 = 102.981805



//polar-bear 25.000
var bearLat = 73.137564
var bearLon = -40.16695

var bearLat1 = 65.115343
var bearLon1 = -98.80827

var bearLat2 = 74.26442
var bearLon2 = 104.031998



//tiger 4000
var tigerLat = 22.3625398
var tigerLon = 78.5951135

var tigerLat1 = 23.7805729
var tigerLon1 = 90.2788957

var tigerLat2 = 19.7469963
var tigerLon2 = 96.0533037

var tigerLat3 = 27.7089559
var tigerLon3 = 85.2910274



//tortoise
var tortLat = 24.271575
var tortLon = -171.040192

var tortLat1 = 18.665048
var tortLon1 = -35.97571

var tortLat2 = -15.879483
var tortLon2 = 80.187714


function preload(){
  myLoc = getCurrentPosition();

  beluga = loadImage("./assets/beluga.png");
  butt = loadImage("./assets/butterfly.png");
  eagle = loadImage("./assets/eagle.png");
  elep = loadImage("./assets/elephant.png");
  goat = loadImage("./assets/goat.png");
  bear = loadImage("./assets/polar-bear.png");
  tiger = loadImage("./assets/tiger.png");
  tort = loadImage("./assets/tortoise.png");
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight)

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  var distance = calcGeoDistance(myLoc.latitude,myLoc.longitude, belugaLat, belugaLon, "km");

}

function draw() {
  //this clean the canvas
  clear();

  textFont('Anton')
  textStyle('BOLD')

  line(myLoc.latitude,myLoc.longitude, belugaLat, belugaLon)

  // your position
  strokeWeight(5);
  stroke(255);
  fill("#10405E");
  var point = myMap.latLngToPixel(myLoc.latitude,myLoc.longitude)
  ellipse(point.x,point.y,10)


  //beluga
  if (mouseX < windowWidth/20 && mouseY < 70) {
    strokeWeight(10)
    stroke(8,114,180,120)
    fill("#10405E");
    var point = myMap.latLngToPixel(belugaLat,belugaLon)
    ellipse(point.x,point.y,12)

    push();
    fill(255,255,255);
    strokeWeight(1);
    stroke(0);
    textSize(15);
    textStyle(BOLD);
    text("12",point.x+20,point.y,2)
    pop();

    fill(255,255,255);
    noStroke();
    textSize(20);
    text('Focena del Golfo di California', windowWidth/30*2, 50);
  }

  //butterfly
  if (mouseX < windowWidth/20 && mouseY < 130 && mouseY > 90) {
  strokeWeight(10)
  stroke(8,114,180,120)
  fill("#10405E");
  var point = myMap.latLngToPixel(buttLat,buttLon)
  ellipse(point.x,point.y,100)

  push();
  fill(255,255,255);
  strokeWeight(1);
  stroke(0);
  textSize(15);
  textStyle(BOLD);
  text("300.000",point.x+20,point.y,2)
  pop();

  fill(255,255,255);
  noStroke();
  textSize(20);
  text('Farfalla monarca', windowWidth/30*2, 115);
  }


  //eagle
  if (mouseX < windowWidth/20 && mouseY < 190 && mouseY > 150) {
  strokeWeight(10)
  stroke(8,114,180,120)
  fill("#10405E");
  var point = myMap.latLngToPixel(eagleLat,eagleLon)
  ellipse(point.x,point.y,50)

  var point = myMap.latLngToPixel(eagleLat1,eagleLon1)
  ellipse(point.x,point.y,50)

  var point = myMap.latLngToPixel(eagleLat2,eagleLon2)
  ellipse(point.x,point.y,50)

  var point = myMap.latLngToPixel(eagleLat3,eagleLon3)
  ellipse(point.x,point.y,50)

  var point = myMap.latLngToPixel(eagleLat4,eagleLon4)
  ellipse(point.x,point.y,50)

  var point = myMap.latLngToPixel(eagleLat5,eagleLon5)
  ellipse(point.x,point.y,50)

  var point = myMap.latLngToPixel(eagleLat6,eagleLon6)
  ellipse(point.x,point.y,50)

  var point = myMap.latLngToPixel(eagleLat7,eagleLon7)
  ellipse(point.x,point.y,50)

  var point = myMap.latLngToPixel(eagleLat8,eagleLon8)
  ellipse(point.x,point.y,50)

  push();
  fill(255,255,255);
  strokeWeight(1);
  stroke(0);
  textSize(15);
  textStyle(BOLD);
  text("70.000",point.x+20,point.y,2)
  pop();


  fill(255,255,255);
  noStroke();
  textSize(20);
  text('Aquila reale', windowWidth/30*2, 175);
  }


  //elephant
  if (mouseX < windowWidth/20 && mouseY < 250 && mouseY > 210) {
  strokeWeight(10)
  stroke(8,114,180,120)
  fill("#10405E");
  var point = myMap.latLngToPixel(elepLat,elepLon)
  ellipse(point.x,point.y,14)

  push();
  fill(255,255,255);
  strokeWeight(1);
  stroke(0);
  textSize(15);
  textStyle(BOLD);
  text("2.500",point.x+20,point.y,2)
  pop();

  fill(255,255,255);
  noStroke();
  textSize(20);
  text('Elefante di Sumatra', windowWidth/30*2, 235);
  }


  //goat
  if (mouseX < windowWidth/20 && mouseY < 310 && mouseY > 270) {
  strokeWeight(10)
  stroke(8,114,180,120)
  fill("#10405E");
  var point = myMap.latLngToPixel(goatLat,goatLon)
  ellipse(point.x,point.y,2)

  var point = myMap.latLngToPixel(goatLat1,goatLon1)
  ellipse(point.x,point.y,2)

  push();
  fill(255,255,255);
  strokeWeight(1);
  stroke(0);
  textSize(15);
  textStyle(BOLD);
  text("Unknown",point.x+20,point.y,2)
  pop();


  fill(255,255,255);
  noStroke();
  textSize(20);
  text('Saola', windowWidth/30*2, 295);
  }


  //polar-bear
  if (mouseX < windowWidth/20 && mouseY < 370 && mouseY > 330) {
  strokeWeight(10)
  stroke(8,114,180,120)
  fill("#10405E");
  var point = myMap.latLngToPixel(bearLat,bearLon)
  ellipse(point.x,point.y,22)

  var point = myMap.latLngToPixel(bearLat1,bearLon1)
  ellipse(point.x,point.y,22)

  var point = myMap.latLngToPixel(bearLat2,bearLon2)
  ellipse(point.x,point.y,22)

  push();
  fill(255,255,255);
  strokeWeight(1);
  stroke(0);
  textSize(15);
  textStyle(BOLD);
  text("25.000",point.x+20,point.y,2)
  pop();

  fill(255,255,255);
  noStroke();
  textSize(20);
  text('Orso polare', windowWidth/30*2, 355);
  }


  //tiger
  if (mouseX < windowWidth/20 && mouseY < 430 && mouseY > 390) {
  strokeWeight(10)
  stroke(8,114,180,120)
  fill("#10405E");
  var point = myMap.latLngToPixel(tigerLat,tigerLon);
  ellipse(point.x,point.y,30)

  var point = myMap.latLngToPixel(tigerLat1,tigerLon1);
  ellipse(point.x,point.y,30)

  var point = myMap.latLngToPixel(tigerLat2,tigerLon2);
  ellipse(point.x,point.y,30)

  var point = myMap.latLngToPixel(tigerLat3,tigerLon3);
  ellipse(point.x,point.y,30)

  push();
  fill(255,255,255);
  strokeWeight(1);
  stroke(0);
  textSize(15);
  textStyle(BOLD);
  text("4.000",point.x+20,point.y,2)
  pop();

  fill(255,255,255);
  noStroke();
  textSize(20);
  text('Tigre reale del Bengala', windowWidth/30*2, 415);
  }

  //tortoise
  if (mouseX < windowWidth/20 && mouseY < 490 && mouseY > 450) {
  strokeWeight(10)
  stroke(8,114,180,120)
  fill("#10405E");
  var point = myMap.latLngToPixel(tortLat,tortLon)
  ellipse(point.x,point.y,17)

  var point = myMap.latLngToPixel(tortLat1,tortLon1)
  ellipse(point.x,point.y,17)

  var point = myMap.latLngToPixel(tortLat2,tortLon2)
  ellipse(point.x,point.y,17)

  push();
  fill(255,255,255);
  strokeWeight(1);
  stroke(0);
  textSize(15);
  textStyle(BOLD);
  text("54.000",point.x+20,point.y,2)
  pop();

  fill(255,255,255);
  noStroke();
  textSize(20);
  text('Tartaruga liuto', windowWidth/30*2, 475);
  }

  //index of animals
  push();
  imageMode(CENTER);
  fill(255);
  noStroke();
  rectMode(CENTER);
  rect(windowWidth/30, 250, 60, 550);
  image(beluga, windowWidth/30, 50, beluga.width/12, beluga.height/12);
  image(butt, windowWidth/30, 110, butt.width/12, butt.height/12);
  image(eagle, windowWidth/30, 170, eagle.width/12, eagle.height/12);
  image(elep, windowWidth/30, 230, elep.width/12, elep.height/12);
  image(goat, windowWidth/30, 290, goat.width/12, goat.height/12);
  image(bear, windowWidth/30, 350, bear.width/12, bear.height/12);
  image(tiger, windowWidth/30, 410, tiger.width/12, tiger.height/12);
  image(tort, windowWidth/30, 470, tort.width/12, tort.height/12);
  pop();

  //text
  push();
  noStroke()
  fill('#10405E')
  textSize(40)
  textAlign(CENTER)
  text('WHERE ARE SOME OF THE ENDANGERED SPECIES FOUND?',windowWidth/2,windowHeight/5*4);

  noStroke()
  fill(255)
  textSize(20)
  text('The icons will show you where they are and how many specimens are left',windowWidth/2,windowHeight/5*4+40)
  pop();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
