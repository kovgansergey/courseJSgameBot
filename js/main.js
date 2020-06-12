"use strict";

function gameBot () {
  function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }

  let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };
  
  let botsNumber = randomInteger(1, 100);
  let usersNumber = prompt('Угадай число от 1 до 100');
  
  function game(num) {
    if (num === null) {
      return;
    } else if (!isNumber(num)) {
      alert('Введи число!');
      usersNumber = prompt('Введи новый вариант.');
      game(usersNumber);
    } else if (+num > botsNumber) {
      alert('Загаданное число меньше.');
      usersNumber = prompt('Введи новый вариант.');
      game(usersNumber);
    } else if (+num < botsNumber) {
      alert('Загаданное число больше.');
      usersNumber = prompt('Введи новый вариант.');
      game(usersNumber);
    } else {
      alert('Правильно! Ты угадал. Было загадано число: ' + num);
    }
  }

  game(usersNumber);
}

gameBot();