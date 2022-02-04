/*
 * У этой функции есть имя sayGreetings
 * У этой функции 1 аргумент name
 *
 *
 * */

function sayGreetings(name) {
  if (typeof name !== 'string') {
    console.log('ОШИБКА ! ВСЕ ПЛОХО! ПЕРЕДАЙТЕ СТРОКУ!');
    return;
  }
  console.log('Привет, мое имя: ' + name);
}

sayGreetings('Олег');

sayGreetings({ ahahah: 'я объект' });
sayGreetings([1, 2, 3, 4]);
sayGreetings([{ name: 'Саша' }, { name: 'Петя' }]);

function task2(arg) {
  const myObj = {
    name: arg.name.toUpperCase(),
  };

  return myObj;
}

task2({ name: 'xxx' });
task2({ name: 'www' });
task2({ name: 123 });

let x = function qwe () {
  console.log('qwe');
};

let es6 = (something) => {
  console.log('qwe');
};
