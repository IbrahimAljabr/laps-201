'use strict'

var name = prompt("What is your name ?");

var winter = prompt("do you like winter (yes/y - no/n)")
var winterLc = winter.toLowerCase();

switch (winterLc) {
    case "yes ":
    case "y":
        console.log(winterLc)
        alert("I dont like it")
        break;

    case "no":
    case "n":
        console.log(winterLc)
        alert("Me to I dont like it")
        break;

    default:
        alert("pick from the fowlloing (yes/y - no/n) ")
        break;
}

var black = prompt("do you like black color (yes/y - no/n)")
var blackLc = black.toLowerCase();

switch (blackLc) {
    case "yes ":
    case "y":
        console.log(blackLc)
        alert("its my fav color")
        break;

    case "no":
    case "n":
        console.log(blackLc)
        alert("its ok")
        break;

    default:
        alert("pick from the fowlloing (yes/y - no/n) ")
        break;
}

var cats = prompt("do you like Cats (yes/y - no/n)")
var catsLc = winter.toLowerCase();

switch (catsLc) {
    case "yes ":
    case "y":
        console.log(catsLc)
        alert("I like them to")
        break;

    case "no":
    case "n":
        console.log(catsLc)
        alert("why!!")
        break;

    default:
        alert("pick from the fowlloing (yes/y - no/n) ")
        break;
}

var games = prompt("do you like videogames (yes/y - no/n)")
var gamesLc = winter.toLowerCase();

switch (gamesLc) {
    case "yes ":
    case "y":
        console.log(gamesLc)
        alert("Me to I like videogames")
        break;

    case "no":
    case "n":
        console.log(gamesLc)
        alert("ok")
        break;

    default:
        alert("pick from the fowlloing (yes/y - no/n) ")
        break;
}

var chocolate = prompt("do you like chocolate (yes/y - no/n)")
var chocolateLc = chocolate.toLowerCase();

switch (chocolateLc) {
    case "yes ":
    case "y":
        console.log(chocolateLc)
        alert("Me to I love it")
        break;

    case "no":
    case "n":
        console.log(chocolateLc)
        alert("NO, bad for you")
        break;

    default:
        alert("pick from the fowlloing (yes/y - no/n) ")
        break;
}


alert("Welcome " + name);
var chances=0;

for (var i = 0; i < 4; i++) {

    var number = prompt("I was born in (year)? ")
    var numberInt = parseInt(number);
    console.log(numberInt);

    chances++;
    if (numberInt === 1995) {
        alert("that's correct")
        i = 10;

    }
    else if (numberInt < 1995) {
        alert("too low")

    }
    else if (numberInt > 1995) {
        alert("too high")

    }


}


if(chances<4){
    alert("Great Job! you have done it "+chances+"/4")
}
else{
    alert("you have take all of your chances 4/4 the correct answer is '1995'")
}

var attempts = 0;

for(var i=0;i<7;i++){
    attempts++;
var colorInput = prompt("Name one of my favorite colors ?")
var colors = ["black", "white", "gray", "silver", "brown", "yallow", "pink", "red", "blue", "green"];

console.log(colors+colorInput)
for (var ii=0; ii < 10; ii++) {


    
    if (colorInput == colors[ii]) {
        alert("yes "+i+"/6")
        ii=12;
        i=12;
    }
    
}
 {
     if(i<7){
    alert("no "+i+"/6")
     }else{
        alert("you have done it ! "+attempts+"/6"+' the correct answers are --> black, white, gray, silver, brown, yallow, pink, red, blue, green')
     }
}
}