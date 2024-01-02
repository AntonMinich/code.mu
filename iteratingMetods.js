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


arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
res = arr.filter(function(elem){
    if (elem > 0){
        return true;
    } else {
        return false;
    }
})
console.log(res);
// 

// Дан массив с числами. Оставьте в нем только положительные числа.
arr = [-3, 0, 4, -4, -3, -4, -9, 7, 1];
res = arr.filter(elem => elem > 0);
console.log(res);

// Дан массив с числами. Оставьте в нем только отрицательные числа.
arr = [-3, 0, 4, -4, -3, -4, -9, 7, 1];
res = arr.filter(elem => {
    return elem < 0;
})
console.log(res);


// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
arr = [-3, 4, 0, 3, 12, -34, 5, 34];
res = arr.filter(function(elem){
    if(elem > 0 && elem < 10){
        return true;
    } else {
        return false;
    }
})
console.log(res);

arr = [-3, 4, 0, 3, 12, -34, 5, 34];
res = arr.filter(elem => elem > 0 && elem < 10);
console.log(res);

// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
arr = ['Hello, World!', 'Hello', 'Sun', 'Mars', 'How are you?', 'JavaScript is awesome!'];
res = arr.filter(elem => elem.length > 5);
console.log(res);

// Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
arr = [-3, 43, 0, 3, 12, -34, 5, 34, 7, 1];
res = arr.filter(function(elem, index){
    if (elem * index < 30) {
        return true;
    }
})
console.log(res);

arr = [-3, 43, 0, 3, 12, -34, 5, 34, 7, 1];
res = arr.filter((elem, index) => elem * index < 30);
console.log(res);


// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.
arr = [1, 2, [3, 4], 5, [6, 7]];
res = arr.filter(elem => String(elem).split('').length == 1);
console.log(res);

arr = [1, 2, [3, 4], 5, [6, 7]];
res = arr.filter(elem => !Array.isArray(elem));
console.log(res);


// Используйте метод filter, чтобы создать новый массив, содержащий только четные числа из массива numbers.
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
res = numbers.filter(elem => elem % 2 == 0);
console.log(res);


// С использованием filter создайте новый массив, включая только положительные числа из массива values.
let values = [-5, 10, -8, 3, 0, -2, 7, -1];
res = values.filter(elem => elem > 0);
console.log(res);

// С помощью filter создайте новый массив, включая только те строки из массива words, которые имеют длину больше 5 символов.
words = ['apple', 'banana', 'kiwi', 'grape', 'orange'];
res = words.filter(elem => elem.length > 5);
console.log(res);

// Используйте filter, чтобы создать новый массив, включая только товары, которые находятся в наличии (inStock: true).
let products = [
    { name: 'Laptop', price: 1200, inStock: true },
    { name: 'Phone', price: 800, inStock: false },
    { name: 'Tablet', price: 300, inStock: true },
    { name: 'Smartwatch', price: 200, inStock: false },
    { name: 'Camera', price: 500, inStock: true }
  ];
  res = products.filter(elem => elem.inStock == true)
  console.log(res);
  
//   С помощью filter создайте новый массив, включая только те температуры из массива temperatures, которые выше 20 градусов.
let temperatures = [15, 22, 30, 10, 25, 18, 35];
res = temperatures.filter(elem => elem > 20);
console.log(res);

// Используйте filter, чтобы создать новый массив, включая только студентов с оценкой 'A'.
let students = [
    { name: 'Alice', age: 22, grade: 'A' },
    { name: 'Bob', age: 20, grade: 'B' },
    { name: 'Charlie', age: 25, grade: 'A' },
    { name: 'David', age: 18, grade: 'C' },
    { name: 'Eva', age: 21, grade: 'B' }
  ];

res = students.filter(elem => elem.grade == 'A');
console.log(res);

// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
arr = [-3, 43, 0, 3, 12, -34, 5, 34, 7, 1];
let arr2 = [1,2,3,4];
res = arr.every(elem => elem > 0);
let res2 = arr2.every(elem => elem > 0);
console.log(res);
console.log(res2);

// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
arr = [-3, 43, 0, 3, 12, -34, 5, 34, 7, 1];
arr2 = [1,2,3,4];
res = arr.every((elem, index) => elem * index < 30);
res2 = arr2.every((elem, index) => elem * index < 30);
console.log(res);
console.log(res2);


// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
arr = [-3, 43, 0, 3, 12, -34, 5, 34, 7, 1];
res = arr.some(elem => elem > 0);
console.log(res);


// Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.
arr = [-3, 43, 0, 3, 12, -34, 5, 34, 7, 1];
res = arr.some((elem, index) => elem * index > 30);
console.log(res);


// Используйте метод find, чтобы найти первое четное число в массиве numbers.
numbers = [3, 7, 1, 8, 5, 2, 6];
res = numbers.find(elem => elem % 2 == 0);
console.log(res);

// Используйте find, чтобы найти первого студента с баллом выше 90.
students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 78 },
    { name: 'David', grade: 95 },
    { name: 'Eva', grade: 88 }
  ];
res = students.find(elem => elem.grade > 90);
console.log(res);

// Используйте метод find, чтобы найти первую строку в массиве sentences, содержащую слово "array".
let sentences = ['Hello, world!', 'This is a test.', 'Find me in the array.'];
res = sentences.find(elem => elem.includes('array'));
console.log(res);

// Используйте метод findIndex, чтобы найти индекс первого отрицательного числа в массиве numbers.
numbers = [5, 8, -3, 12, -7, 2, 10];
res = numbers.findIndex(elem => elem < 0);
console.log(res);

// Используйте метод findIndex, чтобы найти индекс первого студента в массиве students, чей балл выше 90.
students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 78 },
    { name: 'David', grade: 95 },
    { name: 'Eva', grade: 88 }
];

res = students.findIndex(elem => elem.grade > 90);
console.log(res);


//  первый элемент с конца массива согласно переданному в параметре
arr = [1, 2, 3, 4, 5];
res = arr.findLast(elem => elem > 0);
console.log(res);

// индекс первого положительного элемента с конца массива
arr = [-12, -13, 14, 15];
res = arr.findLastIndex(elem => elem > 0);
console.log(res);



// сумму элементов массива: через reduce
arr = [1, 2, 3, 4, 5, 6];
res = arr.reduce(((sum, elem) => sum + elem), 0);
console.log(res);

arr = [1, 2, 3, 4, 5, 6];
res = arr.reduce(function(sum,elem){
    return sum + elem;
},0);
console.log(res);

// Давайте найдем сумму всех положительных чисел массива:
arr = [1, -2, -3, 4, 5, -6];
res = arr.reduce(function(sum,elem){
    if (elem > 0){
        return sum + elem;
    } else {
        return sum;
    }
},0);
console.log(res);


// Используйте метод reduce, чтобы вычислить сумму всех элементов в массиве numbers.
numbers = [5, 8, 3, 12, 7];
res = numbers.reduce(((sum, elem) => sum + elem),0);
console.log(res);

// Используйте reduce, чтобы объединить строки массива words в одну строку.
words = ['Hello', ' ', 'world', '!'];
res = words.reduce(function(sum, elem){
    return sum + elem;
},'');
console.log(res);


// Используйте reduce, чтобы найти максимальное число в массиве values.
values = [15, 22, 30, 10, 25, 18, 35, 10];
res = values.reduce(function(sum,elem){
    if(sum < elem) {
        return sum = elem;
    } else {
        return sum;
    }
},0);
console.log(res);

// Используйте reduce, чтобы вычислить произведение всех элементов в массиве factors.
let factors = [2, 3, 5, 7, 11];
res = factors.reduce(((sum, elem) => sum * elem),1);
console.log(res);







