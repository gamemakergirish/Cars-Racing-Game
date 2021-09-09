class speedGraph{
  constructor() {

    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.image = loadImage("images/speedgraph.jpeg");
    this.image2 = loadImage("images/speedgraph2.jpeg");
    this.image3 = loadImage("images/speedgraph3.jpeg");
    this.image4 = loadImage("images/speedgraph4.jpeg");
    World.add(world, this.body);

  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    if(player.distance = 10){
      image(this.image, 0, 0, this.width, this.height); 
    }
    if(player.distance = 30){
      image(this.image3, 0, 0, this.width, this.height);
    }
    if(player.distance = 40){
      image(this.image2, 0, 0, this.width, this.height); 
    }
    if(player.distance = 50){
      image(this.image4, 0, 0, this.width, this.height); 
    }
    pop();
  }
}