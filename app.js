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
        //<div id="0-8"></div> use to figure out which tile was clicked on, diglett or pikachu 
        let tile = document.createElement("div");
        tile.id = i.toString();
        //listen for a click and its going to call select tile 
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile); // taking the 9 tags and accessing this tag (board) inserting in the div tag 
    }

    //Intervals 
    setInterval(setDiglett, 1000); //1000 milliseconds = 1 second, every 1 second call setDiglett, its going to place a diglett in a tile 
    setInterval(setPikachu, 2000); //2000 milliseconds = 2 seconds, every 2 second call setPikachu, its going to place a pikachu in a tile
}

//Random number
function getRandomTile () {
    // math.random --> (0-1) * 9 = (0-9) --> round down to (0-8) get an integers 
    let num = Math.floor(Math.random() * 9); //returns a number between 0 and 1 multiply by 9 range becomes 0-9(does not included 9) round it down we get an integer 0-8
    return num.toString(); // return the number as a string for the ID
}

function setDiglett() {
    if(gameOver) { //player not able to select the tile  
        return;
    }
//Clear the previous tile
    if (currDiglettTile) { // clear all the tags within this div tag 
        currDiglettTile.innerHTML = ""; // empty string 
    }

    let diglett = document.createElement("img"); 
    diglett.src = "./diglett.png";

    let num = getRandomTile(); //function 
    //Resolved the conflict to show either diglett or pikachu 
    if (currPikachuTile && currPikachuTile.id == num) { // this means the tile already has pikachu on it 
        return; //pikachu is not set in this round 
    }
    currDiglettTile = document.getElementById(num); 
    currDiglettTile.appendChild(diglett); //takes a a random tile (div tag) and add the img inside it
}

function setPikachu() {
    if(gameOver) { //player not able to select the tile  
        return;
    }

    if (currPikachuTile) { // clear all the tags within this div tag 
        currPikachuTile.innerHTML = ""; // empty string 
    }

    let pikachu = document.createElement("img");
    pikachu.src = "./pikachu.png"; 

    let num = getRandomTile(); //function 
    //Resolved the conflict to show either diglett or pikachu 
    if (currDiglettTile && currDiglettTile.id == num) { // this means the tile already has diglett on it 
        return; // diglett is not set in this round 
    }
    currPikachuTile = document.getElementById(num);
    currPikachuTile.appendChild(pikachu); //takes a a random tile (div tag) and add the img inside it 
}

function selectTile() {
    if(gameOver) { //player not able to select the tile  
        return; 
    }

    if (this == currPikachuTile) { // refers to the tile that was clicked and check if that tile is the same tile that contains the pikachu img  
        score += 100; 
        document.getElementById("score").innerText = "Score: " + score.toString(); //Score update for the header tag 
    }
    else if (this == currDiglettTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); // Notify the player that the game is over and give score
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