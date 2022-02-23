/*
 * Посчитайте сумму всех элементов внутри массива
 *
 * */

function sum(array) {
  let a = 0;

  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    a = a + item;
  }

  return a;
}

console.log(sum([1, 2, 3])); // 6
console.log(sum([20, 30, 50])); // 100

/*
 * 1. Нужно сделать переменную за циклом к которой я буду прибавлять значение внутри цикла
 * 2. Написать цикл в котором мы будем проходиться по элементам массива
 * 3. Получить элемент массива в цикле
 * 4. Прибавить элемент массива к переменной
 * 5. Вернуть переменную внутри функции
 * */

/*
 *
 * TASK 1
 * Посчитайте количество букв а, в передаваемом параметре
 *
 * */

let randomString = 'aaa b a w c ';

let user = {
  name: 'Albina',
};

let javaScript = {
  html: 'JavaScript',
};

function countLetterA(str) {}

countLetterA(user.name); // 1
countLetterA(javaScript.html); // 2
countLetterA(randomString); // 4

/* TASK 3
 * Посчитайте сколько одинаковых слов в предложении.
 * Функция должна возвращать объект у которого свойства
 * это повторяющиеся слово,
 * а значение это количество повторений
 * */

// Both - Java - and - Java - Script - is - programming - and - programming - OOPBased

function wordCounter(sentence) {}

console.log(
  wordCounter(
    'Both Java and Java Script is programming and programming OOPBased Language'
  )
);
