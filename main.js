
let startButton = document.getElementById("startButton").addEventListener("click", startGame);
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = true; 
let messageEl = document.getElementById("message-el")
let message = ""    
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector(".cards-el")
let newCardButton = document.getElementById("new-card-button").addEventListener("click", newCard);

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
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        console.log(cards)
        runGame()
    }

    console.log(newCardButton)