let g = Math.floor(Math.random() * 26);
let responseChange = document.getElementById("guessText");
let goThrough = document.getElementById("submitButton");
let input = document.getElementById("guessInput")


document.getElementById("submitButton").onclick = function () {
    let x = document.getElementById("guessInput").value;
    if (x == g){
        console.log("Correct. Good Job!!!");
    }

    else if(x > g){
        console.log("TO HIGH. Guess again :(");
    }

    else (x < g);{
        console.log("TO LOW. Guess again :(");
    }

}
