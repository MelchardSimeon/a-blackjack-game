
let startButton = document.getElementById("startButton").addEventListener("click", startGame);
let firstCard = 9;
let secondCard = 12;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true; 
let messageEl = document.getElementById("message-el")
let message = ""    
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector(".cards-el")
let newCardButton = document.getElementById("new-card-button").addEventListener("click", newCard);


function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum;
        
    if (sum < 21) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "congrats, you won!"
        hasBlackJack = true;
    } else {
        message = 'byebye!'
        isAlive = false;
    }
        messageEl.textContent = message;
    }


    function newCard() {
        let card = 10;
        sum += card;
        startGame()
    }

    console.log(newCardButton)