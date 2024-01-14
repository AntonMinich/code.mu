
// Вывести каждый элемент массива в консоль с использованием forEach.
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(elem => console.log(elem));



// Умножить каждый элемент массива на 2 с использованием forEach.
numbers = [1, 2, 3, 4, 5];
numbers.forEach(elem => console.log(elem * 2));



// Вывести в консоль только четные числа из массива с использованием forEach.
numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(elem){
    if(elem % 2 == 0) {
        console.log(elem);
    }
});



// Посчитать и вывести в консоль сумму всех элементов массива с использованием forEach.
numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(elem => sum += elem);
console.log(sum);



// Создать строку, объединив все элементы массива в одну строку с использованием forEach.
numbers = [1, 2, 3, 4, 5];
let string = '';
numbers.forEach(elem => string += String(elem));
console.log(string);


// Увеличить каждый элемент массива на 10% с использованием forEach.
prices = [10, 20, 30, 40, 50];
prices.forEach(elem => console.log(elem + elem * 0.1));


// Найти и вывести в консоль минимальное значение из массива с использованием forEach.
numbers = [5, 3, 8, 1, 7];
let min = +Infinity;
numbers.forEach(function(elem){
    if (elem < min) {
        min = elem;
    }
});
console.log(min);



// Объединить все строки массива в одну строку и вывести в консоль с использованием forEach.
let words = ['Hello', ' ', 'world', '!'];
string = '';
words.forEach(elem => string += elem);
console.log(string);



// Удалить все отрицательные числа из массива с использованием forEach.
numbers = [2, -5, 10, -3, 8];
numbers.forEach(function(elem){
    if (elem > 0) {
        console.log(elem)
    }
});


// Удвоить все положительные числа в массиве с использованием forEach.
numbers = [-1, 2, -3, 4, -5];
numbers.forEach(function(elem) {
    if (elem > 0) {
        console.log(elem);
    }
});



// Создать одну строку, объединив все элементы массива с использованием forEach.
words = ['I', ' love', ' JavaScript'];
string = '';
words.forEach(elem => string += elem);
console.log(string);



// Найти и вывести в консоль среднее значение из массива с использованием forEach.
numbers = [10, 15, 20, 25, 30];
sum = 0;
numbers.forEach(function(elem) {
    sum += elem;
})
let res = sum / numbers.length;
console.log(res);



// Вывести в консоль все строки в обратном порядке с использованием forEach.
words = ['apple', 'orange', 'banana'];
words.forEach(function(elem, index, array){
    console.log(array[array.length-1 - index]);
})



// Удалить все дубликаты из массива с использованием forEach.
numbers = [1, 2, 2, 3, 4, 4, 5];
numbers.forEach(function(elem, index, array){
    if (array.indexOf(elem) == index) {
        console.log(elem);
    }
}) 



// Отсортировать числа в массиве по убыванию с использованием forEach.
numbers = [8, 3, 5, 1, 7];
console.log(numbers.sort((a,b) => a - b));




// Преобразовать все строки массива в верхний регистр с использованием forEach.
words = ['apple', 'orange', 'banana'];
words.forEach(function(elem){
    console.log(elem[0].toUpperCase() + elem.slice(1));
})




// Найти и вывести в консоль самое длинное слово из массива с использованием forEach.
words = ['apple', 'orange', 'banana', 'kiwi'];
res = words.forEach(function(elem){

})




// Вывести в консоль все строки с обратным порядком символов с использованием forEach.
words = ['hello', 'world', 'javascript'];
words.forEach(function(elem){
    console.log(elem.split('').reverse().join(''))
});




// Создать объект, используя пары ключ-значение из массива с использованием forEach.
let keyValuePairs = [['name', 'John'], ['age', 25], ['city', 'New York']];



// Задача 1: Вывод четных элементов массива
// Условие: Создайте массив чисел и используйте метод forEach для вывода в консоль только четных элементов.

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Задача 2: Удвоение каждого элемента массива
// Условие: Создайте массив чисел и используйте метод forEach для удвоения каждого элемента в массиве.

const numbers2 = [3, 7, 11, 5, 8, 14, 2, 6];

// Задача 3: Вывод строк, начинающихся с гласной буквы
// Условие: Создайте массив строк и используйте метод forEach для вывода в консоль строк, начинающихся с гласной буквы.

const words3 = ["apple", "banana", "cherry", "date", "grape"];

// Задача 4: Вычисление среднего значения массива чисел
// Условие: Создайте массив чисел и используйте метод forEach для вычисления среднего значения элементов массива.

const numbers4 = [10, 20, 5, 15, 25];

// Задача 5: Замена отрицательных чисел на их абсолютные значения
// Условие: Создайте массив чисел и используйте метод forEach для замены отрицательных чисел на их абсолютные значения.

const numbers5 = [-5, 3, -1, 7, -2, 10, -8, 6];

// Задача 6: Вывод строк с длиной более 4 символов
// Условие: Создайте массив строк и используйте метод forEach для вывода в консоль только тех строк, длина которых более 4 символов.

const words6 = ["apple", "banana", "cherry", "date", "grape"];

// Задача 7: Подсчет количества четных чисел в массиве
// Условие: Создайте массив чисел и используйте метод forEach для подсчета количества четных чисел в массиве.

const numbers7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Задача 8: Конкатенация строк в массиве
// Условие: Создайте массив строк и используйте метод forEach для конкатенации всех строк в одну строку.

const words8 = ["apple", "banana", "cherry", "date", "grape"];

// Задача 9: Перевод всех элементов массива в верхний регистр
// Условие: Создайте массив строк и используйте метод forEach для перевода всех элементов массива в верхний регистр.

const words9 = ["apple", "banana", "cherry", "date", "grape"];

// Задача 10: Вывод элементов массива в обратном порядке
// Условие: Создайте массив и используйте метод forEach для вывода элементов массива в обратном порядке.

const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

