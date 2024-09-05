
let startButton = document.getElementById("startButton").addEventListener("click", startGame);
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true; 
let messageEl = document.getElementById("message-el")
let message = ""    
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector(".cards-el")
let newCardButton = document.getElementById("new-card-button").addEventListener("click", newCard);

function getRandomCard() {
    randomNumber = Math.random() * 100
    return Math.floor(randomNumber)
}

function startGame() {
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