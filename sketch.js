var canvas;
var music;
var safeBox1;
var safeBox2;
var safeBox3;
var dangerBox;
var playBox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(250,600);
 safeBox1 = createSprite(20, 595, 40, 40);
 safeBox1.shapeColor("blue");
 safeBox2 = createSprite(80, 595, 40, 40);
 safeBox2.shapeColor("green");
 dangerBox = createSprite(140, 595, 40, 40);
 dangerBox.shapeColor("yellow");
 safeBox3 = createSprite(200, 595, 40, 40);
 safeBox3.shapeColor("orange");
 playBox = createSprite(random(20,550));
 playBox.shapeColor("pink");
 playBox.velocityY = 5;

    
}

function draw() {
    background(rgb(169,169,169));
   
    createEdgeSprite()
    playBox.bounceOff(topEdge);
    playBox.bounceOff(bottomEdge);
    playBox.bounceOff(rightEdge);
    playBox.bounceOff(leftEdge);
    playBox.bounceOff(safeBox1);
    playBox.bounceOff(safeBox2);
    playBox.bounceOff(safeBox3);
}


function color(){
    if (playBox.isTouching(safeBox1)&& playBox.bounceOff(safeBox1)){
        playBox.shapeColor("blue");
        music.play();
    }

    if (playBox.isTouching(safeBox2)&& playBox.bounceOff(safeBox2)){
        playBox.shapeColor("green");
        music.play();
    }

    if (playBox.isTouching(safeBox3)&& playBox.bounceOff(safeBox3)){
        playBox.shapeColor("orange");
        music.play();
    }

    if (playBox.isTouching(dangerBox)&& playBox.collide(dangerBox)){
        playBox.shapeColor = rgb(255, 128, 0);
        playBox.velocityX = 0;
        music.stop();
    }
}
