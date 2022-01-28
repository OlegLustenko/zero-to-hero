console.log('Contact List');
const myBooleantrue = true;

console.log(myBooleantrue);

// как прописывать числа
// как прописать дату рождения



const user1 = {
  Name: 'Anna',
  PhoneNumber: '380665670369',
  emaile: '',
  Address: {
    StreetNumber: 366,
    Street: 'klochkovskaya',
    ApartmentNumber: 1,
  },
};

console.log(user1);

const user2 = {
  Name: 'ihor',
  PhoneNumber: 380509984877,
  emaile: 'Igor@gmail.com',
  Address: {
    StreetNumber: 12,
    Street: 'Karagandinska',
    ApartmentNumber: 10,
  },
};

console.log(user2);

const user3 = {
  Name: 'ivan',
  PhoneNumber: 380503488777,
  emaile: 'Ivan@gmail.com',
  Address: {
    StreetNumber: 13,
    Street: 'Dynamovskaya',
    ApartmentNumber: 8,
  },
};

console.log(user3);

const user4 = {
  Name: 'Olga',
  PhoneNumber: 380506458977,
  emaile: 'Olga@gmail.com',
  Address: {
    StreetNumber: 17,
    Street: 'Ivanova',
    ApartmentNumber: 87,
  },
};

console.log(user4);

const user5 = {
  isDeleted: myBooleantrue,
};

console.log(user5);

const array = [user1, user2, user3, user4, user5];

console.log(array);

const user = {
  Name: 'Vyacheslav',
  PhoneNumber: 380667110569,
  emaile: 'Vyacheslav@gmail.com',
  FriendList: array,
  Address: {
    StreetNumber: 366,
    Street: 'klochkovskaya',
    ApartmentNumber: 1,
  },
};
console.log(user);
