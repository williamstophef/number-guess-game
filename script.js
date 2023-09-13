'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🏆 Correct';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 100;

// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '😒 No number!';

    //Correct guess code
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 You Win!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    //guess is too high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '🤦‍♂️ Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 Game Over!';
    }

    //guess is too low code
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '🙊 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 Game Over!';
    }
  }
});
