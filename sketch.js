var bullet,wall;
var speed,weight,thickness;
var damage;

function setup() {
  createCanvas(1600,620);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,50,20);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
  wall=createSprite(1200,310,thickness,310);
  wall.shapeColor=80,80,80;
  

}

function draw() {
  background("black"); 
  object=bullet;
  if (hasCollided(bullet,wall)){
   object.velocityX=0;
   damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   textSize(23);
   stroke("yellow");
   fill("yellow");
   textFont("comic sans MS");
   text("Damage to wall:"+damage,100,100);
   if(damage>10){
    object.shapeColor=color(255,0,0);
  }
  
  else if(damage<10){
    object.shapeColor=color(0,255,0);
  }
  if (damage>20){
    textSize(23);
   stroke("red");
   fill("red");
   textFont("chiller");
   text("Very weak material.Bullet broke through wall",500,500);
  }
  if(damage<5){
    textSize(23);
   stroke("green");
   fill("green");
   textFont("algerian");
   text("Very good material.Recommended for building wall",500,500);
  }
}



drawSprites();
}

function hasCollided(bullet,wall){
  bulletrightedge=bullet.x+bullet.width;
  wallleftedge=wall.x;
  if(bulletrightedge>wallleftedge){
    return true;
  }
  return false;
}