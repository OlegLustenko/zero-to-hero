// console.log('Привет Zero To Hero');
// const resultOfAlert = alert('Привет ТУТ ОПЯТЬ!');
//
// console.log(resultOfAlert);
//
// prompt('Как тебя зовут?', 'Введите имя'); //возвращает значение
// confirm('Согласен?'); // возвращает true или false
// console.log('ЧТО НОВОГО ?');

/*
 * Отобразите 2 модальных окна, в которые пользователь вводит число.
 *
 * Дальше выведите в модальном окне, сумму первых двух введеных чисел
 * Если пользователь ввел не число, мы начинаем всё сначала и спрашиваем
 *
 * первое и второе число заново, если он ввел число мы отображаем сумму
 * */

// const userAnswer1 = +prompt('Введите число 1');
// const userAnswer2 = +prompt('Введите число 2');
// alert(userAnswer1 + userAnswer2);

function askUserNumbers() {
  const userAnswer1 = +prompt('Введите число 1');
  const userAnswer2 = +prompt('Введите число 2');

  if (isNaN(userAnswer1)) {
    alert('НЕПРАВИЛЬННО ВВОДИ ЧИСЛО!');
    askUserNumbers();
  }

  if (isNaN(userAnswer2)) {
    alert('НЕПРАВИЛЬННО ВВОДИ ЧИСЛО! ДВАДВАДВА');
    askUserNumbers();
  }

  alert(userAnswer1 + userAnswer2);
}

askUserNumbers();

/*
 * Отобразите модальное окно в котором можно ввести число
 * Если введенное число больше 150 -> отобразите в консоле -> Тайланд
 * Если пользователь меньше 100, тогда Бали
 */

// Number(userAnswer1) -> number
// +userAnswer1 -> number
