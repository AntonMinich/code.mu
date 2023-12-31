// Объекты

let objDay = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
}

console.log(objDay);

let objPerson = {
    name: 'Ivan',
    surname: 'Kulibin',
    patronymic: 'Ivanovich'
}

console.log(objPerson['name'] + ' ' + objPerson['surname'] + ' ' + objPerson['patronymic'])


let objDate = {
    year: 2023,
    month: 'june',
    day: 25
}

console.log(objDate.year + ' ' + objDate.month + ' ' + objDate.day)


let objRandom = {
    a: 1,
    b: 2,
    c: 3
}
objRandom.a = objRandom.a ** 2;
objRandom.b = objRandom.b ** 2;
objRandom.c = objRandom.c ** 2;

console.log(objRandom);

let objEmpty = {};

objEmpty.a = 1;
objEmpty.b = 2;
objEmpty['c'] = 3;

console.log(objEmpty);

let objArrayKeys = {x: 1, y: 2, z: 3};
let arrayKeys = Object.keys(objArrayKeys);

console.log(arrayKeys);

let objVariable = {x: 1, y: 2, z: 3};
let keysVariable = 'x';
console.log((objVariable[keysVariable]));
console.log(objVariable['x']);
delete objVariable['x'];
console.log(objVariable['x']);

// Создайте объект с числовыми значениями и напишите код, который сложит все значения и выведет сумму в консоль.

let numbersObj = {a: 5, b: 10, c: 8, d: 3};
let resNumberObj = numbersObj['a'] + numbersObj['b'] + numbersObj.c;
console.log(resNumberObj);

// Создайте объект с текстовыми значениями и напишите код, который объединит все строки в одну и выведет её в консоль.
let stringsObj = {name: 'Alice', city: 'Wonderland', hobby: 'coding'};
let strStringsObj = stringsObj.name + ' ' + stringsObj.city + ' ' + stringsObj.hobby;
console.log(strStringsObj);

// Создайте объект с числовыми значениями и напишите код, который удвоит все значения и выведет новый объект в консоль.
let valuesObj = {x: 3, y: 7, z: 5, w: 2};
let newValuesObj = {};
newValuesObj.x = valuesObj['x'] * 2;
newValuesObj.y = valuesObj['y'] * 2;
newValuesObj.z = valuesObj['z'] * 2;
newValuesObj.w = valuesObj['w'] * 2;
console.log(newValuesObj);




