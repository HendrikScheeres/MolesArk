class Mole {
  constructor() {
    this.x = width/2;
    this.y = 50;
  }

  show() {

    ellipse(this.x, this.y, 6);
    fill(255);
    stroke(255);
  }
  
  step() {
    
    // Third step function
    let xstep = random(-1, 1);
    let ystep = random(-1, 1);

    this.x -= xstep;
    this.y -= ystep;
  }
}


let mole;


function setup() {
  createCanvas(690, 500);

  // the first mole 
  // fill(0, 0, 0);
  // ellipse(80, 80, 40);
  // fill(50,50,50);
  // ellipse(98, 85, 30);
  // fill("pink");
  // ellipse(113, 91, 10);

  // fill("white")
  // ellipse(97, 83, 6);
  // ellipse(110, 82, 6);

  // Ground
  fill("#1B0000");
  rect(0, 50, 1000,500);

  // create a walker
  mole = new Mole();
}

function draw() {

  // Mouse Mole
  mole.show();
  mole.step();
}
