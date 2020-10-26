const Engine=Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var border,border2,border3,border4;
var engine, world;
var ground;



var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

ground= new Divisions(240,785,460,10);

 for(var V=10;V<=470;V = V+57){
    divisions.push( new Divisions(V, 635, 12, divisionHeight));
 }
 
 border=new Ground (0, 795, 960, 10);
 border2=new Ground (0, 5, 960, 10);
 border3=new Ground(475,5,10,2000);
 border4=new Ground(5,5,10,2000);

 for(var j=60; j<=420;j=j+50){
   plinkos.push(new Plinko(j,75));
 }
 for(var j=35; j<=450;j=j+50){
  plinkos.push(new Plinko(j,175));
}
for(var j=60; j<=420;j=j+50){
  plinkos.push(new Plinko(j,275));
}
for(var j=35; j<=450;j=j+50){
 plinkos.push(new Plinko(j,375));
}

}

function draw() {
  background("lightgrey");
  text("Senatus Populusque Romanus!", 150, 50)
  Engine.update(engine); 
  
  border.display();
  border2.display();
  border3.display();
  border4.display();

  if(frameCount%30===0){
    particles.push(new Particle(random(220,230),10,10));
    }
  
 for(var I=0;I<divisions.length;I++){
  divisions[I].display();
 }
 
 for(var J=0;J<plinkos.length;J++){
  plinkos[J].display();
 }
 for(var J=0;J<particles.length;J++){
  particles[J].display();
 }
 ground.display();
}