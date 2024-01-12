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

