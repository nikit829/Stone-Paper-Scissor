let userScore=0;
let compScore=0;

let resultContainer=document.querySelector(".result")
let hiddenText=document.querySelector(".hidden")
let playerScoreDisplay=document.querySelector("#playerScore")
let compScoreDisplay=document.querySelector("#compScore")
let newGamebtn=document.querySelector(".newGame")
let choices=document.querySelectorAll(".choice")

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        const compChoice=playGame();
        whoWins(userChoice,compChoice);
    })
})

const playGame=() =>{
    //generate computer choice
    let compChoiceArr=["rock","paper","scissor"];
    let randomIndex=Math.floor(Math.random()*3);
    return compChoiceArr[randomIndex];
}

const whoWins=(userChoice,compChoice)=>{
    let msg=""

    if(userChoice===compChoice){

        msg=`It's a Draw!`
        resultContainer.style.color = "Black";
    }
    else if((userChoice=="rock" && compChoice=="paper")
        ||(userChoice=="paper" && compChoice=="scissor")
        ||(userChoice=="scissor" && compChoice=="rock")){

            compScore++;
        compScoreDisplay.innerText=compScore;
        msg=`Computer's ${compChoice} beats your ${userChoice}`
        resultContainer.style.color = "red";
    }
    //((userChoice=="paper" && compChoice=="scissor")||(userChoice=="paper" && compChoice=="rock")||(userChoice=="rock" && compChoice=="scissor"))
    else{
        userScore++;
        playerScoreDisplay.innerText=userScore;
        msg=`Your ${userChoice} beats ${compChoice} of computer`
        resultContainer.style.color = "green";
    }
    hiddenText.innerText=msg;
    resultContainer.classList.remove("hide");
}

const newGame=()=>{
    userScore=0
    compScore=0
    playerScoreDisplay.innerText = userScore;
    compScoreDisplay.innerText = compScore;

    hiddenText.innerText = "Start a new game!";
    resultContainer.classList.add("hide")
}

newGamebtn.addEventListener("click",()=>{
    newGame();
})