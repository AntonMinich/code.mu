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

// Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. 
// Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.

function func1() {
    return function() {
        return 1;
    }
}
console.log(func1()())

function func2() {
    return function() {
        return 2;
    }
}
console.log(func2()());
console.log(func1()() + func2() ());

// Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.
function func() {
    return function() {
        return function() {
            return function() {
                return function() {
                    return '!';
                }
            }
        }
    }
}
console.log(func()()()()());

// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.
function func(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        }
    }
}
console.log(func(1)(2)(3));

// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.

function func(num1) {
    arr = [];
    arr.push(num1);
    return function(num2) {
        arr.push(num2);
        return function(num3) {
            arr.push(num3);
            return function(num4) {
                arr.push(num4);
                return function() {
                    return arr;
                }
            }
        }
    }
}
console.log(func(2)(3)(4)(5)());

// Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.

function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}

arr = [1,2,3,4,5];
result = each(arr,function(num) {
    return num * 2;
})
console.log(result);


// Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.
function each(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i ++) {
        result.push(callback(arr[i]));
    }
    return result;
}
arr = ['123', '456', '789'];
result = each(arr, function (str){
    return str.split('').reverse().join('');
});
console.log(result);


// Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.

function each(arr,callback) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

arr = ['hello', 'world'];
result = each(arr, function(str){
    return str[0].toUpperCase() + str.slice(1);
});
console.log(result);


// возведите все элементы массива в куб:

function each(arr,callback) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

function cube(num) {
	return num ** 3;
}
arr = [1,2,3,4];
result = each(arr, cube);
console.log(result);

// реализуйте счетчик вызова функции, работающий на замыканиях.

function test() {
    let num = 1;
    return function() {
        console.log(num);
        num++;
    }
}
let func1 = test();
func1();
func1();


// Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.
function test() {
   let num = 10;
    return function() {
        num--;
        console.log(num);
    }
}
func1 = test();

func1();
func1();
func1();


// Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил в консоль сообщение о том,
//  что отсчет окончен.

function timer() {
    let num = 4;
    return function() {
        num -=2;
        if(num <= 0) {
            console.log('Отсчет окончен');
        } else {
            console.log(num);
        }
        
    }
}

func1 = timer();
func1();
func1();
func1();


// Допишите следующий код так, чтобы его запуск алертом выводил '!':

(function() {
	return function() {
        return function(){
            console.log('!!!');
        }
    }
})()()();

// Допишите  код так, чтобы его запуск выводил сумму переданных параметрами чисел:
(function(num1) {
        return function(num2) {
            console.log( num1 + num2);
        }
    
})(1)(2);


// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
(function(num1) {
	return function(num2) {
        return function(num3) {
            console.log(num1 + num2 + num3);
        }
    }
})(1)(2)(3);

// С помощью рекурсии выведите элементы этого массива в консоль.
arr = [1, 2, 3, 4, 5];
function func(arr) {
    console.log(arr.shift());
    if (arr.length != 0){
        func(arr);
    }
}
func(arr);

// С помощью рекурсии найдите сумму квадратов элементов этого массива.


function getSum(arr) {
	let sum = arr.shift();
	
	if (arr.length !== 0) {
		sum += getSum(arr);
	}
	
	return sum;
}

console.log(getSum([1, 2, 3]));

// С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.
function func(obj) {
    for(let key in obj) {
        if (typeof obj[key] == 'object') {
            func(obj[key]);
        } else {
            console.log(obj[key]);
        }
    }
}
func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}});

// Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:

function func(arr) {
    let resultArr = [];
    for (let elem of arr) {
        if (Array.isArray(elem)) {
            resultArr = resultArr.concat(func(elem));
        }
        else {
                resultArr.push(elem);
        }
    }
    return resultArr;
}

res = func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);
console.log(res);


// С помощью рекурсии найдите сумму элементов этого объекта.

function func(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum += func(obj[key]);
        } else {
            sum += obj[key];
        }
    }
    return sum;
}

result = func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}});
console.log(result);


// С помощью рекурсии слейте элементы этого массива в одну строку:
function func(arr) {
    let newArr = [];
    for (let elem of arr) {
        if (Array.isArray(elem)) {
            newArr = newArr.concat(func(elem));
        } else {
            newArr.push(elem);
        }
    }
    return newArr.join('');
}
result = func(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]);
console.log(result);

// Возведите все элементы-числа этого массива в квадрат.
function func(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arr[i] = func(arr[i]);
        } else {
            arr[i] = arr[i] ** 2;
        }
    }
    return arr;
}
console.log(func([1, [2, 7, 8], [3, 4], [5, [6, 7]]]));