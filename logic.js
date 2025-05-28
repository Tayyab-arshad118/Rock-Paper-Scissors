let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const Uscore = document.querySelector("#user");
const Cscore = document.querySelector("#comp");
const msg = document.querySelector("#msg");

// Audio elements
const clickSound = document.getElementById("clickSound");
const winSound = document.getElementById("winSound");
const loseSound = document.getElementById("loseSound");
const drawSound = document.getElementById("drawSound");

console.log(msg);

// Generate computer's choice
const genCompChoice = () => {
  let choice = ["rock", "paper", "scissors"];
  let rndidx = Math.floor(Math.random() * 3);
  return choice[rndidx];
};

// Handle win or lose scenario
const winner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    console.log("You Won");
    msg.textContent = `You Won! Your ${userchoice} beats Computer's ${compchoice}`;
    msg.style.backgroundColor = "green";
    Uscore.textContent = Number(Uscore.textContent) + 1;
    winSound.play();
  } else {
    console.log("Computer Won");
    msg.textContent = `Computer Won! Computer's ${compchoice} beats Your ${userchoice}`;
    msg.style.backgroundColor = "red";
    Cscore.textContent = Number(Cscore.textContent) + 1;
    loseSound.play();
  }
};

// Handle draw scenario
const draw = () => {
  console.log("Game is draw");
  msg.textContent = "It's a draw";
  msg.style.backgroundColor = "black";
  drawSound.play();
};

// Main game logic
const playGame = (userchoice) => {
  let compchoice = genCompChoice();

  console.log("User choice =", userchoice);
  console.log("Computer choice =", compchoice);

  if (userchoice === compchoice) {
    draw();
  } else {
    let userwin;

    if (userchoice === "rock") {
      userwin = compchoice === "scissors" ? true : false;
    } else if (userchoice === "paper") {
      userwin = compchoice === "rock" ? true : false;
    } else {
      userwin = compchoice === "paper" ? true : false;
    }

    winner(userwin, userchoice, compchoice);
  }
};

// Attach event listeners to all choice buttons
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    clickSound.play(); 
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
