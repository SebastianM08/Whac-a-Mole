let currDiglettTile;
let currPikachuTile;


window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid for the game board in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
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

    if (currDiglettTile) {
        currDiglettTile.innerHTML = "";
    }

    let diglett = document.createElement("img");
    diglett.src = "./diglett.png";

    let num = getRandomTile();
    currDiglettTile = document.getElementById(num);
    currDiglettTile.appendChild(diglett); 
}

function setPikachu() {

    if (currPikachuTile) {
        currPikachuTile.innerHTML = "";
    }

    let pikachu = document.createElement("img");
    pikachu.src = "./pikachu.png"; 

    let num = getRandomTile();
    currPikachuTile = document.getElementById(num);
    currPikachuTile.appendChild(pikachu);
}