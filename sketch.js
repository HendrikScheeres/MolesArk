let TIME = 0.03; //how quickly you walk through the perlin array

class Mole {
  constructor() {
    this.tx = round(random(-1000, 0));
    this.ty = round(random(0, 1000));
    this.x = random(windowWidth);
    this.y = 48;
    this.nested = false;
    this.active = true;
    this.size = 6;
  }

  show() {
    ellipse(this.x, this.y, this.size);
    noStroke();
    fill(255);
  }
  
  step() {
    if (!this.active){
      return;
    }

    // if it reaches the bottom stop
    if (this.y > (windowHeight * 0.9)) {
      return;
    };

    let xstep = map(noise(this.tx), 0, 1, -1, 1);
    let ystep = map(noise(this.ty), 0, 1, 0, 1);

    this.x += xstep;
    this.y += ystep;

    this.tx +=TIME;
    this.ty +=TIME;
  }

  nest() {
    // if the mole is nested return
    if (this.nested) {
      return;
    }

    let step = 0;
    // randomly nest to the left or to the right
    if (random() >= 0.5){
      step = 1;
    } else {
      step = -1;
    }

    this.size = 20;

    // build a home

    // build a random burrow
    for (let i = 0; i < 8; i++){
      this.x += step;
      this.show();
    }

    this.size = 6;

    // set nested to true and active to false
    this.nested = true;
    this.active = false;
  }
}


let mole;
let mole2;


function setup() {
 
  createCanvas(windowWidth, windowHeight);

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
  rect(0, 50, windowWidth, windowHeight);
  noStroke();

  // create a walker
  mole = new Mole();
  mole2 = new Mole();
}

function draw() {
  
  // Mouse Mole
  mole.show();
  mole.step();
  mole2.show();
  mole2.step();

  // Nesting behaviour
  if (mole.y > windowHeight * 0.7) {
    mole.nest();
  };

  // Nesting behaviour
  if (mole2.y > windowHeight * 0.7) {
    mole2.nest();
  };
}
