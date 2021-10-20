console.log("Javascript connected");

let firstCard = getRandomCard();
let secondCard = getRandomCard();;
let cards = [firstCard, secondCard]; //array ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el");
//let sumEl = document.querySelector("#sum-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  name : "Keegan",
  chips : 100
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

//create reandom card, use function to set values of cards
function getRandomCard(){
  
  let randomNumber = Math.floor( Math.random() * 13) + 1; // 1-13

  if(randomNumber > 10){
    return 10; //cards like jack,queen and king
  } else if(randomNumber === 1){
    return 11; //for ace card
  } else{
    return randomNumber;
  }


}

function startGame(){
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

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
  
  if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
  

}








//dice function
// let randomNumber = Math.floor( Math.random() * 6) + 1;
// console.log(randomNumber);

// function rollDice(){
//   //dice function
// let randomNumber = Math.floor( Math.random() * 6) + 1;
// return randomNumber;
// }

// console.log(rollDice());








