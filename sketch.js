var canvas;
var music;
var surface1,surface2,surface3,surface4,box,EdgeSprite


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(415,400);
    
    //create 4 different surfaces
    surface1=createSprite(53,400,100,15)
    surface2=createSprite(156,400,100,15)
    surface3=createSprite(259,400,100,15)
    surface4=createSprite(362,400,100,15)
    
    
   
    //create box sprite and give velocity
    box=createSprite(random(5,395),50,15,15)
    box.velocityX = 4
    box.velocityY = 5
    
}

function draw() {
    background("aqua");
    surface1.shapeColor="blue"
    surface2.shapeColor="yellow"
    surface3.shapeColor="red"
    surface4.shapeColor="green"
    box.shapeColor="white"
    
    //create edgeSprite
    edge1=createSprite(414,200,5,900)
    edge2=createSprite(1,200,5,900)
    edge3=createSprite(207,1,900,5)
    box.bounceOff(edge1)
    box.bounceOff(edge2)
    box.bounceOff(edge3)
    edge1.visible = false
    edge2.visible = false
    edge3.visible = false
    //add condition to check if box touching surface and make it box
if(surface1.isTouching(box) && box.bounceOff(surface1)){
 box.shapeColor = "blue"
}
if(surface2.isTouching(box) && box.bounceOff(surface2)){
 box.shapeColor = "yellow"
}
if(surface3.isTouching(box) && box.bounceOff(surface3)){
 box.shapeColor = "red"
 box.velocityX = 0
 box.velocityY = 0
 music.stop()
}
if( box.bounceOff(surface4) || surface4.isTouching(box) ){
 box.shapeColor = "green"
 music.play()
}
drawSprites();
}
