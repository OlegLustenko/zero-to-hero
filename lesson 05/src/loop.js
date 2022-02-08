// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }

function numbersBetween(a, b) {
  console.log('СТАРТ');

  for (let index = a; index <= b; index++) {
    console.log(index);
  }
  console.log('КОНЕЦ');
}

// numbersBetween(3, 10); // 3,4,5,6,7,8,9,10
// numbersBetween(2, 5); // 2,3,4,5

function numbersBetweenOtherWay(a, b) {
  console.log('СТАРТ');

  let index = 0;
  while (index < b) {
    console.log(index);

    index++;
  }

  console.log('КОНЕЦ');
}

// numbersBetweenOtherWay(2, 222); // 3,4,5,6,7,8,9,10

const myObject = {
  name: 'qwe',
  surname: 'www',
  hasFriends: true,
  cars: ['123'],
};

function loopOverObject(objectParam) {
  for (let key in objectParam) {
    console.log('KEY: ', key);
    console.log('VALUE: ', objectParam[key]);
  }
}

loopOverObject(myObject);

function displayAllArrayItems(array) {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    console.log(item);
  }
}

displayAllArrayItems([100, 200, 300, 400]);
