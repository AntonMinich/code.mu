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



