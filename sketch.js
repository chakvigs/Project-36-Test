var canvas, bgImage;
var gameState = 0;
var playerCount, database;
var form, player, game;

function setup() {
  createCanvas(400, 400);

  database = firebase.database();
  game = new Game();
  game.gameState();
  game.start();
}

function draw() {
  
}