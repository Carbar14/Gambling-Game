
//Globals
var clicks = 0
let money = 100


document.getElementById("goodLuckButton").onclick = function(){click()};

clickText = document.getElementById("clicksText")
moneyText = document.getElementById("moneyText")
moneyText.innerHTML = `Money: ${money}`



function click(){
    console.log("click")
    clicks++
    clickText.innerHTML = `Clicks: ${clicks}`
    let random = Math.floor(Math.random() * 11)
    let guess = 1;
    console.log(guess)
    console.log(random)
    if(guess == random){win()}
}


function win(){
    clickText.innerHTML = `Clicks: ${clicks}`
    alert("Wow")
    alert("You did it")
    alert(`After ${clicks} clicks`)
    alert("You just you just won $")
    alert("Congrats")
    clicks = 0
}






