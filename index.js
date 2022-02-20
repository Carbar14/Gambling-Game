
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
 
betUpButton = document.getElementById("betUp");
betUpButton.onclick = function(){betUp()}

betDownButton = document.getElementById("betDown");
betDownButton.onclick = function(){betDown()}
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
            win()
        }
    } else if(flip == 1){
        //show tails image
        headsImage.style.display = "block";
        if (pick == flip) {
            win()
        }
    }
    showThing("flipAgain")
}

function pickHeads() {
    pick = 1;
    hideThing("pickButtons");
    showThing("headsPick")
    doBet()
}


function pickTails() {
    pick = 2;
    hideThing("pickButtons");
    showThing("tailsPick")
    doBet()
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
    showThing("bet")
    bet = 0;
    document.getElementById("betText").innerHTML = `${bet}`
}

function betUp(){
    if(bet >= money){
    }else {
        bet++
    }
    document.getElementById("betText").innerHTML = `${bet}`
}

function betDown(){
    if(bet >= 1){
        bet--

    }
    document.getElementById("betText").innerHTML = `${bet}`
}

function doBet(){
    hideThing("bet")
    money -= bet
    moneyDisplay.innerHTML = `Money: ${money}`;
}  

function win(){
    showThing("winText")
            money += bet*2
            moneyDisplay.innerHTML = `Money: ${money}`;
           
}