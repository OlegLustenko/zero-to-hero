'use strict';

function checkNumber(a) {
  if (a == 2) {
    // Тогда это
  } else if (a == 10) {
    // Или это
  } else if (a == 42) {
    // Или вот это
  } else {
    // Если ничего не прошло, тогда это
  }
}

function checkNumber(a) {
  switch (a) {
    case 2:
      console.log(2);
      break;
    case 10:
      console.log(10);
      break;
    case 42:
      console.log(42);
      break;
    default:
      console.log('WEQWEQWEQW');
  }
}
