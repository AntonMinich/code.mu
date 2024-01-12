// Найти первое четное число в массиве.
let numbers = [3, 5, 8, 10, 15];
let res = numbers.find(elem => elem % 2 == 0);
console.log(res);


// Найти первую строку в массиве с длиной более 5 символов.
let words = ['apple', 'kiwi', 'banana', 'orange'];
res = words.find(elem => elem.length > 5);
console.log(res);


// Найти первое отрицательное число в массиве.
numbers = [3, 5, -8, 10, 15];
res = numbers.find(elem => elem < 0);
console.log(res);


// Найти первый элемент в массиве, удовлетворяющий сложному условию (например, число, которое нечетно и меньше 10).
numbers = [5, 8, 15, 3, 12];
res = numbers.find(elem => elem % 2 != 0 && elem < 10);
console.log(res);



// Найти первую строку в массиве, начинающуюся с определенной буквы.
words = ['apple', 'kiwi', 'banana', 'orange'];
res = words.find(elem => elem[0] == 'b');
console.log(res);



// Найти первое положительное число в массиве.
numbers = [-3, 5, -8, 10, 15];
res = numbers.find(elem => elem > 0);
console.log(res);



// Найти первый элемент в массиве, удовлетворяющий критерию объекта (например, объект с возрастом более 25).
let people = [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 22 }];
res = people.find(elem => elem.age > 25);
console.log(res);



// Найти первое число в массиве, кратное 3.
numbers = [2, 7, 15, 9, 10];
res = numbers.find(elem => elem % 3 == 0);
console.log(res);



// Найти первый элемент в массиве, содержащий определенную подстроку.
words = ['apple', 'kiwi', 'banana', 'orange'];
res = words.find(elem => elem.includes('an'));
console.log(res);



// Найти первый элемент в массиве, у которого определенное свойство объекта равно определенному значению.
people = [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 22 }];
res = people.find(elem => elem.age > 25);
console.log(res);



// Найти первый элемент в массиве, строка которого имеет длину более 10 символов.
words = ['apple', 'kiwi', 'banana', 'orange'];
res = words.find(elem => elem.length > 10);
console.log(res);



// Найти первый элемент в массиве, не содержащий цифры.
words = ['apple', '25', 'kiwi', 'orange', '42'];
res = words.find(elem => isNaN(Number(elem)));
console.log(res);




// Найти первый элемент в массиве, удовлетворяющий сложному условию (например, строка с буквой 'a' и длиной более 5 символов).
words = ['apple', 'kiwi', 'banana', 'orange'];
res = words.find(elem => elem.includes('a') && elem.length > 5);
console.log(res);




// Найти первый элемент в массиве, строка которого имеет длину более 8 символов.
words = ['apple', 'kiwi', 'banana', 'orange'];
res = words.find(elem => elem.length > 8);
console.log(res);




// Найти первый элемент в массиве, удовлетворяющий сложному условию (например, число, которое больше 5 и меньше 15).
numbers = [3, 8, 12, 20, 4];
res = numbers.find(elem => elem > 5 && elem < 15);
console.log(res);



// Найти первый элемент в массиве, содержащий только цифры.
let mixedArray = ['apple', '25', 'kiwi', 'orange', '42'];
res = mixedArray.find(elem => !isNaN(Number(elem)));
console.log(res);



// Найти первый элемент в массиве, строка которого имеет длину более 7 символов.
words = ['apple', 'kiwi', 'banana', 'orange'];
res = words.find(elem => elem.length > 7);
console.log(res);




// Найти первый элемент в массиве, строка которого имеет длину менее 5 символов.
words = ['apple', 'kiwi', 'banana', 'orange'];
res = words.find(elem => elem.length < 5);
console.log(res);



// Найти первый элемент в массиве, удовлетворяющий критерию объекта (например, объект с возрастом менее 30).
people = [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 22 }];
res = people.find(elem => elem.age < 30);
console.log(res);



// Найти первый элемент в массиве, содержащий только буквы.
mixedArray = ['apple', '25', 'kiwi', 'orange', '42'];
res = mixedArray.find(function(elem){
    for (let i = 0; i < elem.length; i++) {
        if(!isNaN(Number(elem))){
            return false
        } 
    }
    return true;
})
console.log(res);


