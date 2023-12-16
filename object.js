// Объекты

let objWeek = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
};
console.log(objWeek);
console.log(objWeek[1]);

//  ключи объектов 
let personalData = {
    name: "Ivan",
    surname: 'Kulibin',
    patronymic: 'Petrovich',
    '1testKey': 'good friend',
    'test-key': 'super friend'
}

console.log(personalData);
console.log(personalData['surname'] + ' ' + personalData['name'] + ' ' + personalData['patronymic'] + ' ' + personalData['1testKey']);
console.log(personalData.surname + ' ' + personalData.name + ' ' + personalData.patronymic + ' ' + personalData['test-key']);

// Изменение элементов объектов 

let objChange = {
    a: 1,
    b: 2,
    c: 3
}

objChange['a'] = 1+2;
objChange.b = 4;
objChange.c = 3**2;
console.log(objChange);

// Добавление элементов в объекты 

let objAddElement = {};

objAddElement['a'] = 1;
objAddElement.b = 2;
objAddElement['test-11'] = 'Hello!'

console.log(objAddElement);

//  Массив ключей объекта

let objArrayKeys = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

let arrayKeys = Object.keys(objArrayKeys);
console.log(arrayKeys);
 
// Длина объекта

console.log(objArrayKeys.length); // undefined

console.log(arrayKeys.length); // 4

// Ключи объектов из переменных 

let objKeys = {
    1: 'a',
    b: 'Hi!',
    3: 'c',
    d: 'Bye!'
}

let key1 = 1;
let key2 = 'b';
let key3 = 3;
let key4 = 'd';

console.log(objKeys[key1]); // 'a'
console.log(objKeys['1']); // 'a'
console.log(objKeys[key2]); // 'Hi!'
console.log(objKeys[key3]); // 'c'
console.log(objKeys[key4]); // 'Bye!'
console.log(objKeys.key3); // undefined
console.log(objKeys.key4); // undefined


// Вычисляемые свойства 

let key = 'Wow';

let objProperty = {
    [key]: 1,
    [key + '1']: 2
}
console.log(objProperty);


// Оператор in 

let objIn = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

console.log('b' in objIn); // true
console.log('e' in objIn); //false

//Оператор delete
let objDelete = {
    x: 1,
    y: 2,
    z: 3
}

delete objDelete.x;
console.log(objDelete);

// Передача объектов по ссылке

let obj1 = {
    a: 1,
    b: 2,
    c: 3
}

let obj2 = obj1;
obj2.a = '!';
console.log(obj1);
console.log(obj2);

