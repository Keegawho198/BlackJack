console.log("Javascript connected");


let firstCard = 20;
let secondCard = 1;

let sum = firstCard + secondCard;

//console.log(sum);


if (sum < 21){
  console.log("Do you want to draw a new card?");
} else if(sum === 21){
  console.log("You got BlackJack!");
} else {
  console.log("You are out of the game");
}
