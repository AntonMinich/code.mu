// Выберите только четные числа из массива.
let numbers = [1, 2, 3, 4, 5];
let res = numbers.filter(elem => elem % 2 == 0);
console.log(res);


// Отфильтруйте слова в массиве по длине (например, оставьте только те, у которых длина больше 5).
let words = ['apple', 'banana', 'kiwi', 'orange'];
res = words.filter(elem => elem.length > 5);
console.log(res);


// Отфильтруйте только отрицательные числа из массива.
numbers = [-2, 5, -8, 10, -3];
res = numbers.filter(elem => elem < 0);
console.log(res);



// Отфильтруйте объекты в массиве по значению определенного поля например, age больше 23.
let people = [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 22 }];
res = people.filter(elem => elem.age > 23);
console.log(res);



// Отфильтруйте уникальные значения из массива (удалите дубликаты).
numbers = [1, 2, 2, 3, 4, 4, 5];
res = numbers.filter((elem, index, array) => array.indexOf(elem) == index);
console.log(res);



// Отфильтруйте только дробные числа из массива.
numbers = [1.5, 2, 3.8, 4, 5.2];
res = numbers.filter((elem) => !Number.isInteger(elem));
console.log(res);




// Отфильтруйте строки в массиве, начинающиеся с заглавной буквы.
words = ['Apple', 'banana', 'Orange', 'kiwi'];
res = words.filter(elem => elem[0] == elem[0].toUpperCase());
console.log(res);




// Отфильтруйте числа в массиве, которые больше заданного порога. Элемент не должен быть больше 15
numbers = [15, 30, 10, 25, 5];
res = numbers.filter(elem => elem < 15);
console.log(res);




// Отфильтруйте элементы массива, которые встречаются более одного раза.
let items = ['apple', 'banana', 'kiwi', 'banana', 'orange'];
res = items.filter((elem, index, array) => array.indexOf(elem) !== index);
console.log(res); 



// Отфильтруйте элементы массива по длине строки (например, оставьте только те, у которых длина больше 5).
words = ['apple', 'banana', 'kiwi', 'orange'];
res = words.filter(elem => elem.length > 5);
console.log(res);




// Отфильтруйте объекты в массиве, у которых значение определенного поля соответствует заданному условию.
people = [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 22 }];
res = people.filter(elem => elem.age == 25);
console.log(res);





// Отфильтруйте элементы массива, содержащие определенное ключевое слово.
words = ['apple', 'banana', 'kiwi', 'orange'];
res = words.filter(elem => elem == 'kiwi');
console.log(res);



// Отфильтруйте числа в массиве по длине их строкового представления (например, оставьте только те, у которых длина четная).
numbers = [15, 30, 10, 25, 5];
res = numbers.filter(elem => String(elem).length % 2 == 0);
console.log(res);



// Отфильтруйте элементы массива, содержащие определенную подстроку.
words = ['apple', 'banana', 'kiwi', 'orange'];
res = words.filter(elem => elem.includes('an'));
console.log(res);




// Отфильтруйте элементы массива по длине их строкового представления (например, оставьте только те, у которых длина нечетная).
words = ['apple', 'banana', 'kiwi', 'orange'];
res = words.filter(elem => elem.length % 2 !=0);
console.log(res);





// Отфильтруйте элементы массива, содержащие числа.
let mixedArray = ['apple', 25, 'kiwi', 'orange', 42];
res = mixedArray.filter(elem => typeof elem === 'number');
console.log(res);






// Отфильтруйте строки в массиве по длине (например, оставьте только те, у которых длина нечетная).
words = ['apple', 'banana', 'kiwi', 'orange'];
res = words.filter(elem => elem.length % 2 != 0);
console.log(res);





// Отфильтруйте элементы массива по заданному критерию.
items = [{ name: 'apple', price: 2 }, { name: 'banana', price: 3 }, { name: 'kiwi', price: 1 }];
res = items.filter(elem => elem.price == 3);
console.log(res);




// Отфильтруйте элементы массива, начинающиеся с определенной буквы.
words = ['apple', 'banana', 'kiwi', 'orange'];
res = words.filter(elem => elem[0] == 'a');
console.log(res);


// Задача 1: Фильтрация четных элементов массива
// Условие: Создайте массив чисел и используйте метод filter для отбора только четных чисел.

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res1 = numbers1.filter(elem => elem % 2 == 0);
console.log(res1);

// Задача 2: Фильтрация положительных элементов массива
// Условие: Создайте массив чисел и используйте метод filter для отбора только положительных чисел.

const numbers2 = [-5, 3, -1, 7, -2, 10, -8, 6];
let res2 = numbers2.filter(elem => elem > 0);
console.log(res2);

// Задача 3: Фильтрация строк, содержащих букву 'a'
// Условие: Создайте массив строк и используйте метод filter для отбора только тех строк, которые содержат букву 'a'.

const words3 = ["apple", "banana", "cherry", "date", "grape"];
let res3 = words3.filter(elem => elem.includes('a'));
console.log(res3);

// Задача 4: Фильтрация элементов, больших среднего значения массива
// Условие: Создайте массив чисел и используйте метод filter для отбора только тех чисел, которые больше среднего значения массива.

const numbers4 = [10, 20, 5, 15, 25];
let sum = 0;
numbers4.forEach(elem => sum += elem);
let result = sum / numbers4.length;
let res4 = numbers4.filter(elem => elem > result);
console.log(res4);


// Задача 5: Фильтрация элементов, стоящих на четных позициях в массиве
// Условие: Создайте массив чисел и используйте метод filter для отбора элементов, стоящих на четных позициях (по индексу).

const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res5 = numbers5.filter((elem, index) => index %2 == 0);
console.log(res5);


// Задача 6: Фильтрация слов, начинающихся с определенной буквы
// Условие: Создайте массив слов и используйте метод filter для отбора только тех слов, которые начинаются с определенной буквы.

const words6 = ["apple", "banana", "cherry", "date", "grape"];
let letter = 'a';
let res6 = words6.filter(elem => elem[0] == letter);
console.log(res6);

// Задача 8: Фильтрация элементов, не кратных 3
// Условие: Создайте массив чисел и используйте метод filter для отбора только тех чисел, которые не кратны 3.

const numbers8 = [1, 3, 5, 7, 9, 12, 15, 18];
let res8 = numbers8.filter(elem => elem % 3 != 0);
console.log(res8);

// Задача 9: Фильтрация строк с длиной более 5 символов
// Условие: Создайте массив строк и используйте метод filter для отбора только тех строк, длина которых больше 5 символов.

const words9 = ["apple", "banana", "cherry", "date", "grape"];
let res9 = words9.filter(elem => elem.length > 5);
console.log(res9);

// Задача 10: Фильтрация элементов, меньших предыдущего элемента в массиве
// Условие: Создайте массив чисел и используйте метод filter для отбора только тех чисел, которые меньше своего предыдущего элемента.

const numbers10 = [5, 3, 8, 2, 7, 4, 10, 1];
let res10 = numbers10.filter(function(elem, index) {
    if(elem < numbers10[index+1]) {
        return true;
    }
})
console.log(res10);



