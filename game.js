let randomNumber = Math.floor(Math.random() * 26);
let responseChange = document.getElementById("guessText");
let goThrough = document.getElementById("submitButton");
let input = document.getElementById("guessInput");
console.log( randomNumber)


function adivina (){
    let userGuess = input.value;   
      if (userGuess < randomNumber){ 
        responseChange.innerText=" TOO LOW. Guess again :(";
        responseChange.style.color= 'red'
      }

      else if (userGuess > randomNumber){
        responseChange.innerText= "TOO HIGH. Guess again :(";
        responseChange.style.color= 'red'
      }

      else {
        responseChange.innerText= "Correct!!:)";
        responseChange.style.color= 'green'; 
      }
}
goThrough.addEventListener("click",adivina )




