let pocketNumber;
let min = 0;
let max = 8;

let gameWindow = confirm('Do you want to play a game?');
if (gameWindow) {
    // constMath.floor(Math.random() * max) + min;
    pocketNumber = prompt('enter a number of pocket on which the ball could land');
} else {
    alert('You did not become a billionaire, but can.');
}

const mathNumber = Math.floor(Math.random() * max) + min;
console.log(mathNumber);