let arr = [1,2,3,4,5];
let res = arr.map(function(elem){
    return elem * 2;
})
console.log(res);


arr = [1,2,3,4,5];
res = arr.map(function(elem, index){
    return elem * index;
})
console.log(res);

// Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.
arr = [1, 3, 4, 7, 9];
res = arr.map(function(elem){
    return  Number(Math.sqrt(elem).toFixed(2));
})
console.log(res);

// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
arr = ['Hello', 'Anton', 'Home'];
res = arr.map(function(elem){
    return elem + '!';
})
console.log(res);

// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
arr = ['Hello', 'Anton', 'Home'];
res = arr.map(function(elem){
    return elem.split('').reverse().join('');
})
console.log(res);


// Используя метод map преобразуйте этот массив в следующий:

// arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];
arr = ['123', '456', '789'];
res = arr.map(function(elem){
    return elem.split('').map(Number);
})
console.log(res);

// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.
arr = [1,2,3,4,5];
res = arr.map(function(elem, index){
    return elem * index;
})
console.log(res);

// Давайте переберем этот массив через map и возведем каждый его элемент в квадрат:
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
res = arr.map(function(elem){
    return elem.map(function(num){
        return num * num;
    })
})
console.log(res);


// Используйте метод map, чтобы удвоить каждый элемент массива numbers.
let numbers = [1, 2, 3, 4, 5];
res = numbers.map(function(elem){
    return elem * 2;
})
console.log(res);

// Примените map, чтобы преобразовать все строки массива words в верхний регистр.
let words = ['apple', 'banana', 'cherry', 'date'];
res = words.map(function(elem){
    return elem[0].toUpperCase() + elem.slice(1);
})
console.log(res);

// Используйте map, чтобы получить массив квадратов чисел из массива nums.
let nums = [1, 2, 3, 4, 5];
res = nums.map(function(elem){
    return Math.pow(elem,2)
})
console.log(res);

// С помощью map создайте новый массив, содержащий только имена людей.
let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 }
  ];
res = people.map(function(elem){
    return elem.name;
})  
console.log(res);

// Используйте map, чтобы создать массив, содержащий длину каждой строки из массива phrases.
let phrases = ['Hello, World!', 'How are you?', 'JavaScript is awesome!'];
res = phrases.map(function(elem){
    return elem.length;
})
console.log(res);


// Вывести элементы
arr = [1,2,3,4];
arr.forEach(function(elem){
    console.log(elem);
})


// вывести элемент и его номер
arr = ['a', 'b', 'c', 'd', 'e'];
arr.forEach(function(elem, index){
    console.log(elem, index);
})


// Найти сумму элементов
arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach(function(elem){
    sum += elem;
})
console.log(sum);

// Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.
arr = [1,2,3,4,5];
sum = 0;
arr.forEach(function(elem){
    sum += Math.pow(elem,2);
})
console.log(sum);

// Используйте метод forEach, чтобы увеличить каждый элемент массива numbers на 10.
numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(elem, index, arr){
    arr[index] = elem + 10;
})
console.log(numbers);


// Примените forEach, чтобы преобразовать все строки массива words в верхний регистр.
words = ['apple', 'banana', 'cherry', 'date'];
words.forEach(function(elem, index, arr){
    arr[index] = elem.toUpperCase();
})
console.log(words);


// Используйте forEach, чтобы изменить каждый элемент массива nums, присвоив ему значение его квадрата.
nums = [1, 2, 3, 4, 5];
nums.forEach(function(elem,index,arr){
    arr[index] = Math.pow(elem,2);
})
console.log(nums);


// С помощью forEach выведите в консоль только имена людей.
people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 }
  ];
  
  people.forEach(function(elem){
    console.log(elem.name);
  })

//   Используйте forEach, чтобы вывести в консоль длину каждой строки из массива phrases.
phrases = ['Hello, World!', 'How are you?', 'JavaScript is awesome!'];
phrases.forEach(function(elem){
    console.log(elem.length);
})


// С использованием forEach подсчитайте количество четных чисел в массиве numbers и выведите результат.
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let counter = 0;
numbers.forEach(function(elem){
    if(elem % 2 == 0) {
        counter ++;
    }
})
console.log(counter);



// Используйте forEach, чтобы объединить строки из массива words в одну строку и вывести результат в консоль.
 words = ['Hello', ' ', 'World', '!'];
 string = '';
 words.forEach(function(elem){
    string += elem;
 })
console.log(string);
