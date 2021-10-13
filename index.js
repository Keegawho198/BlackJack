console.log("Javascript connected");

let firstCard = 20;
let secondCard = 1;
let sum = firstCard + secondCard;
let hasBlackJack = false;
//console.log(sum);

let isAlive = true;
let message = "";

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

function startGame(){
  console.log("btn clicked");
} 

