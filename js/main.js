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
  
  function game(num, i) {
    if (+num === botsNumber) {
      if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
        gameBot();
      } else {
        alert('До свидания');
        return;
      }
    } else if (i <= 0) {
      if (confirm('Попытки закончились, хотите сыграть еще?')) {
        gameBot();
      } else {
        alert('До свидания');
        return;
      }
    } else if (num === null) {
      alert('До свидания');
      return;
    } else if (!isNumber(num)) {
      alert('Введи число!');
      usersNumber = prompt('Введи новый вариант.');
      game(usersNumber, i);
    } else if (+num > botsNumber) {
      alert('Загаданное число меньше, осталось попыток ' + i);
      usersNumber = prompt('Введи новый вариант.');
      game(usersNumber, --i);
    } else if (+num < botsNumber) {
      alert('Загаданное число больше, осталось попыток ' + i);
      usersNumber = prompt('Введи новый вариант.');
      game(usersNumber, --i);
    }
  }

  game(usersNumber, 9);
}

gameBot();