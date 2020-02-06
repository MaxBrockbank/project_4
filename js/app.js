/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
document.querySelector("#game-over-message").innerHTML = "Hint: Bible Books";
let game = new Game();


 document.getElementById('btn__reset').addEventListener("click", function(){
   game.startGame();
 });

const keyButtons = document.querySelectorAll(".key");
const keyButtonsArray = [...keyButtons];
keyButtonsArray.forEach(key => key.addEventListener('click', function(){
  game.handleInteraction(key.innerHTML)
})
);
