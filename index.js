
//Global Variables
let money = 100;
let bet = 0;
 
//Buttons
flipButton = document.getElementById("flipButton");
flipButton.onclick = function () {
    flipCoin();
};
 
tailsImage = document.getElementById("tails");
headsImage = document.getElementById("heads");
 
pickHeadsButton = document.getElementById("headsButton");
pickHeadsButton.onclick = function () {
    pickHeads();
};
 
pickTailsButton = document.getElementById("tailsButton");
pickTailsButton.onclick = function () {
    pickTails();
};

resetButton = document.getElementById("flipAgain");
resetButton.onclick = function(){bringBackAfterFlip()}
resetButton.style.display = "none"
 
//Text Thingys
moneyDisplay = document.getElementById("moneyHeader");
moneyDisplay.innerHTML = `Money: ${money}`;

hideThing("winText")
hideThing("headsPick")
hideThing("tailsPick")
 
//Functions
function flipCoin(bet) {
    hideThing("flippyButtons");
    let flip = Math.floor(Math.random() * 2 + 1);
    if (flip == 2) {
        //show heads image
        tailsImage.style.display = "block";
        if (pick == flip) {
            showThing("winText")
        }
    } else if(flip == 1){
        //show tails image
        headsImage.style.display = "block";
        if (pick == flip) {
            showThing("winText")
        }
    }
    showThing("flipAgain")
}

function pickHeads() {
    pick = 1;
    hideThing("pickButtons");
    showThing("headsPick")
}

function pickTails() {
    pick = 2;
    hideThing("pickButtons");
    showThing("tailsPick")
}

function hideThing(id) {
    let thing = document.getElementById(id);
    thing.style.display = "none";
}
 
function showThing(id) {
    let thing = document.getElementById(id);
    thing.style.display = "block";
}

function bringBackAfterFlip() {
    showThing("pickButtons")
    showThing("flippyButtons")
    hideThing("flipAgain")
    hideThing("heads")
    hideThing("tails")
    hideThing("winText")
    hideThing("headsPick")
    hideThing("tailsPick")
}
