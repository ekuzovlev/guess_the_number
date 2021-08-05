'use strict';

// Написать игровой бот.
// "Загадывание случайного числа от 1 до 100"
// Используйте функции alert, confirm, prompt для общения с пользователем.
// Что должна делать программа:
// — спрашивает пользователя: "Угадай число от 1 до 100".
// — если пользовательское число больше, то бот выводит "Загаданное число меньше" и
//   предлагает ввести новый вариант;
// — если пользовательское число меньше, то бот выводит "Загаданное число больше" и
//   предлагает ввести новый вариант;
// — если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает
//   ввести новый вариант;
// — если пользователь нажимает "Отмена", то игра заканчивается и выводится сообщение "Игра окончена".
// —  если пользовательское число равно загаданному, то игра заканчивается и выводит сообщение
//   "Поздравляю, Вы угадали!!!".

// Программа должны быть выполнена с помощью рекурсии, без единого цикла.
// Загаданное число должно храниться «в замыкании»

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let getUserInput = function() {
  let userInput = prompt('Угадай число от 1 до 100');
    if (userInput === null) {
      return 0;
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

const guessNumber = getRandomIntInclusive(1, 100);
console.log(guessNumber);

function checkNumber(guessNumber) {
  let userInput = getUserInput();
  console.log('userInput:', userInput); //Чтобы легче было угадать ;-)

  function checkResult(){
    if (userInput === guessNumber) {
      alert('Поздравляю, Вы угадали!!!');
    } else if (userInput === 0){
      return;
    } else if (userInput > guessNumber) {
      alert('Загаданное число меньше');
      return checkNumber(guessNumber);
    } else if (userInput < guessNumber) {
      alert('Загаданное число больше');
      return checkNumber(guessNumber);
    }
  }
  checkResult();
}

checkNumber(guessNumber);
