let randNumber = Math.floor(Math.random() * 100);
let guessField = document.querySelector("#guessField");
let submitBtn = document.querySelector("#subt");
let resultDisplay = document.querySelector(".resultDisplay");
let playgame = true;
let previousGuess = [];
let guesscount = 0;
let countRest = document.querySelector(".lastResult");
let newgameplay = document.querySelector("#newgameplay");

if(playgame){
submitBtn.addEventListener("click", (e) =>{
    e.preventDefault(); //hold values on web not proceed get/post request
    guessnumber = parseInt(guessField.value); //convert string value to integer
    countdisplay = 10;
    if(isNaN(guessnumber)){
        alert("Please Enter Valid Number");
    }
    else if(guessnumber < 1){
        alert("Please Enter Number b/t 1 - 100");
    }
    else if(guessnumber > 100){
        alert("Please Enter Number Less than 100");   
    }
    else{
        previousGuess.push(guessnumber);
        guesscount++;
        if(randNumber === guessnumber){
            displayResult(`Congrats You Won The Game, Random Number Was ${randNumber} and Your Choices Are ${previousGuess}`);
            guessField.setAttribute("disabled"," ");
            submitBtn.setAttribute("disabled"," ")
            newgameplay.style.display = "inline";

        }
        else if(guesscount < 10 && guessnumber != randNumber){
        for(let i = 1; i <= 10 ; i++){
            displayResult(`Keep Trying, Your Choices Are ${previousGuess}`);
            countRest.innerText= 10 - guesscount;
        }}
        else if(guesscount === 10){
            displayResult(`Game Over, Random Number Was ${randNumber} and Your Choices Are ${previousGuess}`);
            guessField.setAttribute("disabled"," ");
            submitBtn.setAttribute("disabled"," ")
            newgameplay.style.display = "inline";
        }
       
      
    }

})    
}

function displayResult(Result){
    resultDisplay.innerHTML = `<span>${Result}</span>`;
}
newgameplay.addEventListener("click", function newgame(){
    guessField.removeAttribute("disabled"," ");
    submitBtn.removeAttribute("disabled"," ");
       playgame = true;
       previousGuess = [];
       guesscount = 0;
       resultDisplay.innerHTML = "";
       newgameplay.style.display = "none";
}); 
console.log(randNumber)