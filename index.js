console.log("Javascript connected");

let firstCard = 20;
let secondCard = 1;
let sum = firstCard + secondCard;
let hasBlackJack = false;

let message = "";
let messageEl = document.getElementById("message-el");
//let sumEl = document.querySelector("#sum-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let isAlive = true;

function startGame(){
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  sumEl.textContent = "Sum: " + sum;
  console.log("btn clicked");
  if (sum < 21){
    message = "Draw a new card?";
    
  } else if(sum === 21){
    message = "You got BlackJack!"
    hasBlackJack = true;
    
  } else {
    message = "you went over 21";
    isAlive = false;
  }
  console.log(message);
  messageEl.textContent = message;
} 

