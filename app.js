// variables
let currDiglettTile;
let currPikachuTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid for the game board in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile); 
    }

    //Intervals 
    setInterval(setDiglett, 1000); //1000 milliseconds = 1 second, every 1 second call setDiglett, its going to place a diglett in a tile 
    setInterval(setPikachu, 2000); //2000 milliseconds = 2 seconds, every 2 second call setPikachu
}

//Random number
function getRandomTile () {
    // math.random --> (0-1) * 9 = (0-9) --> round down to (0-9) get an integers 
    let num = Math.floor(Math.random() * 9); //returns a number between 0 and 1 multiply by 9 range becomes 0-9(does not included 9) round it down we get an integer 0-8
    return num.toString(); // return the number for the ID
}

function setDiglett() {
    if(gameOver) {
        return;
    }

    if (currDiglettTile) {
        currDiglettTile.innerHTML = "";
    }

    let diglett = document.createElement("img");
    diglett.src = "./diglett.png";

    let num = getRandomTile();
    if (currPikachuTile && currPikachuTile.id == num) {
        return;
    }
    currDiglettTile = document.getElementById(num); 
    currDiglettTile.appendChild(diglett); //random tile and add the img inside
}

function setPikachu() {
    if(gameOver) {
        return;
    }

    if (currPikachuTile) {
        currPikachuTile.innerHTML = "";
    }

    let pikachu = document.createElement("img");
    pikachu.src = "./pikachu.png"; 

    let num = getRandomTile();
    if (currDiglettTile && currDiglettTile.id == num) {
        return;
    }
    currPikachuTile = document.getElementById(num);
    currPikachuTile.appendChild(pikachu); //random tile and add the img inside 
}

function selectTile() {
    if(gameOver) {
        return;
    }

    if (this == currPikachuTile) {
        score += 100;
        document.getElementById("score").innerText = "Score: " + score.toString(); //score update 
    }
    else if (this == currDiglettTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;    
    }
}

//Restart Game
const restartButton = document.getElementById("restart");
//Add event listener to restart button
restartButton.addEventListener("click", () => {
    //Reset Variables
     currDiglettTile;
     currPikachuTile;
     score = 0; 
     gameOver = false; 
     
}); 



//Sources:
//https://www.youtube.com/watch?v=JsErMawwdOw&t=1101s
//https://www.youtube.com/watch?v=D9ZfzXaCPuI&t=811s
//https://www.w3schools.com/js/