class Mole {
  constructor() {
    this.x = random(windowWidth);
    this.y = 48;
  }

  show() {
    ellipse(this.x, this.y, 6);
    noStroke();
    fill(255);
  }
  
  step() {

    // if it reaches the bottom stop
    if (this.y > (windowHeight - 100)) {
      
      return;

    };  
    // Third step function
    let xstep = random(-1, 1);
    let ystep = random(0, 0.5);

    this.x += xstep;
    this.y += ystep;
  }

  nest() {
    let xstep = 0;
    // 50% to go left or right
    if (random() < 0.5) {
      xstep = -0.1;
    } else {
      xstep = 0.1;
    };

    for (let i = 0; i < 50; i++){
      this.x += xstep;
    }

  }
}


let mole;


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
}

function draw() {

  // Mouse Mole
  mole.show();
  mole.step();

  if (mole.y > windowHeight/2){
    mole.nest();
    
  }
}
