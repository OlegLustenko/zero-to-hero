function returnMyName(name) {
  return `I ${name}`;
}

const name2 = returnMyName('OLEH');

// console.log(name2);

const myArray = [1, 2, 3];

myArray.push('something');
const s = myArray.pop();

// console.log(s);

const firstElem = myArray.shift();

// console.log(firstElem);

// console.log(myArray);

myArray.unshift('WWWWWWWWWWWW');

// console.log(myArray);

/*
 * Напиши функцию которая будет принимать 1 аргумент массив
 * И добавлять вначало и в конец массива объект с свойством
 * name внутри объекта будет твое имя
 *
 *
 * */

function task1(arr) {
  const user = { name: 'Oleh' };

  arr.unshift(user);
  arr.push(user);
}

let newArr = [1, 100, 200, 300, 400];

task1(newArr);
let newArrSliced = newArr.slice();

// console.log('1:', newArrSliced);
// console.log('2:', newArr);

// newLife.splice(1, 0, 999, 123123);
// console.log(newLife);

const newLife = [111, 222, 333, 444, 222];
const qwe = newLife.concat([1000, 2000, 4000]);
// console.log('QWE:', qwe);
// console.log('QWE reversed:', qwe.reverse());

console.log(newLife.join('______'));
const sentence = 'Сколько нужно программистов чтобы сделать проект';

function countWordsInSentence(word) {
  return word.split(' ').length;
}

countWordsInSentence(sentence);

function displayConsoleLog(element) {
  console.log(element);
}

/*
 *
 * У меня будет фукнция forEach
 * */

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(newLife, function (elem) {
  console.log(elem);
});

function displayEachItemInArray(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  // }

  arr.forEach(function (elem) {
    console.log(elem);
  });
}

displayEachItemInArray(newLife);

/*
 * Напиши функцию которая будет перебирать массив
 * и показывает только четные элементы в массиве
 *
 * */

function showOnlyOddNumbers(someArray) {
  someArray.forEach((elem) => {
    if (elem % 2 === 0) {
      console.log(elem);
    }
  });
  console.log('----------------------');
}

const arr = [1, 2, 3, 4, 5, 6, 7, 78]; // 2, 4, 6, 78
const arr2 = [100, 200, 300, 400, 1, 3, 401]; // 2, 4, 6, 78

showOnlyOddNumbers(arr);
showOnlyOddNumbers(arr2);

let listOfCompanies = [
  {
    company: 'ASIMILINE',
    name: {
      last: 'Watkins',
      first: 'Lindsay',
    },
    eyeColor: 'brown',
    age: 20,
    picture: 'http://placehold.it/32x32',
    balance: '$1,091.09',
    isActive: true,
    guid: '294814e3-4c89-428f-b0c9-da5c4c37ea5e',
    index: 0,
    _id: '584babb6eeb4137cf14c37a3',
  },
  {
    company: 'ENJOLA',
    name: {
      last: 'Price',
      first: 'Greene',
    },
    eyeColor: 'brown',
    age: 39,
    picture: 'http://placehold.it/32x32',
    balance: '$3,533.55',
    isActive: true,
    guid: 'e7b0824f-d6d1-4a82-b2c5-cd7a1ec8310c',
    index: 1,
    _id: '584babb6c7be9c2398ed263f',
  },
  {
    company: 'ENJOLA',
    name: null,
    eyeColor: 'brown',
    age: 22,
    picture: 'http://placehold.it/32x32',
    balance: '$1,395.22',
    isActive: false,
    guid: '0735d8d9-a165-4ad1-893f-e821da37bf63',
    index: 2,
    _id: '584babb6cca4dbefa6001820',
  },
  {
    company: 'TALKOLA',
    name: {
      last: 'Cooke',
      first: 'Lea',
    },
    eyeColor: 'blue',
    age: 31,
    picture: 'http://placehold.it/32x32',
    balance: '$3,074.16',
    isActive: false,
    guid: '7d13cbc4-6b4d-4954-b3d3-df3cfe5f2373',
    index: 3,
    _id: '584babb6391a2b568f1e9416',
  },
  {
    company: 'GEEKKO',
    name: {
      last: 'Webb',
      first: 'Kline',
    },
    eyeColor: 'blue',
    age: 34,
    picture: 'http://placehold.it/32x32',
    balance: '$1,520.21',
    isActive: false,
    guid: '2b179de0-a659-4423-b3c4-11c6490e5c74',
    index: 4,
    _id: '584babb66d6ea73e8ed51208',
  },
];

/*
 * Если возраст человека больше 30, тогда добавить поле premium: true
 * Если меньше, то ничего не делаем
 * */

const users = listOfCompanies.map(function (elem) {
  return {
    fullName: elem.name.first + ' ' + elem.name.last,
  };
});

/*
 * Если возраст человека больше 30, тогда добавить поле premium: true
 * Если меньше, то ничего не делаем
 * */

const users2 = listOfCompanies.filter(function (user) {
  if (!user.name) {
    return true;
  }
});

console.log(users2);
