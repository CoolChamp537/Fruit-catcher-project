class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(width/5,height/3 + height/2);
    player1.addImage("basket2.png",player_img);
    
    player2 = createSprite(width*0.8,height/3 + height/2);
    player2.addImage("basket2.png", player_img);

    players=[player1,player2];
    players.collide(edges)

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, windowWidth, windowHeight);
                 var x =100;
                 var y=200;

                // var display_Score
                 var index =0;
                 drawSprites();

                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     //display_Score = 50
                     players[index -1].x = x;
                     //players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                       //add code to display the player's name on the respective basket.
                       fill("blue");
                       stroke("black")
                       textSize(30)
                       textAlign(CENTER)
                       textFont("Calibri")
                       text(allPlayers[plr].name,x,y + height/4 + 10)
                         
                     }
                     //display_Score += 50
                     //text(allPlayers[plr].name + ": " + allPlayers[plr].score,width/4,displayScore);
                     text(allPlayers.player2.name + ": " + allPlayers.player2.score,width/4,50);
                     text(allPlayers.player1.name + ": " + allPlayers.player1.score,width/4,100);
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 25
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 25
                    player.update();
                }

                player1.collide(edges)
                player2.collide(edges)
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
                 
                  if (player.index !== null) {
                    for (var i = 0; i < fruitGroup.length; i++) {
                        if (fruitGroup.get(i).isTouching(players)) {
                            fruitGroup.get(i).destroy();
                         
                            player.score+=1;
                        }
                        
                    }
                    player.update();
                  }
                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}
