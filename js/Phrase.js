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
         li.classList += ' letter';
       }
       ul.appendChild(li);
    }
  }

    checkLetter(letter){
      if(this.phrase.includes(letter)){
        return true;
      } else {
        return false;
      }
   };

   showMatchedLetter(letter){
     const phraseLi = document.querySelectorAll('#phrase ul li');
     const phraseLiArray = [...phraseLi];
     phraseLiArray.forEach(li => {
       if(li.textContent === letter){
         li.className = 'letter show';
       }
     })
   }



 }
