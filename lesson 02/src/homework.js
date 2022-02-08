/*

 1. Составить предложение из нижестоящих переменных:
 "Сколько нужно программистов чтобы сделать проект ? 1, 25, команда"
 */

let numbers = [25, 1];
let project = 'проект';
let team = `команда`;
let howMuch = 'Сколько';
let sentence = 'нужно программистов чтобы сделать проект ?';

let dev1 = numbers[1];
let dev2 = numbers[0];

let task1 = `${howMuch} ${sentence} ${dev1}, ${dev2}, ${team}`;

/*
 2. Составьте предложение из представленного массива
 и выведите предложение в консоль;
 "Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью.
  Он не был больше ни телом, к которому рано или поздно ..."

  // index +++
 */

let array = [
  'Он',
  'был больше ни телом, к которому рано или поздно',
  'он обнаружил',
  'не',
  'Так, когда Будда достиг Просветления',
  '...',
  'что больше',
  'ощущает себя мишенью',
  'не',
];

let homeSentence; /* ЗДЕСЬ ВАШ КОД */

/*
 3. Добавьте 4 новых свойства в объект используя
    квадратные скобки и точку.
 */

let myObj = {};
let qwerty = 'something';

myObj['name'] = 'userName';
myObj['qwe'] = '1';
myObj['zxc'] = '2';
myObj[qwerty] = 'ssss'
myObj.s = '3';



console.log(myObj);

/*
 4. Преобразуйте строку x,
    в максимально удобно читаемый для программиста вид
 */

let frameworks = [4.7, 'Angular', '6Angular', 'React/Redux'];

let x =
  'google \
released ' +
  'new version\
 ' +
  frameworks[1] +
  Math.floor(frameworks[0]) +
  '\
But real speed is ' +
  `${frameworks[frameworks.length - 1]}`;

console.log(x);

// TASK 5
// Создайте объект
// Добавьте данному объекту свойства myCars, speed
// выведите в консоле предложение ->

const someUser = {
  myCars: 'bmv, vaz',
  speed: 360,
};

console.log(`Все мои ${someUser.myCars}, ездят на скорости ${someUser.speed}`);

// Все мои bmw, vaz ездят на скорости 360

// TASK 6
// Преобразуйте строку JaScript в JavaScript
let test = 'JaScript';

//console.log(test) // JavaScript
// LINKS
// https://dorey.github.io/JavaScript-Equality-Table/
