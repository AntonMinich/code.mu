// Найти сумму всех чисел в массиве.
let numbers = [1, 2, 3, 4, 5];
let res = numbers.reduce((sum, elem) => sum + elem, 0);
console.log(res);


// Найти произведение всех чисел в массиве.
numbers = [2, 3, 4, 5];
res = numbers.reduce((sum, elem) => sum * elem, 1);
console.log(res);



// Объединить все строки в массиве в одну строку.
words = ['Hello', ' ', 'world', '!'];
res = words.reduce((sum, elem) => sum + elem, '');
console.log(res);


// Найти минимальное число в массиве.
numbers = [8, 2, 5, 10, 3];
res = numbers.reduce((min, elem) => min > elem ? elem : min, +Infinity);
console.log(res);



// Объединить массив объектов в один объект.
let people = [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 22 }];
res = people.reduce(function (sum, elem) {
    sum[elem.name] = elem.age;
    return sum;
}, {});
console.log(res);






// Посчитать количество четных чисел в массиве.
numbers = [2, 5, 8, 11, 14];
let counter = numbers.reduce((count, elem) => elem % 2 == 0 ? count + 1 : count, 0);
console.log(counter);


// Объединить все строки в массиве в одну строку с разделителем ', '.
words = ['apple', 'kiwi', 'banana', 'orange'];
res = words.reduce((sum, elem) => sum += ', ' + elem);
console.log(res);




// Найти среднее значение чисел в массиве.
numbers = [10, 15, 20, 25];
res = numbers.reduce((sum, elem) => (sum += elem), 0) / numbers.length;
console.log(res);




// Посчитать общее количество букв 'a' в строках массива.
words = ['apple', 'kiwi', 'banana', 'orange'];
res = words.reduce((sum, elem) => sum +(elem.split('a').length - 1), 0);
console.log(res);

let a = 'banana';
console.log(a.split('a').length-1);


// Найти сумму всех положительных чисел в массиве.
numbers = [-3, 5, -8, 10, 15];
res = numbers.reduce((sum, elem) => elem > 0 ? sum += elem : elem);
console.log(res);






