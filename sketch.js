var a,b,c,d,e,f,g;
a = 40, b = a+70, c = b+70, d = c+70, e = d+70, f = e+70, g = f+70;
var h,i,j,k,l;
h = 75, i = h+70, j = i+70, k = j+70, l = k+70;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particle;
var particles=[]
var bar;
var score=0;
function setup() {
  createCanvas(450,580);
  
	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);

    ground = new Ground(width/2,height,width,20);
    sidel = new Ground(0,290,1,600);
    sider = new Ground(451,290,1,600);

    plinko1 = new Plinko(a,50);
    plinko2 = new Plinko(b,50);
    plinko3 = new Plinko(c,50);
    plinko4 = new Plinko(d,50);
    plinko5 = new Plinko(e,50);
    plinko6 = new Plinko(f,50);
    plinko7 = new Plinko(g,50);
    
    plinko8 = new Plinko(h,100);
    plinko9 = new Plinko(i,100);
    plinko10 = new Plinko(j,100);
    plinko11 = new Plinko(k,100);
    plinko12 = new Plinko(l,100);
   
    plinko13 = new Plinko(a,150);
    plinko14 = new Plinko(b,150);
    plinko15 = new Plinko(c,150);
    plinko16 = new Plinko(d,150);
    plinko17 = new Plinko(e,150);
    plinko18 = new Plinko(f,150);
    plinko19 = new Plinko(g,150);
   
    plinko20 = new Plinko(h,200);
    plinko21 = new Plinko(i,200);
    plinko22 = new Plinko(j,200);
    plinko23 = new Plinko(k,200);
    plinko24 = new Plinko(l,200);
 
    plinko25 = new Plinko(a,250);
    plinko26 = new Plinko(b,250);
    plinko27 = new Plinko(c,250);
    plinko28 = new Plinko(d,250);
    plinko29 = new Plinko(e,250);
    plinko30 = new Plinko(f,250);
    plinko31 = new Plinko(g,250);

    div1 = new Division(10,455);
    div2 = new Division(90,455);
    div3 = new Division(170,455);
    div4 = new Division(250,455);
    div5 = new Division(330,455);
    div6 = new Division(410,455);
}
function draw() {
  rectMode(CENTER);
  background(0,0,0);

  ground.display();
  sidel.display();
  sider.display();

  for (var j = 0; j < particles.length; j++) { 
    particles[j].display(); }

  if (particle!=null){
    particle.display();
  }

  if (particle.body.position.x>200){
    score=score+1
  }

  text(score, 200, 200);

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();


  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
 
}

function mousePressed(){
  particles.push(new Particle(mouseX, 0))
  
}



/*if(frameCount % 60 === 0){ 
  //particles.push(new Particle(random(width/2-10,width/2+10), 10,10)) 
  particles.push(new Particle(random(60, 400), 10)); 
} 
for (var j = 0; j < particles.length; j++) { 
  particles[j].display(); }*/