
function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  return rpsChoice[randomNumber]
}

function getResult(playerChoice, computerChoice) {

  let score; 
  
  if (playerChoice == computerChoice) {
    return 0;
  }

  if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1;
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1;
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}


function showResult(score, playerChoice, computerChoice) {

  const playerScore = document.getElementById('player-score')
  const hand = document.getElementById('hands')
  const result = document.getElementById('result')


  if (score == -1) {
    result.innerText = "You Lose!"
  } else if (score == 0) {
    result.innerText = "It's a tie!"
  } else {
    result.innerText = "You Won!"
  }

  hand.innerText = `👱${playerChoice} vs 🤖${computerChoice}`

  playerScore.innerText = `${Number (playerScore.innerText) + score}`

}

  


function onClickRPS(playerChoiceee) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoiceee.value, computerChoice)
  showResult(score, playerChoiceee.value, computerChoice)
}


function playGame() {

  let rpsButtons = document.querySelectorAll('.rpsButton')


  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton)
  })

  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}


function endGame() {
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
  
}

playGame()