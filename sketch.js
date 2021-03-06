var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImg = loadImage("fairyImage1.png","images/fairyImage2.png");
	fairySound=loadSound("JoyMusic.mp3")
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
fairySound.play();
	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy = createSprite(110,470)
	fairy.addImage(fairyImg);
	fairy.scale=0.25

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
Engine.update(engine)
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > fairy.y&&starBody.position.y> fairy.position.y){
	Matter.body.setStatic(starBody,true);

}

  

  if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(starBody,false); 
}


//writw code to move fairy left and right
if(keyCode=== LEFT_ARROW){
	fairy.x= fairy.x - 2
}
if(keyCode=== RIGHT_ARROW){
fairy.x= fairy.x + 2
}
drawSprites();
}

