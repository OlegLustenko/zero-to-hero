/*
 1.
* Напишите функцию которая будет принимать 1 аргумент и в зависимости от типа аргумента
*
* Если тип аргумента число или объект -> возвращать true
* Если тип аргумента функция -> возвращать false
* Если тип аргумента Строка и длина этой строки не равна 10 -> возвращать "длина вашей строки: <длина строки>
*                            Если длина 10 -> 'you win'

* */

function oneargument(myArgument) {
  if (typeof myArgument === 'number' || typeof myArgument === 'object') {
    return true;
  }

  if (typeof myArgument === 'function') {
    return false;
  }

  if (typeof myArgument === 'string') {
    if (myArgument.length === 10) {
      return 'you win';
    }

    return `длина вашей строки: ${myArgument.length}`;
  }
}

/*
 2. Перепишите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */

// 1. FizzBuzz 3, 5, 3 && % 5

function fizzBuzz(number) {
  if (!(number % 3) && !(number % 5)) {
    console.log('FizzBuzz');
  } else if (!(number % 3)) {
    console.log('Fizz');
  } else if (!(number % 5)) {
    console.log('Buzz');
  } else {
    console.log(number);
  }
}

function fizzBuzz100(number) {
  for (let i = 1; i <= number; i++) {
    fizzBuzz(i);
  }
}

fizzBuzz100(100);

/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

// // /*
//  3. Напишите функцию которая принимает 1 аргумент - массив
//  И возвращает новый массив содержащий типы значений переменных
//  */
function task3(myArray) {}

const myArray = [
  1,
  null,
  undefined,
  'str',
  {},
  [],
  function () {},
  'str',
  'str',
  'str',
  'str',
  'str',
  1002,
];

task3(myArray);

// typeof

// let arr = [1, null, undefined, 'str', {}, [], function() {}];
// let arr = ['number', 'object', undefined, 'string', 'object', 'object', 'function'];

/*
 1. @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если age NaN,
 тогда добавляет данному объекту свойство unknownAge: true
 */
