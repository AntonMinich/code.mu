// Перебор массива циклом for-of

let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
    console.log(elem);
}

// Перебор объекта циклом for-in

let obj = {
    name: 'Ivan',
    surname: 'Kulibin',
    age: 103,
    location: 'USSR'
}

for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}


// Цикл while

let i = 0;
while (i <= 15) {
    console.log (i)
    i++
}

let r = 0;
while (r <= 3) {
    console.log ('Wow')
    r++
}

// Цикл for

for (let i = 0; i <= 10; i++) {
    console.log(i);
}


// Цикл for для массивов

let arr2 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

for (let i = arr2.length-1; i >= 0; i--) {
    console.log(arr2[i]);
}


// Условия в циклах 
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

let arr3 = [2, 5, 9, 15, 1, 4];

for (let i = 0; i <= arr3.length; i++) {
    if (arr3[i] >= 3 && arr3[i]<=10) {
        console.log(arr3[i]);
    }
}

// Выведите в консоль те элементы объекта, значения которых - нечетные числа.

let obj2 = {a: 1, b: 2, c: 3, d: 4, e: 5};

for (let key in obj2) {
    if (obj2[key] % 2 != 0) {
        console.log(obj2[key]);
    }
}


// Накопление чисел в циклах
// Найдите сумму четных чисел от 2 до 100

let res = 0;
for (let i = 2; i <= 100; i++) {
    if(i % 2 == 0) {
        res += i;
    }
    console.log(res);
}

// Найдите сумму нечетных чисел от 1 до 99.

res = 0;
for (let i = 1; i <= 99; i++) {
    if(i % 2 != 0) {
        res += i;
    }
    console.log(res);
}

// Найдите произведение целых чисел от 1 до 20.
let res2 = 1;
for(let i = 1; i <= 20; i++) {
    res2 *= i;
}
console.log(res2);

// Найдите сумму элементов этого массива.
let arr4 = [2, 5, 9, 3, 1, 4];
let result = 0;
for (let elem of arr4) {
    result += elem;
}
console.log(result);


arr4 = [2, 5, 9, 3, 1, 4];
result = 0;
for(let i = 0; i < arr4.length; i++) {
    result += arr4[i];
}
console.log(result);

// Найдите сумму элементов элементов, являющихся четными числами.
arr4 = [2, 5, 9, 3, 1, 4];
result = 0;

for( let elem of arr4) {
    if( elem % 2 == 0) {
        result += elem;
    }
}
console.log(result);


arr4 = [2, 5, 9, 3, 1, 4];
result = 0;

for (let i = 0; i <arr4.length; i++) {
    if (arr4[i] % 2 == 0) {
        result += arr4[i];
    }
}
console.log(result);


// Найдите сумму квадратов элементов этого массива.
arr4 = [2, 5, 9, 3, 1, 4];
result = 0;

for(let elem of arr4) {
    result += elem**2;
}
console.log(result);


arr4 = [2, 5, 9, 3, 1, 4];
result = 0;
for(let i = 0;  i < arr4.length; i++) {
    result += arr4[i]**2;
}
console.log(result);

// Найдите произведение элементов этого массива.
arr4 = [2, 5, 9, 3, 1, 4];
result = 1;
for(let i = 0; i < arr4.length; i++) {
    result *= arr4[i];
}
console.log(result);


arr4 = [2, 5, 9, 3, 1, 4];
result = 1;

for(let elem of arr4) {
    result *= elem;
}
console.log(result);

// Формирование строк через циклы 
// С помощью цикла сформируйте строку, заполненную 5-тью дефисами.
let str = '';
for(let i = 0; i <= 5; i++) {
    str +='-';
}
console.log(str);

// С помощью цикла сформируйте строку '123456789'.
str = '';
for(let i = 1; i <= 9; i++) {
    str += i;
}
console.log(str);

// С помощью цикла сформируйте строку '987654321'.

str = '';
for (let i = 9; i >= 1; i--) {
    str += i;
}
console.log(str);

// С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

str = '';
for (let i = 1; i <= 9; i++) {
    str += '-' + i;
}
console.log(str);


// Цифры числа при переборе циклом

// Переберите циклом числа от 10 до 1000 и выведите в консоль первую цифру каждого числа.

for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    console.log(str[0]);
}


// Переберите циклом числа от 10 до 1000 и выведите в консоль сумму первой и второй цифры каждого числа.

for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    let res = Number(str[0]) + Number(str[1]);
    console.log(res);
}

// Переберите циклом числа от 10 до 1000 и выведите те числа, первая цифра которых равна 1.
for(let i = 10; i <= 1000; i++) {
    let str = String(i);
    if(str[0] == 1) {
        console.log(str[0]);
    }
}

// Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.
for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    let res = Number(str[0]) + Number(str[1]);
    if ( res == 5) {
        console.log(Number(str));
    }
}

// Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

arr4 = [2, 5, 9, 3, 0, 1, 4];
for (let elem of arr4) {
    if( elem == 0){
        break;
    }
    console.log(elem);
}


// Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.
arr4 = [2, 5, 9, 3, 0, -3, 1, 4];
let sum = 0;
for (let elem of arr4) {
    if (elem < 0) {
        break;
    } 
    sum += elem;
}
console.log(sum);

// Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).
arr4 = [2, 5, 9, 0, 3, -3, 1, 3, 4];
let position = 0;
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] == 3) {
        position = i;
        break;
    }
}
console.log(position);

// Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.
let resSum = 0;
let cycle = 0
for (let i = 0; i < 100; i++) {
    if(resSum >= 100) {
        break;
    }
    resSum += i;
    cycle += 1;
}
console.log(resSum);
console.log(cycle);


// Вложенные циклы
// С помощью двух вложенных циклов выведите на экран следующую строку: 111222333444555666777888999
for (let i = 0; i <= 9; i++) {
    for(let j = 1; j <= 3; j++) {
        console.log(i); 
        // document.write(i)
    }
}

// С помощью двух вложенных циклов выведите на экран следующую строку: 11 12 13 21 22 23 31 32 33

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        // document.write('' + i + j + ' ')
        console.log(String(i) + String(j));
    }
}

// Заполнение массива 
// Используя цикл и метод push заполните массив числами от 1 до 10.
let newArr = [];
for (let i = 1; i <= 10; i++) {
    newArr.push(i);
}
console.log(newArr);

// Используя цикл и метод push заполните массив 10-ю буквами 'x'.

newArr = [];
for (let i = 0; i <= 10; i++) {
    newArr.push('x');
}
console.log(newArr);

// Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.

arr4 = [2, 5, 9, -9, 0, 3, -3, 1, 3, 4, -5];
newArr = [];
for (let elem of arr4) {
    if(elem >= 0) {
        newArr.push(elem);
    }
}
console.log(newArr);

arr4 = [2, 5, 9, -9, 0, 3, -3, 1, 3, 4, -5];
newArr = [];

for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] >= 0) {
        newArr.push(arr4[i])
    }
}
console.log(newArr);

// Изменение массива в цикле
// Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.

let arr5 = [1, 4, 3, 5, 2, 8];
for (let i = 0; i < arr5.length; i++) {
    arr5[i] = arr5[i]**2;
}
console.log(arr5);

// дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.
arr5 = [1, 4, 3, 5, 2, 8];
for (let i = 0; i <arr5.length; i++) {
    arr5[i] = arr5[i] - 1;
}
console.log(arr5);

// Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10.
arr5 = [1, 4, 3, 5, 2, 8];
for (let i = 0; i < arr5.length; i++) {
    arr5[i] = arr5[i] + 10;
}
console.log(arr5);

// Заполнение объектов через цикл
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.

let keys  = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let values  = [1, 2, 3, 4, 5, 6, 7];
let objRes = {};

for (let i = 0; i < keys.length; i++) {
    objRes[keys[i]] = values[i];
}
console.log(objRes);

// Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.
let obj3 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let objNew = {};


for (let key in obj3) {
    if(obj3[key] % 2 == 0) {
        objNew[key] = obj3[key];
    }
}
console.log(objNew);


let objChange = {
    a: 1,
    b: 2,
    c: 3
}
let sd = {}

for (let key in objChange) {
   if (objChange[key] % 2 == 0) {
    sd[key] = objChange[key];
   }
}
console.log(sd);


// Переберите этот объект циклом и создайте новый объект так, чтобы его ключами стали элементы старого объекта, а значениями - ключи старого объекта.

let obj5 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let newObj = {};
for (let key in obj5) {
    let value = obj5[key];
    newObj[value] = key; 
}
console.log(newObj);

// У вас есть объект с числовыми значениями. Создайте новый объект, в котором значения будут удвоены.
let numbersObj = {a: 3, b: 7, c: 5, d: 2, e: 8};
for (let key in numbersObj) {
    numbersObj[key] *= 2;
}
console.log(numbersObj);

// У вас есть объект с числовыми значениями. Найдите и выведите в консоль ключ элемента с максимальным значением.
let valuesObj = {x: 15, y: 8, z: 25, w: 12, u: 30};
let maxValue = 0;
for (let key in valuesObj) {
    if (valuesObj[key] > maxValue) {
        maxValue = valuesObj[key];
    }

}
console.log(maxValue);


// У вас есть объект с текстовыми значениями. 
// Создайте новый объект, в котором каждая строка будет изменена (например, приведена к верхнему регистру или заменены символы).

let stringsObj = {name: 'John', city: 'New York', hobby: 'reading', job: 'developer'};
let newObj2 = {};

for (let key in stringsObj) {
    newObj2[key] = stringsObj[key].toUpperCase();
}

console.log(newObj2);