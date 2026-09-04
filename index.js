let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const gameDraw = () => {
    msg.innerText = "The Game is Draw 🔥"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.style.backgroundColor = "green";
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        userScore++;
        document.querySelector("#user-score").innerText = userScore;
    }
    else {
        msg.style.backgroundColor = "red";
        msg.innerText=`You Lost! ${compChoice} beats your ${userChoice}`; 
        compScore++;
        document.querySelector("#comp-score").innerText = compScore;
    }
};

const playGame = (userChoice) => {
    console.log("user Choice =", userChoice);
    // Generate computer Choice
    const compChoice = genCompChoice();
    console.log("Computer Choice", compChoice);

    if(userChoice === compChoice){
        gameDraw();
    }
    else{
        let userWin = true;
        if(userChoice==="rock") {
            // paper , scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});