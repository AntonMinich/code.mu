// Сделайте функцию test, параметрами принимающую 3 функции.
//  Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3.
//   Выведите в консоль сумму результатов функций.

function test(func1, func2, func3) {
    console.log(func1() + func2() + func3());
}
test(
    function() {return 1;},
    function() {return 2;},
    function() {return 3;}
);

// Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.
let get1 = function() {
    return 2;
};
let get2 = function() {
    return 3;
};
let get3 = function() {
    return 5;
};
function res(func1, func2, func3) {
    console.log(func1() + func2() + func3());
}
res(get1, get2, get3);


// Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3.
//  Пусть первая функция возвращает 1, вторая - 2, а третья - 3. 
//  Передайте эти функции параметром в функцию test из предыдущей задачи.

function func1() {
    return 6;
}
function func2() {
    return 5;
}
function func3() {
    return 4;
}
function test(func1,func2,func3){
    console.log(func1() + func2() + func3()); 
}
test(func1, func2, func3);

// Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.
get1 = function() {
    return 8;
}
get2 = function() {
    return 9;
}
get3 = function() {
    return 5;
}
function test(func1, func2, func3) {
    console.log(func1() + func2() + func3());
}
test(get1, get2, get3);


// Переделайте  код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.
// test(function(num) {
// 	return num * num;
// });

// function test(func) {
// 	console.log(func(3));
// }

function test(func) {
    console.log(func(3));
}
function square(num) {
    return num * num;
}
test(square);

// Переделайте передаваемую функцию на Function Expression с тем же именем func.
let square = function(num) {
    return num * num;
}
function test(func) {
    console.log(func(3));
}

test(square);


// Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. 
// При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3. 
// Выведите  результат.
let sum = function(num1, num2) {
    return num1 + num2;
}
function test(func) {
    console.log(func(2,3));
}
test(sum);

// Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа. 
// Пусть функция test возвращает сумму результатов переданных функций:
// function test(num, func1, func2) {
	// return func1(num) + func2(num);
// }
// Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию,
//  возводящую число в куб. Выведите результат работы в консоль.

function test(num, func1, func2) {
	return func1(num) + func2(num);
}

function square(num) {
    return num * num;
}

function cube(num) {
    return num * num * num;
}
let result = test(3, square, cube);
console.log(result);


// Давайте сделаем функцию, которая параметром будет принимать массив, а вторым параметром - функцию.
//  Переданная функция должна будет применится к каждому элементу массива:

function test (arr,func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}

result = test([1,2,3,4], function(num) {
    return num * num;
});
console.log(result);

// Вызовите созданную вами функцию test, передав ей параметром массив с числами. Сделайте так, чтобы функция вернула массив с кубами этих чисел.
function test (arr, func) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}
result = test([1,2,3,4], function(num) {
    return Math.pow(num,3);
})
console.log(result);

// Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа.
//  Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.

function sum(num1, num2) {
    function cube(num) {
        return Math.pow(num,3);
    }
    return cube(num1) + cube(num2);
}
console.log(sum(2,3));


function sum (num1, num2) {
    function test(num) {
        return num / 2;
    }
    return test(num1) + test(num2);
}
console.log(sum(8,2));

function sum (num1, num2, num3) {
    function test (num){
        return num + 2;
    }
    return test(num1) + test(num2) / test(num3);
}
console.log(sum(8,4,2));

// Создайте функцию calculateExpression, которая принимает два числа (num1 и num2) и возвращает результат выражения,
//  используя функцию square и встроенную функцию Math.pow:

function calculateExpression(num1, num2) {
    function square(num) {
        return Math.pow(num,2);
    }
    return square(num1) + square(num2);
}
console.log(calculateExpression(9,3));