const birthday = new Date('12.01.99').toLocaleDateString();

// console.log(birthday)


const myName = 'Oleh';
const mySurname = "Lustenko";
const thirdWayOfString = `privet`;


const fullName = myName + ' ' +
    ' ' + mySurname;
const fullName2 = `${myName} 113331qweqweqweqwe qqweqweqwe  qwe qw eqwe 
asdasdqaweq
asda
asd
${mySurname}`;

// console.log(fullName);
// console.log('-----');
// console.log(fullName2);

/*
* Отобразите строку на двух рядках
* Используя Интерполяцию строки
*
* */


const password = 'my super secret password';
// console.log(password[0]);
// console.log(password[1]);
// console.log(password[2]);
// const myArray = [100, 200, 300];
// console.log(myArray);

const upperCasePassword = password.toUpperCase();

const lowerCasePassword = upperCasePassword.toLowerCase();

// console.log(password);
// console.log(upperCasePassword);
// console.log(lowerCasePassword);

const slicedPassword = password.slice(3)
// console.log(slicedPassword);

const yourName = 'oleh lustenko';
const motherName = 'Valentina lustenko';

/*
* Запишите свое имя маленькими буквами
* Преобразуйте первую букву в вашем имени к заглавном регистре
* Отобразите результат в консоле
*
* oleh -> Oleh
* */

const restOfName = yourName.slice(1);
const firstLetter = yourName[0].toUpperCase();

// console.log(firstLetter + restOfName);

console.log(yourName.split(' '));
console.log(yourName.toUpperCase().toLowerCase()); //
console.log(yourName
    .replace('oleh', 'Anna')
    .replace('lustenko', 'Gorlova')
);

console.log(yourName.includes('h', 3));
console.log(10 % 2);

// Модуло %

console.log(!undefined);

if (motherName.length < myName.length) {
    console.log('YES WE CAN!')
} else if (10 == 1){
    console.log('PRIVET SLAVIK TI KRASAVA TAWI PROGRRAMMIROVANIE!')
} else if (1000 == 1){
    console.log('PRIVET SLAVIK TI KRASAVA TAWI PROGRRAMMIROVANIE!')
} else if (1444 == 1){
    console.log('PRIVET SLAVIK TI KRASAVA TAWI PROGRRAMMIROVANIE!')
} else if (12 == 1){
    console.log('PRIVET SLAVIK TI KRASAVA TAWI PROGRRAMMIROVANIE!')
} else if (14 == 1){
    console.log('PRIVET SLAVIK TI KRASAVA TAWI PROGRRAMMIROVANIE!')
} else {
    console.log('МЫ ТУТ!')
}


/*
* Есть 2022 год нужно и изъяить 22 при помощи модуло
* Отобразите в консоле 22, используя модуло
* */

const course = {
    name: 'ZERO TO HERO'
}

course.salary = 1000;
course.numberOfLessons = 32;
course.numberOfLessons = 32;
course['privet kak dela'] = 1500;

console.log(course);

console.log(typeof 1) // number
console.log(typeof 'qwe') // string
console.log(typeof course) // object
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof NaN) // number
console.log(typeof []) // object



