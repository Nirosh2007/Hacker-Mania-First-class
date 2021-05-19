var title, input;
var button, greetings;
var bg;

function preload(){
  bg = loadImage("Images/Green Hacking Code.gif");

}

function setup() {
  createCanvas(1900,950);
  title = createElement('h1');
  input = createInput("Name");
  button = createButton('Play');
  

}

function draw() {
  background("white");
  image(bg,0,0,1900,950);
  title.html("Hacker Mania");
  title.style('color',"red");
  title.style('font-size', '50px');
  title.position(845,350);  

  input.position(890,500);

  button.position(740,600);
  button.size(500,20);
  button.mousePressed(startGame);



  drawSprites();
}

function startGame(){
  background("")
}

function mouseReleased(){
  bg.play();
}

function mousePressed(){
  bg.pause();
}