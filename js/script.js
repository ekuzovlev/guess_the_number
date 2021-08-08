'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let getUserInput = function() {
  let userInput = prompt('Угадай число от 1 до 100');
    if (userInput === null) {
      alert('До свидания');
      return;
    } else if (isNumber(userInput)){
      return +userInput;
    } else {
      alert('Введи число');
      return getUserInput();
    }
  };

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let guessNumber = getRandomIntInclusive(1, 100);
console.log(guessNumber);
let wrongAnswer = 0;
function checkNumber(guessNumber) {
  let userInput = getUserInput();

  let tryAgain = function() {
    let choice = confirm('Хотите сыграть еще?');
    if (choice === true) {
    let guessNumber = getRandomIntInclusive(1, 100);
    console.log(guessNumber);
      checkNumber(guessNumber);
    } else {
      alert('До свидания');
    }
  };

  function checkResult(){
    if (userInput === guessNumber) {
      alert('Поздравляю, Вы угадали!!!');
      wrongAnswer = 0;
      return tryAgain();
    } else if (userInput > guessNumber && wrongAnswer < 9) {
      wrongAnswer++;
      alert(`Загаданное число меньше, осталось ${10 - wrongAnswer} попыток`);
      return checkNumber(guessNumber);
    } else if (userInput < guessNumber && wrongAnswer < 9) {
      wrongAnswer++;
      alert(`Загаданное число больше, осталось ${10 - wrongAnswer} попыток`);
      return checkNumber(guessNumber);
    } else  {
      wrongAnswer = 0;
      return tryAgain();
    }
  }
  checkResult();
}

checkNumber(guessNumber);
