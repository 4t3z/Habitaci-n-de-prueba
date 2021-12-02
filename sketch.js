const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup(){
  var canvas = createCanvas(1315,625);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Platform(1165,625,300,10);
  //roof = new Platform(657.5,0,1315,10);

  platform1 = new Platform(70,70,140,15);
  platform2 = new Platform(1223,70,100,15);
  platform3 = new Platform(665,70,447,15);
  platform4 = new Platform(902,200,25,15);
  platform5 = new Platform(-5,312.5,15,625);
  platform6 = new Platform(1320,278,15,555);
  platform7 = new Platform(220,140,150,15);
  platform8 = new Platform(395,70,27,15);
  platform9 = new Platform(770,150,50,15);
  platform10 = new Platform(1075,150,100,15);
  platform11 = new Platform(1120,550,400,15);
  platform12 = new Platform(985,70,141,15);
  platform13 = new Platform(1115.5,85,140,15);
  platform14 = new Platform(1195,165,165,15);
  platform15 = new Platform(680,300,40,15);
  platform16 = new Platform(500,250,200,15);
  platform17 = new Platform(200,250,250,15);
  platform18 = new Platform(13,350,20,15);
  platform19 = new Platform(13,500,20,15);
  platform20 = new Platform(70,392.5,15,300);
  platform21 = new Platform(150,625,140,15);
  platform22 = new Platform(300,550,140,15);
  platform23 = new Platform(318,300,15,100);
  platform24 = new Platform(407,300,15,100);
  platform25 = new Platform(362.5,350,103,15);
  platform26 = new Platform(145,105,15,83);
  platform27 = new Platform(600,500,280,15);
  platform28 = new Platform(775,550,60,15);
  platform29 = new Platform(835,600,60,15);
  platform30 = new Platform(935,620,60,15);
  platform31 = new Platform(1112,290,400,15);
  platform32 = new Platform(915,420,15,275);
  platform33 = new Platform(935,620,60,15);
  platform34 = new Platform(860,400,100,15);
  platform35 = new Platform(120,430,100,15);

  player = new Player(70,30);

  box1 = new Square(395,30);
  box2 = new Square(870,30);
  box3 = new Square(1100,250);
  box4 = new Square(700,450);
  box5 = new Square(120,400);
}
function draw(){
  background(15,19,39);
  Engine.update(engine);

  platform1.display();
  platform2.display();
  platform3.display();
  platform4.display();
  platform5.display();
  platform6.display();
  platform7.display();
  platform8.display();
  platform9.display();
  platform10.display();
  platform11.display();
  platform12.display();
  platform13.display();
  platform14.display();
  platform15.display();
  platform16.display();
  platform17.display();
  platform18.display();
  platform19.display();
  platform20.display();
  platform21.display();
  platform22.display();
  platform23.display();
  platform24.display();
  platform25.display();
  platform26.display();
  platform27.display();
  platform28.display();
  platform29.display();
  platform30.display();
  platform31.display();
  platform32.display();
  platform33.display();
  platform34.display();
  platform35.display();

  ground.display();
  //roof.display();

  player.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  textSize(30);
  fill("yellow");
  text("Salida --->",1160,600);
  text("-->",200,110);
  text("-->",657,50);
  text("-->",1100,70);
  text("<--",1170,150);
  text("<--",750,130);
  text("<--",480,230);
  text("<--",170,230);
  text("-->",135,610);
  text("-->",280,530);
  text("-->",590,480);
  text("-->",830,580);
  fill("red");
  textSize(100);
  text("Hola :)",980,450);
  textSize(20);
  text("Presiona R para resetar la pocision del jugador",300,200);
  text("Presiona 'E' para estabilizar la posicion del jugador",300,610);
  text("Si el personaje no funciona correctamente, recarga la página",220,415);
  text("'Espacio' para saltar, 'A' para ir a la izquierda, 'D' para ir a la derecha",300,20);

  //Resetear y estabilizar posiciones
  if(keyCode === 101){
    Matter.Body.setPosition(player.body,{x:player.body.position.x,y:player.body.position.y});
  }
  if(keyCode === 114){
    Matter.Body.setPosition(player.body,{x:70,y:10});
  }
  //Movimiento
  if(keyCode === 97){
    player.body.position.x -= 0.3;
  }
  if(keyCode === 100){
    player.body.position.x += 0.3;
  }
}
function keyPressed(){
  //Saltar
  if(keyCode === 32){
    player.body.position.y -= 6;
  }
}