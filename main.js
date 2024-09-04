
let startGame = document.getElementById("startButton").addEventListener("click, startGame");

function startGame() {
    
}

let firstCard = 9;
let secondCard = 12;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

if (sum < 21) {
    console.log("Do you want to draw another card?")
} else if (sum === 21) {
    console.log("congrats, you won!")
    hasBlackJack = true;
} else {
    console.log('byebye!')
    isAlive = false;
}

console.log(isAlive)
