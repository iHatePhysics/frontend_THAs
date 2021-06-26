const themeSwitch = document.querySelector("#checkbox");
themeSwitch.addEventListener("change", themeToggle);

function themeToggle() {
  document.body.classList.toggle("dark");
  document.querySelector(".card").classList.toggle("dark");
  document.querySelector(".header").classList.toggle("dark");
  document.querySelector(".side-bar").classList.toggle("dark");
  document.querySelector(".flip-card-front").classList.toggle("dark");
  document.querySelector(".game-won").classList.toggle("dark");
  document.querySelector(".begin").classList.toggle("dark");
  document.querySelector("#player-name").classList.toggle("dark");
  document
    .querySelectorAll(".option")
    .forEach((option) => option.classList.toggle("dark"));
}

const quesdb = [
  {
    question: "What is (2 + 2) - 1?",
    option1: "3",
    option2: "2",
    option3: "5",
    option4: "Quick Maths?",
    answer: 1,
    hint: "Use Maths Dummy!",
  },
  {
    question: "How many different kinds of Infinity Stones are there?",
    option1: "5",
    option2: "7",
    option3: "6",
    option4: "4",
    answer: 3,
    hint: "DC Fan or what?",
  },
  {
    question: "What is the main ingredient in preparing Lemonade?",
    option1: "Water",
    option2: "Lemon",
    option3: "sugar",
    option4: "ice",
    answer: 2,
    hint: "Really?",
  },
  {
    question: "What is the Highest Rank one can achieve in Valorant?",
    option1: "Valorant",
    option2: "Titanium",
    option3: "Immortal",
    option4: "Radiant",
    answer: 4,
    hint: "Toxic 3 or somn. jk'Radiant' is what you're looking for!",
  },
  {
    question: "Select the Option that is Correct",
    option1: "Correct",
    option2: "Corekt",
    option3: "Projekt",
    option4: "incorrect",
    answer: 1,
    hint: "Again?",
  },
];
var pName;
function getPlayerName() {
  pName = document.getElementById("player-name").value;
  document.querySelector(".begin").classList.add("hidden");
}

const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".option"));
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const hints = document.querySelector(".hint");
const stats = document.querySelector(".stats");

let currQues = {}; //current question
let quesCount = 0; //question counter
let ans = "incorrect";
let score = 0;
let lockoptions = true;

function getNewQuestion() {
  if (quesCount === quesdb.length) return;
  currQues = quesdb[quesCount];
  question.innerText = currQues.question;
  option1.innerHTML = currQues.option1;
  option2.innerHTML = currQues.option2;
  option3.innerHTML = currQues.option3;
  option4.innerHTML = currQues.option4;
  console.log("insidegetnewques", lockoptions);
  lockoptions = false;
}

function displayHint() {
  if (quesCount === quesdb.length) return;
  hints.innerHTML = quesdb[quesCount].hint;
}

function checkAns() {
  console.log("inside checkans", lockoptions);
  if (lockoptions === true) {
    return;
  }
  console.log(this.dataset.id);
  console.log(currQues.answer);
  if (this.dataset.id == currQues.answer) {
    console.log("Correct Answer", currQues.answer);
    quesCount += 1;
    this.classList.add("correct");
    ans = "correct";
    score += 1;
    updateStats();
    if (quesCount === quesdb.length) {
      setTimeout(() => {
        finishGame();
        return;
      }, 1000);
    }
    setTimeout(() => {
      this.classList.remove("correct");
      getNewQuestion();
    }, 1000);
    //lockoptions = true;
  } else {
    this.classList.add("incorrect");
    console.log("incorrect Answer!!");
    ans = "incorrect";
    quesCount += 1;
    updateStats();
    if (quesCount === quesdb.length) {
      setTimeout(() => {
        finishGame();
        return;
      }, 1000);
    }
    setTimeout(() => {
      this.classList.remove("incorrect");
      getNewQuestion();
    }, 1000);
    //lockoptions = true;
  }
  lockoptions = true;
}

function updateStats() {
  const statCard = document.createElement("div");
  const indictr = document.createElement("div");
  indictr.classList.add(`${ans}-badge`);
  statCard.setAttribute("class", `statcard`);

  statCard.innerHTML = `Question ${quesCount}`;
  statCard.appendChild(indictr);
  stats.appendChild(statCard);
  displayHint();
}

function finishGame() {
  document.querySelector(".card").style.display = "none";
  document.querySelector(".side-bar").style.display = "none";

  if (pName === "") {
    document.querySelector(
      ".final-score"
    ).innerText = `Your Final score : ${score}`;
  } else {
    document.querySelector(
      ".final-score"
    ).innerText = `${pName}'s Final score : ${score}`;
  }

  document.querySelector(".game-won").style.display = "flex";
  choices.forEach((choice) => {
    choice.removeEventListener("click", checkAns);
  });
}

function startGame() {
  document.querySelector(".card").style.display = "flex";
  document.querySelector(".side-bar").style.display = "flex";
  getNewQuestion();
  choices.forEach((choice) => {
    choice.addEventListener("click", checkAns);
  });

  getPlayerName();

  displayHint();
}
