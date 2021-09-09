class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
      gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage(cr1);
    car2 = createSprite(200,200);
    car2.addImage(cr2);
    car3 = createSprite(300,200);
    car3.addImage(cr3);
    car4 = createSprite(400,200);
    car4.addImage(cr4);
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();   
    Player.getPlayerInfo();
    player.getCarsAtEnd();

    if(allPlayers !== undefined){
      //var display_position = 100;
      image(trck,0,-displayHeight*3.9,displayWidth,displayHeight*5);
      //index of the array
      var index = 0;
      
      //x and y position of the cars
      var x = 150;
      var y;
      
      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          stroke(10);
          fill("white");
          ellipse(x,y,100,100);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }

        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
     
      player.update();
    }
    //if(keyWentUp(UP_ARROW) && player.index !== null){
      //player.distance -=10
      //if(player.distance = 0){
        //player.distance = 0
      //}
      //player.update();
    //}
    if(player.distance>3300){
      gameState = 2;
      player.rank += 1;
      Player.updateCarsAtEnd(player.rank);
    }
    drawSprites();
  }
  end(){
    console.log(player.rank);
    background(bg)
    if(player.rank = 1){
      text("HI",displayWidth/1.5,displayHeight/1.5);
    }  
    if(player.rank = 2){
      text("HI",displayWidth/2,displayHeight/1.5);
    }
    if(player.rank = 3){
      text("HI",displayWidth/2.5,displayHeight/1.5);
    }
    if(player.rank = 4){
      text("HI",displayWidth/3,displayHeight/1.5);
    }
  }
}