class Quiz {
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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
   
    question.hide();
    
    background("yellow")

  textSize(35);
  fill("brown");
  text("Results of the Quiz",340,50)
  Contestant.getContestantInfo();
 
   if(allContestants!==undefined){
     debugger;
     var display_answer=230;
     fill("blue")
     textSize("20")
     text("Note:Contestant who Answered correct answer are displayed in green colour",100,230);
     
     for(var plr in allContestants){
       debugger;
       var correctAnswer="2"
       if(correctAnswer===allContestants[plr].answer)
       fill("green")
     else
   fill("red")

   display_answer+=30;
   textSize(15)
   text(allContestants[plr].name+":"+allContestants[plr].answer,250,display_answer)
     }
   }
  }

}
