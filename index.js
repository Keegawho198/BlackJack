console.log("Javascript connected");

let firstCard = getRandomCard();
let secondCard = getRandomCard();;
let cards = [firstCard, secondCard]; //array ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message = "";
let messageEl = document.getElementById("message-el");
//let sumEl = document.querySelector("#sum-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

//create reandom card, use function to set values of cards
function getRandomCard(){
  //return 5;
  return Math.floor( Math.random() * 13) + 1; // 1-13
  // return randomNumber;


}

function startGame(){
  renderGame();
}

function renderGame(){
  //render out first card and second
  cardsEl.textContent = "Cards: ";
  
  //using loop to render cards
  for (let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " ";
  }
  
  //render all cards we have
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

function newCard(){
  console.log("Draw card");
  //create a card variable, hard code value (2-11)
  //add the new sum value to card
  //call startGame()
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
}








//dice function
// let randomNumber = Math.floor( Math.random() * 6) + 1;
// console.log(randomNumber);

function rollDice(){
  //dice function
let randomNumber = Math.floor( Math.random() * 6) + 1;
return randomNumber;
}

console.log(rollDice());








