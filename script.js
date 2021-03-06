const particles=[];
function setup()
{
    createCanvas(2*window.innerWidth/3,2*window.innerHeight/3);
    const particlesLength=Math.floor(window.innerWidth/10);
    for(let i=0;i<particlesLength;i++)
    {
        particles.push(new Particle());
    }
}
function draw()
{   
    background(3, 51, 90);
    particles.forEach((p,index)=>{
        p.update();
        p.draw();
        p.accelerations();
    });
}
class Particle {
    constructor()
    {
        //position
        this.pos=createVector(random(width),random(height));
        //vel
        this.vel=createVector(random(0,0),random(5,3));
        //size 
        this.size=12;
    }
    //bouncing
    accelerations()
    {
            
        this.vel.x+=accelerationX*0.05;
        this.vel.y+=accelerationY*0.05;
        var xColor=random(0,255);
        var yColor=random(0,255)
        var zColor=random(0,255)
        fill(xColor,yColor,zColor,0.5);
    }
    edges()
    {
        if(this.pos.x<0 || this.pos.x>width){
             this.vel.x*=-1;
        }
        if(this.pos.y>height){
            this.pos.y=0;
       }
       if(this.pos.y<0)
       {
           this.pos.y=height;
       }
    }
    //movement
    update()
    {
        this.pos.add(this.vel);
        this.edges();
    }
    draw()
    {
        noStroke();
        fill('rgba(250,250,250,0.5)');
        circle(this.pos.x,this.pos.y,this.size)
    }
}