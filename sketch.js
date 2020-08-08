var font;
var vehicles = [];

function preload(){
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup(){
  createCanvas(600, 400);
  background(51);
  // textFont(font);
  // textSize(128);
  // fill(255);
  // noStroke();
  // text('Kishu', 100, 200);

  var points = font.textToPoints('Ajay', 100, 200, 128);
  console.log(points);

  for(var i = 0; i < points.length; i++){
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  }
}

function draw(){
  background(51);
  for(var i = 0; i < vehicles.length; i++){
    var v = vehicles[i];
    v.behaviours()
    v.update();
    v.show();
  }
}