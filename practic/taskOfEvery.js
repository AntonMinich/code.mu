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

