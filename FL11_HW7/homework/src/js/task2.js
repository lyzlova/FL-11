let pocketNumber;
let min = 0;
let max = 8;
let mathNumber;
let newGame;
let prize = 0;
let numberI = 3;
let i;
let prizeTwHundr = 200;
let prizeHundr = 100;
let prizeFift = 50;
let prizeTwFive = 25;
let numberTwo = 2;
let numberFour = 4;

let gameWindow = confirm('Do you want to play a game?');
if (gameWindow) {
    mathNumber = Math.floor(Math.random() * max) + min;

    for (i = numberI; i >= 1; i--) {
        pocketNumber = +prompt(`Choose a roulette pocket number from ${min} to ${max}
Attempts left: ${i} 
Total prize: ${prize}$
Possible prize on current attempt: 100$ \r\n
Enter a number of pocket on which the ball could land`);
        if (pocketNumber === mathNumber && i === numberI) {
            prize += prizeHundr;
            alert(`Congratulation, you won! Your prize is: ${prize}$.`);
            let changeContGame = confirm(`Do you want to continue?`);
            if (changeContGame) {
                i = numberI;
                max += numberFour;
                mathNumber = Math.floor(Math.random() * max) + min;
                pocketNumber = +prompt(`Choose a roulette pocket number from ${min} to ${max}
Attempts left: ${i} 
Total prize: ${prize}$
Possible prize on current attempt: 200$ \r\n
Enter a number of pocket on which the ball could land`);
                if (pocketNumber === mathNumber && i === numberI) {
                    prize += prizeTwHundr;
                    i = numberTwo;
                    alert(`Congratulation, you won! Your prize is: ${prize}$.`);
                    let changeContGame = confirm(`Do you want to continue?`);
                    if (changeContGame) {
                        mathNumber = Math.floor(Math.random() * max) + min;
                        pocketNumber = +prompt(`Choose a roulette pocket number from ${min} to ${max}
Attempts left: ${i} 
Total prize: ${prize}$
Possible prize on current attempt: 100$ \r\n
Enter a number of pocket on which the ball could land`);
                        if (pocketNumber === mathNumber && i === numberTwo) {
                            i = 1;
                            prize += prizeHundr;
                            alert(`Congratulation, you won! Your prize is: ${prize}$.`);
                            let changeContGame = confirm(`Do you want to continue?`);
                            if (changeContGame) {
                                mathNumber = Math.floor(Math.random() * max) + min;
                                pocketNumber = +prompt(`Choose a roulette pocket number from ${min} to ${max}
Attempts left: ${i} 
Total prize: ${prize}$
Possible prize on current attempt: 50$ \r\n
Enter a number of pocket on which the ball could land`);
                                if (pocketNumber === mathNumber && i === 1) {
                                    prize += prizeFift;
                                    alert(`Congratulation, you won! Your prize is: ${prize}$.`);
                                } else {
                                    alert(`Attempts ended. Your prize is: ${prize}$`);
                                }
                            } else {
                                alert(`Thank you for your participation. Your prize is: ${prize}$`);
                            }
                        } else {
                            alert(`Thank you for your participation. Your prize is: ${prize}$`);
                        }
                    } else {
                        alert(`Thank you for your participation. Your prize is: ${prize}$`);
                    }
                } else if (pocketNumber === mathNumber && i === numberTwo) {
                    prize += prizeHundr;
                    alert(`Thank you for your participation. Your prize is: ${prize}$`);
                } else if (pocketNumber === mathNumber && i === 1) {
                    prize += prizeFift;
                    alert(`Congratulation, you won! Your prize is: ${prize}$.`);
                } else if (i === 1) {
                    alert(`Attempts ended. Your prize is: ${prize}$`);
                }

            } else {
                alert(`Thank you for your participation. Your prize is: ${prize}$`);
                newGame = confirm('Do you want to play again?');
            }
        } else if (pocketNumber === mathNumber && i === numberTwo) {
            prize += prizeFift;
            alert(`Congratulation, you won! Your prize is: ${prize}$.`);
        } else if (pocketNumber === mathNumber && i === 1) {
            prize += prizeTwFive;
            alert(`Thank you for your participation. Your prize is: ${prize}$`);
        } else if (i === 1) {
            alert(`Attempts ended. Your prize is: 0 $`);
        } else if (i > 1) {
            newGame = confirm(`Your prize is: ${prize} $. Do you want to play again?`);
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}