// Возведите 2 в 10 степень.
console.log(Math.pow(2, 10));

// Найдите квадратный корень из 245.
console.log(Math.sqrt(245));

// Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let elem of arr) {
    sum += Math.pow(elem, 3);
}
console.log(Math.sqrt(sum));

// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
let number = 379;
console.log(Math.round(Math.sqrt(number)));
console.log(Math.sqrt(number).toFixed(1));
console.log(Math.sqrt(number).toFixed(2));

// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
number = 587;
let obj = {};
obj['floor'] = Math.floor(Math.sqrt(number));
obj['ceil'] = Math.ceil(Math.sqrt(number));
console.log(obj);

// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

arr = [4, -2, 5, 19, -130, 0, 10];
console.log(Math.max(...arr));
console.log(Math.min.apply(null, arr));

// Выведите на экран случайное целое число от 1 до 100.
let max = 100;
let min = 1;
let random = Math.floor(Math.random() * (max - min + 1) + min);
console.log(random);

// С помощью цикла заполните массив 10-ю случайными целыми числами.
arr = [];
for (let i = 0; i <= 10; i++) {
    arr.push(Math.floor(Math.random()*10));
}
console.log(arr);

// Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
let a = 4;
let b = 6;
console.log(Math.abs(a-b));

// Дана строка 'js'. Сделайте из нее строку 'JS'.
let string = 'js';
console.log(string.toUpperCase());
console.log(string.slice(0,1).toUpperCase() + string.slice(1));

// Дана строка 'JS'. Сделайте из нее строку 'js'.
string = 'JS';
console.log(string.toLowerCase());
console.log(string.slice(0,1) + string.slice(1).toLowerCase());

// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
string = 'я учу javascript!';
console.log(string.substr(2,14));
console.log(string.substring(2, 16));
console.log(string.slice(2,-1));

// Дана строка. Проверьте, начинается ли эта строка на 'http://'.
string = 'http://esfs';
let res = string.startsWith('http://');
console.log(res);

// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.
string = 'index.html';
res = string.endsWith('.html');
console.log(res);

// Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки.
string = '1-2-3-4-5';
rep = '-';
for (let elem of string) {
    string = string.replace(rep, '.')
}
console.log(string);

// Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.
string = '1-2-3-4-5';
arr = string.split('-');
console.log(arr);

// Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
string = '12345';
arr = string.split('');
console.log(arr);

// С помощью метода join слейте массив в строку '1-2-3-4-5'.
arr = [1, 2, 3, 4, 5];
string = arr.join('-');
console.log(string);

// Выведите на экран первый элемент этого массива.
arr = [1, 2, 3];
res = arr.shift();
console.log(res);

// Выведите на экран последний элемент этого массива.
arr = [1, 2, 3];
res = arr.pop();
console.log(res);

// Добавьте ему в конец элементы 4, 5, 6.
arr = [1,2,3];
arr.push(4, 5, 6);
console.log(arr);

// Добавьте ему в начало элементы 4, 5, 6.
arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);


// Дан следующий массив: [1, 2, 3, 4, 5] Сделайте из этого массива следующий: [1, 2, 3]
arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(0, 3);
console.log(newArr);


// Дан следующий массив:[1, 2, 3, 4, 5] Используя этот массив, запишите в новую переменную следующий массив:[4, 5]
arr = [1, 2, 3, 4, 5];
newArr = arr.slice(3);
console.log(newArr);

// Дан следующий массив: [1, 2, 3, 4, 5] С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
arr = [1, 2, 3, 4, 5];
arr.splice(1,2);
console.log(arr);

// Дан следующий массив:[1, 2, 3, 4, 5]С помощью метода splice сделайте из него массив:[1, 2, 3, 'a', 'b', 'c', 4, 5]
arr  = [1, 2, 3, 4, 5];
arr.splice(3,0, 'a', 'b', 'c');
console.log(arr);


// Дан следующий массив:[1, 2, 3, 4, 5]С помощью метода splice сделайте из него массив:[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
arr = [1, 2, 3, 4, 5];
arr.splice(1,0,'a','b');
arr.splice(6,0,'c');qq
arr.splice(8,0,'e');
console.log(arr);

//Дан следующий массив:[1, 2, 3, 4, 5] Проверьте, есть ли в этом массиве число 3.
arr = [1,2,3,4,5];
console.log(arr.includes(3));
console.log(arr.indexOf(2));

// Дан объект: let obj = {a: 1, b: 2, c: 3}; Получите массив его ключей.
let obj = {a: 1, b: 2, c: 3};
arr = Object.keys(obj);
console.log(arr);