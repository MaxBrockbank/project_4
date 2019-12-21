/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
   constructor(phrase){
     this.phrase = phrase.toLowerCase();
   }

   addPhraseToDisplay(){
     const ul = document.querySelector("ul");
     for(let i = 0; i < this.phrase.length; i++){
       let li = document.createElement('li');
       li.innerHTML = this.phrase[i];
       if(this.phrase[i] === ' '){
         li.className = 'space';
       } else {
         li.className = `Hide letter ${this.phrase[i]}`;
       }
       ul.appendChild(li);
    }
  }

    checkLetter(letter){
      for(let i = 0; i < this.activePhrase.length; i ++){
        if( letter === this.activePhrase[i]){
          return true;
        } else{
          return false;
        }
      }

   };


 }
