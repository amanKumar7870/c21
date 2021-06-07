var car1,car2,car3,car4;
var wall1,wall2,wall3,wall4;
var line1,line2,line3;
var speed,weight,thickness;
var damage;




function setup() {

  thickness=Math.round(random(20,50));

car1=createSprite(50,70,20,2);
car1.shapeColor='red';

wall1=createSprite(1100,70,thickness,140);
wall1.shapeColor='grey';

line1=createSprite(600,145,1600,10/2);
line1.shapeColor='black';

car2=createSprite(50,220,20,2);
car2.shapeColor='red';

wall2=createSprite(1100,220,thickness,140);
wall2.shapeColor='grey';

line2=createSprite(600,295,1600,5);
line2.shapeColor='black';


car3=createSprite(50,370,20,2);
car3.shapeColor='red';

wall3=createSprite(1100,370,thickness,140);
wall3.shapeColor='grey';

line3=createSprite(600,445,1600,5);
line3.shapeColor='black';

car4=createSprite(50,525,20,2);
car4.shapeColor='red';

wall4=createSprite(1100,525,thickness,140);
wall4.shapeColor='grey';


speed=Math.round(random(8,10));
weight=Math.round(random(10,10));


damage=2*(weight)*(speed)*(speed)/10;


  createCanvas(1200,600);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background('pink'); 






  car1.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  car4.velocityX=speed;
  


  
  car1.depth=wall1.depth;
  car1.depth=car1.depth+1;

  car2.depth=wall2.depth;
  car2.depth=car2.depth+1;

  car3.depth=wall3.depth;
  car3.depth=car3.depth+1;

  car4.depth=wall4.depth;
  car4.depth=car4.depth+1;

  if(isTouching(car1,wall1)){

car1.velocityX=0;

    if(damage<150){
      car1.shapeColor='green';
    }

    if(damage>150){
      car1.shapeColor='yellow';
    }
  }else {
    car1.shapeColor='red';
  }


  if(isTouching(car2,wall2)){

    car2.velocityX=0;
    
   if(damage<150){
     car2.shapeColor='green';
    }
    
    if(damage>150){
      car2.shapeColor='yellow';
    }
   }else {
       car2.shapeColor='red';
      }


    

      if(isTouching(car3,wall3)){

   car3.velocityX=0;
        
     if(damage<150){
      car3.shapeColor='green';
     }
        
    if(damage>150){
     car3.shapeColor='yellow';
  }
  }else {
     car3.shapeColor='red';
    }



  if(isTouching(car4,wall4)){

  car4.velocityX=0;
            
  if(damage<150){
   car4.shapeColor='green';
   }
            
   if(damage>150){
     car4.shapeColor='yellow';
     }
    }else {
    car4.shapeColor='red';
    }
            
        


  drawSprites();
}

function isTouching(object1,object2){

  if(object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2){
      return true;
    }else{
      return false;
    }


}

