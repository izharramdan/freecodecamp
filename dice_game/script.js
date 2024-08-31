const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesContainer = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules-btn");

let diceValuesArr = [];
let isModalShowing = false;
let score = 0;
let round = 1;
let rolls = 0;

rulesBtn.addEventListener("click", () => {
    isModalShowing = !isModalShowing;
    if (isModalShowing) {
        rulesContainer.style.display = "block";
        rulesBtn.textContent = "Hide rules";
    } else {
        rulesContainer.style.display = "none";
        rulesBtn.textContent = "Show rules";

    }
});

rollDiceBtn.addEventListener("click", () => {
    diceValuesArr = [];
    rolls = 0;
    round++;
    roundElement.textContent = round;
    rollsElement.textContent = rolls;
    for (let i = 0; i < 5; i++) {
        diceValuesArr.push(Math.floor(Math.random() * 6) + 1);
    }
    listOfAllDice.forEach((die, index) => {
        die.classList.remove("active");
        die.textContent = diceValuesArr[index];
    });
    rollDiceBtn.disabled = true;
    keepScoreBtn.disabled = false;
});