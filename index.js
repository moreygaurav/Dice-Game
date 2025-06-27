var randomNum1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = randomNum1+".jpeg";

var randomImageSourse1 = "/assets/"+randomDiceImage1;

document.querySelectorAll("img")[0].setAttribute("src",randomImageSourse1);


var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = randomNum2 + ".jpeg";

var randomImageSourse2 = "/assets/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src",randomImageSourse2);

if (randomNum1 > randomNum2) {
    document.querySelector("p").textContent = "Player 1 Win";
} else if (randomNum2 > randomNum1) {
document.querySelector("p").textContent = "Player 2 Win";
} else {
    document.querySelector("p").textContent = "It's a drow";
}
