/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = document.querySelector("#overlay");

 class Game{

   constructor(){
     this.missed = 0;
     this.phrases = [
     new Phrase("Dr Stone"),
     new Phrase("My Hero Academia"),
     new Phrase("The Boy and The Beast"),
     new Phrase("Initial D"),
     new Phrase("Your Name")
   ];
    this.activePhrase = null;
   }

   getRandomPhrase(){
    return this.phrases[Math.floor(Math.random()*this.phrases.length)];
  }

  startGame(){
    const keyButtons = document.querySelectorAll(".keyrow button");
    const keyButtonsArray = [...keyButtons];
    keyButtonsArray.forEach(button => {
      button.disabled = false;
      button.className = "key"
    });
    //resets phrase ul
    const oldLi = document.querySelectorAll("#phrase ul li");
    const oldLiArray = [...oldLi];
    oldLiArray.forEach(li => li.remove());
    // resets scoreboard
    this.missed = 0;
    const lives = document.querySelectorAll('.tries img');
    const livesArray = [...lives];
    livesArray.forEach(life => life.src = "images/liveHeart.png");

    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  checkForWin(letter){

    if(document.querySelectorAll('.letter').length === document.querySelectorAll('.show').length){
      return true;
    } else{
      return false;
    }
  }

  removeLife(){
    this.missed += 1;
    if(this.missed === 5){
      game.gameOver();
    };
    for(let i = 0; i < this.missed; i++){
      const lives = document.querySelectorAll('.tries img');
      const livesArray = [...lives];
      const nextLife = livesArray[i];
      nextLife.src = "images/lostHeart.png";
    };
  }

  gameOver(boolean){
    if( boolean === true ){
      overlay.style.display = "initial";
      overlay.className = "win";
      overlay.querySelector('h1').textContent = `You got it! The phrase was "${this.activePhrase.phrase}".`;
    } else {
      overlay.style.display = "initial";
      overlay.className = "lose";
      overlay.querySelector('h1').textContent = `Sorry, the phrase we were looking for was "${this.activePhrase.phrase}".`;
    }
  }

  handleInteraction(letter){
    if(this.activePhrase.checkLetter(letter)=== true){
        event.target.disabled = true;
        event.target.classList.add("chosen")
        this.activePhrase.showMatchedLetter(letter);
        if(this.checkForWin() === true){
          this.gameOver(true);
        }
      } else {
        event.target.disabled = true;
        event.target.classList.add("wrong");
        this.removeLife();
      }
  }
 }
