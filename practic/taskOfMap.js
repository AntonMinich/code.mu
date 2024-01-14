// Используйте метод map, чтобы удвоить каждое число.
let numbers = [1, 2, 3, 4, 5];
let res = numbers.map(elem => elem * 2);
console.log(res);


// Используйте метод map, чтобы возвести каждое число в квадрат.
numbers = [3, 7, 2, 9, 5];
res = numbers.map(elem => Math.pow(elem, 2));
console.log(res);


// Используйте метод map, чтобы преобразовать каждое число в строку.
numbers = [10, 20, 30, 40, 50];
res = numbers.map(elem => String(elem));
console.log(res);


// Используйте метод map, чтобы добавить префикс "fruit_" к каждому слову.
let words = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
res = words.map(elem => 'fruit_' + elem);
console.log(res);

// Используйте метод map, чтобы преобразовать каждое слово в верхний регистр.
words = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
res = words.map(elem => elem[0].toUpperCase() + elem.slice(1));
console.log(res);


// Используйте метод map, чтобы создать массив с длинами каждого слова.
words = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
res = words.map(elem => elem = elem.length);
console.log(res);

// Используйте метод map, чтобы создать массив с именами каждого человека.
let people = [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 22 }];
res = people.map(elem => elem.name);
console.log(res);

// Используйте метод map, чтобы преобразовать каждую дату в формат "DD.MM.YYYY".
let dates = ['2022-01-15', '2023-05-20', '2024-09-10'];
res = dates.map(function(elem){
    let part = elem.split('-');
    return part[2] +'-' + part[1]+ '-' + part[0];
})
console.log(res);

// Используйте метод map, чтобы создать массив с первыми буквами каждого слова.
words = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
res = words.map(elem => elem[0]);
console.log(res);

// Используйте метод map, чтобы создать массив строк, объединяя каждое число с текстом " dollars".
numbers = [10, 20, 30, 40, 50];
res = numbers.map(elem => elem + ' dollars');
console.log(res);


// Используйте метод map в сочетании с filter, чтобы создать массив, содержащий только удвоенные четные числа.
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
res = numbers.filter(elem => elem % 2 == 0).map(elem => elem *2);
console.log(res);

// Используйте метод map, чтобы создать массив объектов, где каждый объект будет представлять человека с именем и возрастом.
let names = ['John', 'Alice', 'Bob'];
let ages = [25, 30, 22];
res = names.map((name, index) => ({name, age: ages[index]})); 
console.log(res);

names = ['John', 'Alice', 'Bob'];
ages = [25, 30, 22];
res = names.map(function(elem, index) {
    return {
        name: elem,
        age: ages[index]
    };
;})
console.log(res);


// Используйте метод map, чтобы создать массив строк, представляющих обратный порядок букв в каждом слове.
words = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
res = words.map(elem => elem.split('').reverse().join(''));
console.log(res);


// Используйте метод map, чтобы создать массив строк, где каждая строка будет начинаться с заглавной буквы и заканчиваться точкой.
let sentences = ['hello world', 'how are you', 'javascript is fun'];
res = sentences.map(elem => elem[0].toUpperCase() + elem.slice(1) + '!');
console.log(res);



// Задача 1: Умножение элементов массива на их индекс
let array1 = [2, 4, 6, 8, 10];
let res1 = array1.map((elem, index) => elem * index);
console.log(res1);

// Задача 2: Квадраты четных элементов массива
let array2 = [1, 2, 3, 4, 5];
let res2 = array2.map(function(elem) {
    if (elem % 2 == 0){
        return Math.pow(elem, 2);
    } else {
        return elem;
    }
})
console.log(res2);

// Задача 3: Конкатенация элементов массива с их индексом
let array3 = ['apple', 'banana', 'kiwi'];
let res3 = array3.map((elem, index) => elem + index);
console.log(res3);

// Задача 4: Формирование строк в формате 'Элемент на позиции index'
let array4 = ['one', 'two', 'three'];
let res4 = array4.map((elem, index) => elem + ' на позиции ' + index);
console.log(res4);

// Задача 5: Удвоение элементов массива, если их значение меньше индекса
let array5 = [0, 2, 4, 1, 2];
let res5 = array5.map((elem, index) => elem < index ? elem * 2 : elem);
console.log(res5);


// Задача 6: Преобразование чисел в массиве в строки с добавлением индекса
let array6 = [10, 20, 30, 40, 50];
let res6 = array6.map((elem , index) => elem + String(index));
console.log(res6);

// Задача 7: Объединение строк в массиве с их индексом
let array7 = ['red', 'green', 'blue'];
let res7 = array7.map((elem, index) => elem + String(index));
console.log(res7);

// Задача 8: Определение четности индекса и умножение элементов массива
let array8 = [3, 7, 2, 9, 5];
let res8 = array8.map(function(elem, index){
    if (index % 2 == 0) {
        return elem * index;
    } else {
        return elem;
    }
})
console.log(res8);

// Задача 9: Сложение индекса и значения элемента массива
let array9 = [1, 2, 3, 4, 5];
let res9 = array9.map((elem, index) => elem * index);
console.log(res9);

// Задача 10: Требуется отфильтровать элементы массива, оставив только те, у которых индекс является четным числом.
let array10 = ['apple', 'orange', 'kiwi', 'banana'];
let res10 = array10.map((elem, index) => index % 2 == 0 ? elem : 'не четный индекс');
console.log(res10);


