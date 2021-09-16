const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player





function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;


   // ground = new Ground(600,height,1200,20);
    
}

function draw(){
    background('#CFE8EE');
    player = createSprite(100,100,50,50);


// if (keyCode === RIGHT_ARROW){
// player.velocityX = 2;
// }

// if (keyCode !== RIGHT_ARROW){
//     player.velocityX = 0;
//     }

player.position.x += 2;

drawSprites();
}
