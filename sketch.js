var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var track,ground;
var form, player, game;
var cars, car1, car2, car3, car4;
var speedGraph

function preload() {
  cr1 = loadImage("images/car1.png");
  cr2 = loadImage("images/car2.png");
  cr3 = loadImage("images/car3.png");
  cr4 = loadImage("images/car4.png");
  trck = loadImage("images/track.jpg");
  bg = loadImage("images/RankBoard.jpeg")
  speedgraph1 = loadImage("images/speedgraph.jpeg");
  speedgraph2 = loadImage("images/speedgraph3.jpeg");
  speedgraph3 = loadImage("images/speedgraph2.jpeg");
  speedgraph4 = loadImage("images/speedgraph4.jpeg");
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}