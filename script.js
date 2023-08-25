'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayImage = function(message){
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {
        displayImage('No Number!');
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayImage('Correct Number!');

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        displayImage(guess > secretNumber ? 'Too High, Try Again' : 'Too Low, Try Again');
        score--;
        document.querySelector('.score').textContent = score;
    } else {
            displayImage('You Lost :(');
            document.querySelector('.score').textContent = 0;
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayImage('Start Guessing...');

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});