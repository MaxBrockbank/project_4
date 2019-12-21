/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 class Game{

   constructor(){
     this.missed = 0;
     this.phrases = [
     new Phrase("Seth"),
     new Phrase("Josiah"),
     new Phrase("Sean"),
     new Phrase("Max"),
     new Phrase("Umbrella Avenue")
   ];
    this.activePhrase = 'null';
   }

   getRandomPhrase(){
    return this.phrases[Math.floor(Math.random()*this.phrases.length)];
  }

  startGame(){
    document.querySelector("#overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  handleInteraction(){
    this.checkLetter()
  }
 }
