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

    setInterval(setDiglett, 1000); //1000 milliseconds = 1 second, every 1 second call setDiglett  
    setInterval(setPikachu, 2000); //2000 milliseconds = 2 seconds, every 2 second call setPikachu
}


function getRandomTile () {
    // math.random --> (0-1) * 9 = (0-9) --> round down to (0-9) integers 
    let num = Math.floor(Math.random() * 9);
    return num.toString();
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
    currDiglettTile.appendChild(diglett); 
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
    currPikachuTile.appendChild(pikachu); 
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
    //Reset Game board 
}); 