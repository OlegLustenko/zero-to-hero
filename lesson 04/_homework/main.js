/*
TASK 1
Напишите функцию которая будет возвращать объект с свойством name,
а значением будет первый аргумент функции
*/

function task1(name) {
  return {
    name: name,
  };
}

/*
TASK 2
Функция будет принимать 1 аргумент - ОБЪЕКТ у которого будет свойство name

и возвращать новый объект изменяя свойство name в большой регистр

*/

function task2(someObject) {
  return {
    name: someObject.name.toUpperCase(),
  };
}

task2({ name: 'qwe' }); // {name: 'QWE'}

/*
1. Напишите функцию которая принимает в
качестве аргумента массив и элемент массива
и добавляет элемент в конец массива
*/

function push(arr, someItem) {
  arr[arr.length] = someItem;
  return arr;
}

let myArray = [1, 2, 3];
let myArray2 = [1, 2, 3, 10, 100, 2];

const qwe = push(myArray2, 9999);

console.log(myArray2);

/*
2. Напишите функцию которая получает 3 параметра
и возвращает объект типа:
    {
      argument1: param1,
      argument2: param2,
      argument3: param3,
    }
*/

function task3(one, two, there) {
  return {
    argument1: one,
    argument2: two,
    argument3: there,
  };
}

///////////////////////////////////////////////
/*
4.  Напишите функцию которая принимает 3 аргумента,
    третий аргумент - это объект.

    Функция создает новый объект и добавляет ключ
    это первый аргумент, а значение - второй аргумент
    Проверяет если есть свойство name в переданном объекте,
    тогда добавляет данное свойство в наш объект и возвращает новый объект

*/

function task4(key, value, someObject) {
  const myObject = {};
  myObject[key] = value;

  if (someObject.name !== undefined) {
    myObject.name = someObject.name;
  }

  return myObject;
}

function validateUser(name, password) {
  // если пользотватель есть true
  return true;
}

function getWeather(name, password) {
  // если пользотватель есть true
  return true;
}

/*
{
 city: 'Kharkiv' | 'Kiev'
 tempratureType: 'farengeit', 'celsium'
}
* */
function weatherWidget(name, password, options) {
  // ----
  // Дистиляция логики
  // ----

  if (validateUser(name, password)) {
    options.server = 'EU';
    const actualWeather = getWeather(options);

    return actualWeather;
  }
}

const user = task4('salary', 3000, { name: 'JavaScript' });
/*
{
 salary: 3000,
 name: 'JavaScript'
}
* */
const user2 = task4('salary', 3000, { id: 'asdio8123' });
/*
{
 salary: 3000,
}
* */

/////////////////////////////////

/*
-> @@ SUPER !
  Напишите функцию, которая будет
   возвращать 'Fizz' если передаваемый параметр кратен 3,
   'Buzz', если передаваемый параметр кратен 5,
   'FizzBuzz' - если параметер кратен 3 и 5
   Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/

function super1(num) {
  const fizz = 'Fizz';
  const buzz = 'Buzz';
  const a = !(num % 3);
  const b = !(num % 5);

  if (a && b) {
    return fizz + buzz;
  }

  if (a) {
    return fizz;
  }

  if (b) {
    return buzz;
  }

  return num;
}

console.log(super1(3));
console.log(super1(5));
console.log(super1(15));

/* -> @@ SUPER 2

Напишите функцию, которая будет принимать 4 аргумента,
последний всегда функция.

Добавьте первые 3 аргумента в массив
и вызовите переданную функцию с данным массивом

*/

function super2(one, two, three, four) {
  const myArray = [one, two, three];

  four(myArray);
}

function myFunction(something) {
  console.log(something);
}

super2(100, 200, 300, myFunction);
