//
setTimeout(() => {
    document.body.classList.remove("preload");
    }, 500);

const btnRules = document.querySelector('.rules-button');
const btnClose = document.querySelector('.close-button');
const modalRules = document.querySelector('.modal');

const iconMap = {
  rock: "icons8-stone.png",
  paper: "icons8-paper.png",
  scissors: "icons8-scissors.png"
};
//rules
const CHOICES = [
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "scissors",
    beats: "paper",
  },
  {
    name: "rock",
    beats: "scissors"
  },
]

const choiceButtons = document.querySelectorAll('.choice-button')
const gameDiv = document.querySelector('.game')
const resultsDiv = document.querySelector('.results')
const resultDivs = document.querySelectorAll('.results__result')

const resultWinner = document.querySelector('.results__winner')
const resultText = document.querySelector('.results__text')


const playAgainBtn = document.querySelector('.play-again');


//score
const scoreNumber = document.querySelector('.score__number');
const aiScoreNumber = document.querySelector('.ai_score__number');
let score = 0;
let aiScore = 0

//game logic
choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
  const choiceName = button.dataset.choice;
  const choice = CHOICES.find(choice => choice.name === choiceName)
  choose(choice)
  })
})

function choose(choice){
  const aichoice = aiChoose();
  displayResults([choice, aichoice]);
  displayWinner([choice, aichoice]);
}

//pc choose random
function aiChoose(){
  const rand = Math.floor(Math.random() * CHOICES.length)
  return CHOICES[rand]

}

//implementation of innerHTML inside choice button
function displayResults(results) {

  resultDivs.forEach((resultDiv, idx) => {
    setTimeout(() => {
      const iconFile = iconMap[results[idx].name.toLowerCase()]; // Map the name to the correct icon
      if (iconFile) {
        resultDiv.innerHTML = `
          <div class="choice ${results[idx].name}">
            <img src="./images/${iconFile}" alt="${results[idx].name}" />
          </div>
        `;
      } else {
        console.error(`Icon for ${results[idx].name} not found`);
      }
    }, idx * 1000);
  });

  gameDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle("hidden");
}

function keepScore(isUser, point) {
  if (isUser) {
    score += point;
    scoreNumber.innerText = score;
    if (score === 2) { // Redirect user to winner.html if score reaches 10
      window.location.href = './winner.html';
    }
  } else {
    aiScore += point;
    aiScoreNumber.innerText = aiScore;
    if (aiScore === 2) { // Redirect AI to loser.html if AI scores 2
      window.location.href = './loser.html';
    }
  }
}

function displayWinner(results) {
  setTimeout(() => {
    const userWins = isWinner(results);
    const aiWins = isWinner(results.reverse());

    if (userWins) {
      resultText.textContent = "You win Against PC";
      resultDivs[0].classList.toggle('winner');
      keepScore(true , 1)
    }
    else if(aiWins) {
      resultText.textContent = "You lose Against PC";
      resultDivs[1].classList.toggle('winner');
      keepScore(false , 1)
    }
    else {
      resultText.textContent = "Tie Up!";
    }
    resultWinner.classList.toggle('hidden');
    resultsDiv.classList.toggle('show-winner');
  }, 1000);
}

function isWinner(results){
  return results[0].beats === results[1].name;
}



//play again
playAgainBtn.addEventListener('click', () => {
  gameDiv.classList.toggle('hidden');
  resultsDiv.classList.toggle("hidden");

  resultDivs.forEach((resultDiv) => {
    resultDiv.innerHTML = "";
    resultDiv.classList.remove("winner");
  });

  resultText.innerText = "";
  resultWinner.classList.toggle("hidden");
  resultsDiv.classList.toggle("show-winner");
})


// Show modal
if (btnRules) {
  btnRules.addEventListener('click', () => {
    if (modalRules) {
      modalRules.classList.add('show-modal');
      console.log('Modal opened!');
    } else {
      console.error('Modal not found!');
    }
  });
} else {
  console.error('Rules button not found!');
}

// Hide modal
if (btnClose) {
  btnClose.addEventListener('click', () => {
    if (modalRules) {
      modalRules.classList.remove('show-modal');
      console.log('Modal closed!');
    } else {
      console.error('Modal not found!');
    }
  });
} else {
  console.error('Close button not found!');
}