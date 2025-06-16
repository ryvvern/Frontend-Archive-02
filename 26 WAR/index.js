let deckId
let computerScore = 0
let myScore = 0

const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const header = document.getElementById("header")
const remainingText = document.getElementById("remaining")
const computerScoreEl = document.getElementById("computer-score")
const myScoreEl = document.getElementById("my-score")

// Disable draw button until a deck is ready
drawCardBtn.disabled = true

newDeckBtn.addEventListener("click", handleNewDeck)
drawCardBtn.addEventListener("click", drawCards)

function handleNewDeck() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
            remainingText.textContent = `Remaining cards: ${data.remaining}`
            header.textContent = "Game of War"
            drawCardBtn.disabled = false

            // Reset everything
            cardsContainer.children[0].innerHTML = ""
            cardsContainer.children[1].innerHTML = ""
            computerScore = 0
            myScore = 0
            computerScoreEl.textContent = `Computer: ${computerScore}`
            myScoreEl.textContent = `You: ${myScore}`
        })
}

function drawCards() {
    if (!deckId) {
        header.textContent = "Please click 'New Deck' first."
        return
    }

    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            const card1 = data.cards[0]
            const card2 = data.cards[1]

            cardsContainer.children[0].innerHTML = `<img src="${card1.image}" class="card" />`
            cardsContainer.children[1].innerHTML = `<img src="${card2.image}" class="card" />`

            remainingText.textContent = `Remaining cards: ${data.remaining}`

            const winner = determineCardWinner(card1, card2)
            header.textContent = winner

            if (data.remaining === 0) {
                drawCardBtn.disabled = true
                endGame()
            }
        })
}

function determineCardWinner(card1, card2) {
    const valueMap = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "JACK": 11,
        "QUEEN": 12,
        "KING": 13,
        "ACE": 14
    }

    const val1 = valueMap[card1.value]
    const val2 = valueMap[card2.value]

    if (val1 > val2) {
        computerScore++
        computerScoreEl.textContent = `Computer: ${computerScore}`
        return "Computer wins this round!"
    } else if (val2 > val1) {
        myScore++
        myScoreEl.textContent = `You: ${myScore}`
        return "You win this round!"
    } else {
        return "It's a tie!"
    }
}

function endGame() {
    if (computerScore > myScore) {
        header.textContent = "The computer won the game!"
    } else if (myScore > computerScore) {
        header.textContent = "You won the game!"
    } else {
        header.textContent = "It's a tie game!"
    }
}
