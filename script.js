let score = 0;
const button = document.getElementById('click-btn');
const scoreDisplay = document.getElementById('score-display');
const title = document.getElementById('game-title');
const body = document.body;
const winMessage = document.getElementById('win-message');

const funMessages = [
  "Keep it going!",
  "You're on fire! ",
  "Nice click!",
  "Color poppin'!",
  "Wowza!",
  "Groovy!",
  "Zing!",
  "Smashing!",
  "Boom!",
  "You win!!!!"
];

const randomColor = () =>
  `hsl(${Math.floor(Math.random() * 360)}, 90%, 70%)`;

button.addEventListener('click', () => {
  if (score >= 10) return;

  score++;
  scoreDisplay.textContent = `Score: ${score}`;
  title.textContent = funMessages[Math.min(score - 1, funMessages.length - 1)];

  body.style.backgroundColor = randomColor();
  title.style.color = randomColor();

  if (score === 10) {
    winMessage.textContent = " You reached 10 clicks! Game Over!";
    button.disabled = true;
    button.textContent = "Done!";
    button.style.backgroundColor = "#aaa";
  }
});
