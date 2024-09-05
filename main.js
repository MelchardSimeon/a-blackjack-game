let player = {
    name: "Melchard",
    chips: 185;
}
let startButton = document.getElementById("startButton").addEventListener("click", startGame);
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false; 
let messageEl = document.getElementById("message-el")
let message = ""    
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector(".cards-el")
let newCardButton = document.getElementById("new-card-button").addEventListener("click", newCard);
let playerEl = document.getElementById("player-el")


function getRandomCard() {
    randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    runGame();
}

function runGame() {
        cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
        
    if (sum < 21) {
        message = "Do you want to draw another card?"
        isAlive = true;
        hasBlackJack = false
    } else if (sum === 21) {
        message = "congrats, you won!"
        isAlive = true;
        hasBlackJack = true;
    } else {
        message = 'byebye!'
        isAlive = false;
        hasBlackJack = false
    }
        messageEl.textContent = message;
    }

    function newCard() {
        if (isAlive === true && hasBlackJack === false) {
         let card = getRandomCard()
         sum += card;
         cards.push(card)
         console.log(cards)
         runGame()
        } else {
            return alert("error");
            
        }
    }

    console.log(newCardButton)