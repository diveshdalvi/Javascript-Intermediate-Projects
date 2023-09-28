const submitBtn = document.querySelector("#submitBtn");
const userInput = document.querySelector("#input");
const previousGuess = document.querySelector("#previousGuess");
const remaningGuess = document.querySelector("#guessRemaining");
const randomNum = parseInt(Math.random()*100+1);
const msgBox = document.querySelector("#msg");
console.log(randomNum);

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submitBtn.addEventListener("click",() => {
        let guess = parseInt(userInput.value)
        validateGuess(guess)
        remaningGuess.innerText = "hello"
    })
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMsg("Congratulation,You Guessed it right!!!");
        endGame()
    }
    else if(guess > randomNum){
        displayMsg("Higher Guessed, Try Lowered One");
    }
    else{
        displayMsg("Lower Guessed , Try Higher One");
    }
}
function validateGuess (guess){
    if(isNaN(guess)){
        alert("Please Enter A Number");
    }
    else if(guess>100){
        alert("Enter Number Smaller Than 100");
    }
    else if (guess<1){
        alert("Enter Number Greater Than 1")
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMsg(`Game Over ,The Number Was ${randomNum}`)
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function displayMsg(msg){

}
function displayGuess(){
    userInput.value = "";
    remaningGuess.innerText = prevGuess;
}
function startGame(){

}
function endGame(){
    
}