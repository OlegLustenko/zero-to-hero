function show3Numbers() {
  console.log('Number 1');
  console.log('Number 2');
  console.log('Number 3');
  console.log('Number 4');
  console.log('Number 5');
  console.log('Number 6');
  console.log('Number 7');
  console.log('Number 8');
  console.log('Number 9');
}

show3Numbers();

function showMyName(name) {
  // функция принимает аргумент name
  console.log('Привет меня зовут ' + name);
}

// я передаю в параметр функции "Олег"
showMyName('Олег'); // -> console.log('Привет меня зовут ' + "Олег")
showMyName('Вяч');
showMyName('Аня');
showMyName(null);
showMyName();

const myNumber = 20;
let myNumber3 = 20;

function showNumber() {
  const randomNumber = 2;
  console.log(randomNumber * myNumber);
}

showNumber(100);

/*
 * Напиши функцию, которая будет внутри себя генерировать рандомное число
 * и принимать в аргументах еще 1 число и отображать в консоле
 * перемноженые эти числа
 *
 * */
manyArguments(10, 20, 30, 'JavaScript');

function manyArguments(one, two, three, four) {
  const something = 'what is user name?';

  console.log(one);
  console.log(two);
  console.log(three);
  console.log(`${something} ${four}`);
}

console.log('--------------------------');
const manyArguments2 = function (one, two, three, four) {
  manyArguments(one, two, three, four);
  showNumber();
  showMyName('QWE');
};

manyArguments2(1, 2, 3, 4);

function sum(number1, number2) {
  return number1 + number2;
}

const number30 = sum(10, 20);

console.log('мое число:', number30);
