/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = document.querySelector("#overlay");

 class Game{

   constructor(){
     this.missed = 0;
     this.phrases = [
     //Hebrew
     new Phrase("Genesis"),
     new Phrase("Exodus"),
     new Phrase("Leviticus"),
     new Phrase("Numbers"),
     new Phrase("Deuteronomy"),
     new Phrase("Joshua"),
     new Phrase("Judges"),
     new Phrase("Ruth"),
     new Phrase("1 Samuel"),
     new Phrase("2 Samuel"),
     new Phrase("1 Kings"),
     new Phrase("2 Kings"),
     new Phrase("1 Chronicles"),
     new Phrase("2 Chronicles"),
     new Phrase("Ezra"),
     new Phrase("Nehemiah"),
     new Phrase("Esther"),
     new Phrase("Job"),
     new Phrase("Psalms"),
     new Phrase("Proverbs"),
     new Phrase("Ecclesiastes"),
     new Phrase("Song of Solomon"),
     new Phrase("Isaiah"),
     new Phrase("Jeremiah"),
     new Phrase("Lamentaions"),
     new Phrase("Ezekiel"),
     new Phrase("Daniel"),
     new Phrase("Hosea"),
     new Phrase("Joel"),
     new Phrase("Amos"),
     new Phrase("Obadiah"),
     new Phrase("Jonah"),
     new Phrase("Micah"),
     new Phrase("Nahum"),
     new Phrase("Habakkuk"),
     new Phrase("Zephaniah"),
     new Phrase("Haggai"),
     new Phrase("Zechariah"),
     //Greek
     new Phrase("Matthew"),
     new Phrase("Mark"),
     new Phrase("Luke"),
     new Phrase("John"),
     new Phrase("Acts"),
     new Phrase("Romans"),
     new Phrase("1 Corinthians"),
     new Phrase("2 Corinthians"),
     new Phrase("Galatians"),
     new Phrase("Ephesians"),
     new Phrase("Philippians"),
     new Phrase("Colossians"),
     new Phrase("1 Thessalonians"),
     new Phrase("2 Thessalonians"),
     new Phrase("1 Timothy"),
     new Phrase("2 Timothy"),
     new Phrase("Titus"),
     new Phrase("Philemon"),
     new Phrase("Hebrews"),
     new Phrase("James"),
     new Phrase("1 Peter"),
     new Phrase("2 Peter"),
     new Phrase("1 John"),
     new Phrase("2 John"),
     new Phrase("3 John"),
     new Phrase("Jude"),
     new Phrase("Revelation")
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
