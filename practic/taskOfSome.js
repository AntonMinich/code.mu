// Проверить, содержит ли массив хотя бы одно четное число.
let numbers = [1, 3, 5, 2, 7];
let result = numbers.some(elem => elem % 2 == 0);
console.log(result);

// Проверить, содержит ли массив хотя бы одну строку, начинающуюся с заглавной буквы.
let words = ['apple', 'Banana', 'kiwi', 'orange'];
result = words.some(elem => elem[0] == elem[0].toUpperCase());
console.log(result);



// Проверить, содержит ли массив хотя бы одно отрицательное число.
numbers = [2, 5, -8, 10, 3];
result = numbers.some (elem => elem < 0);
console.log(result);



// Проверить, содержит ли массив хотя бы одну строку длиной более 5 символов.
words = ['apple', 'banana', 'kiwi', 'orange'];
result = words.some(elem => elem.length > 5);
console.log(result);



// Проверить, содержит ли массив хотя бы один элемент с числовым значением.
let mixedArray = ['apple', '25', 'kiwi', 'orange', 42];
result = mixedArray.some(elem => typeof elem === 'number');
console.log(result);


// Проверить, содержит ли массив хотя бы один элемент, встречающийся более одного раза.
let items = ['apple', 'banana', 'kiwi', 'banana', 'orange'];
result = items.some((elem, index, array) => array.includes(elem));
console.log(result);



// Проверить, содержит ли массив хотя бы один элемент, начинающийся с определенной буквы.
words = ['apple', 'banana', 'kiwi', 'orange'];
let letter = 'a';
result = words.some(elem => elem[0] == letter);
console.log(result);



// Проверить, содержит ли массив хотя бы один элемент с нечетной длиной строки.
words = ['apple', 'banana', 'kiwi', 'orange'];
result = words.some(elem => elem.length % 2 != 0);
console.log(result);



// Проверить, содержит ли массив хотя бы один элемент, удовлетворяющий определенному критерию (например, значение больше 10).
numbers = [5, 8, 15, 3, 12];
result = numbers.some(elem => elem > 10);
console.log(result);




// Проверить, содержит ли массив хотя бы одно число, кратное 5.
numbers = [2, 7, 15, 9, 10];
result = numbers.some(elem => elem % 5 == 0);
console.log(result);


