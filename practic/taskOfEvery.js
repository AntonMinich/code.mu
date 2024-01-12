// Проверить, все ли элементы массива больше 0.
let numbers = [2, 5, 8, 10, 3];
let res = numbers.every(elem => elem > 0);
console.log(res);


// Проверить, все ли строки массива начинаются с заглавной буквы.
let words = ['Apple', 'Banana', 'Kiwi', 'Orange'];
res = words.every(elem => elem[0] === elem[0].toUpperCase());
console.log(res);



// Проверить, все ли числа в массиве являются четными.
numbers = [2, 4, 6, 10, 12];
res = numbers.every(elem => elem % 2 == 0);
console.log(res);



// Проверить, все ли строки массива имеют длину более 5 символов.
words = ['apple', 'banana', 'kiwi', 'orange'];
res = words.every(elem => elem.length > 5);
console.log(res);



// Проверить, все ли элементы массива являются числами.
let mixedArray = ['apple', 25, 'kiwi', 'orange', 42];
res = mixedArray.every(elem => elem == Number);
console.log(res);




// Проверить, все ли элементы массива являются уникальными.
let items = ['apple', 'banana', 'kiwi', 'banana', 'orange'];
res = items.every(function(elem, index, array){
    return array.indexOf(elem) === index;
});
console.log(res);



// Проверить, все ли числа в массиве находятся в заданном числовом диапазоне.
let range = [0, 50];
numbers = [15, 30, 10, 25, 5];
res = numbers.every(elem => elem >= 0 && elem <= 50);
console.log(res);





// Проверить, все ли строки массива начинаются с определенной буквы.
words = ['apple', 'banana', 'kiwi', 'orange'];
let letter = 'a';
res = words.every(elem => elem[0] == letter);
console.log(res);


// Проверить, все ли элементы массива имеют четную длину строки.
words = ['apple', 'banana', 'kiwi', 'orange'];
res = words.every(elem => elem.length % 2 == 0);
console.log(res);




// Проверить, все ли элементы массива удовлетворяют определенному критерию (например, значение больше 10).
numbers = [15, 30, 10, 25, 5];
res = numbers.every(elem => elem > 10);
console.log(res);



// Проверить, все ли числа в массиве делятся на 5.
numbers = [2, 7, 15, 9, 10];
res = numbers.every(elem => elem % 5 == 0);
console.log(res);



// Проверить, все ли элементы массива содержат определенную подстроку.
words = ['apple', 'banana', 'kiwi', 'orange'];
let substring = 'an';
res = words.every(elem => elem.includes(substring));
console.log(res);




// Проверить, все ли числа в массиве больше заданного порога.
numbers = [15, 30, 10, 25, 5];
let number = 3;
res = numbers.every(elem => elem > number);
console.log(res);



// Проверить, все ли строки массива содержат букву 'a'.
words = ['apple', 'banana', 'kiwi', 'orange'];
res = words.every(elem => elem.includes('a'));
console.log(res);



// Проверить, все ли элементы массива удовлетворяют сложному условию (например, число, которое нечетно меньше 10).
numbers = [5, 8, 15, 3, 12];
res = numbers.every(elem => elem % 2 != 0 && elem < 10);
console.log(res);




// Проверить, все ли элементы массива не содержат цифры.
words = ['apple', 'banana', 'kiwi', 'orange'];
res = words.every(elem => elem != Number);
console.log(res);




// Проверить, все ли элементы массива удовлетворяют сложному условию (например, строка с буквой 'a' и длиной более 5 символов).
words = ['apple', 'banana', 'kiwi', 'orange'];
res = words.every(elem => elem.includes('a') && elem.length > 5);
console.log(res);




// Проверить, все ли элементы массива содержат только цифры.
mixedArray = ['apple', '25', 'kiwi', 'orange', '42'];
res = mixedArray.every(elem => elem == Number);
console.log(res);



// Проверить, все ли элементы массива удовлетворяют критерию объекта (например, объект с возрастом более 25).
let people = [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 22 }];
res = people.every(elem => elem.age == 25);
console.log(res);




// Проверить, все ли строки массива имеют длину строки более 10 символов.
words = ['apple', 'banana', 'kiwi', 'orange'];
res = words.every(elem => elem.length > 10);
console.log(res);


// Задача 1: Проверка на равенство элементов массива с их индексами
// Условие: Создайте массив строк и используйте метод every для проверки, что каждый элемент равен своему индексу.

const strings1 = ["zero", "one", "two", "three"];

// Задача 2: Проверка на простоту чисел в массиве
// Условие: Создайте массив чисел и используйте метод every для проверки, что все числа являются простыми.

const primes = [2, 3, 5, 7, 11];

// Задача 3: Проверка на алфавитный порядок строк в массиве
// Условие: Создайте массив строк и используйте метод every для проверки, что строки расположены в алфавитном порядке.

const alphabet = ["apple", "banana", "cherry", "date"];

// Задача 4: Проверка на четность суммы индекса и элемента в массиве
// Условие: Создайте массив чисел и используйте метод every для проверки, что сумма индекса и элемента является четной.

const numbers4 = [1, 3, 5, 7, 9];

// Задача 5: Проверка на дубликаты элементов массива
// Условие: Создайте массив чисел и используйте метод every для проверки, что все элементы уникальны.

const uniqueNumbers = [2, 4, 6, 8, 10];

// Задача 6: Проверка на четность длины строк в массиве
// Условие: Создайте массив строк и используйте метод every для проверки, что длина каждой строки является четной.

const strings6 = ["cat", "dog", "elephant", "giraffe"];

// Задача 7: Проверка на упорядоченность дат в массиве
// Условие: Создайте массив дат и используйте метод every для проверки, что даты расположены в хронологическом порядке.

const dates = [new Date("2022-01-01"), new Date("2022-02-01"), new Date("2022-03-01")];

// Задача 8: Проверка на совпадение с предыдущим элементом в массиве
// Условие: Создайте массив строк и используйте метод every для проверки, что каждая строка не совпадает с предыдущей.

const words8 = ["apple", "banana", "cherry", "date"];

// Задача 9: Проверка на нечетность элементов массива
// Условие: Создайте массив чисел и используйте метод every для проверки, что все элементы массива являются нечетными.

const oddNumbers = [1, 3, 5, 7, 9];

// Задача 10: Проверка на кратность 3 элементов массива
// Условие: Создайте массив чисел и используйте метод every для проверки, что все элементы массива кратны 3.

const multiplesOf3 = [3, 6, 9, 12, 15];

