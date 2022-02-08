/*
 * && - И
 * || - ИЛИ
 * !  - НЕ
 * */

/*
 *
 *  Сходи пожалуйста в магазин и купи молоко, а если будет яйца возьми десяток
 *
 * */

let hasMilk = true;
let hasEggs = true;

// купить молоко

if (hasMilk) {
  if (hasEggs) {
    // купить 10 молока
  }
}

if (hasMilk && hasEggs) {
}

function checkUserPermissions(user) {
  const hasPermissions = user.isPremium && user.admin;

  return hasPermissions;
}

checkUserPermissions({ isPremium: true, admin: true, name: 'vasya' });

function getUserName(user) {
  const userName = user.fullName || user.name;

  return userName;
}

function isUserGuest(user) {
  const userName = user.fullName || user.name;

  return userName;
}

console.log(getUserName({ fullName: 'qwe' }));
console.log(getUserName({ name: 'ssss' }));

function getUserNameWithValidation(user) {
  validateUser(user);

  const validatedUser = user && validateUser(user);
  const isGuest = isUserGuest(validatedUser);

  return userName;
}

let number = 1;
number = number + 1;
number += 1;
number++;
++number;

console.log('number', number);
