// Сделайте функцию, выводящую в консоль ваше имя.
function func() {
    console.log('Anton')
};
func();

// Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100.
function sum() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}
sum();

// Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.
function func(num) {
    console.log(num ** 3);
}
func(3);

// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. 
// В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

function func(num) {
    if (num >= 0) {
        console.log('+++');
    } else {
        console.log('---');
    }
}
func(3);
func(-4);

// Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
function func(num1, num2) {
    console.log(num1 + num2);
}
func(3, 4);
func(-4, 10);

// Сделайте функцию func, которая параметром будет принимать 3 числа и выводить в консоль их сумму.
// С помощью созданной вами функции выведите в консоль сумму значений эти переменных.
let param1 = 1;
let param2 = 2;
let param3 = 3;
function func(param1, param2, param3) {
    console.log(param1 + param2 + param3);
}
func(param1, param2, param3);

// Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. 
// С помощью этой функции найдите куб числа 3 и запишите его в переменную res.
let res = func(3);
function func(num) {
    return num ** 3;
}
console.log(res);


// Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа.
// С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. 
// Просуммируйте полученные результаты и выведите их в консоль.

res = func(3) + func(4);
function func(num) {
    return Math.sqrt(num);
}
console.log(func(3));
console.log(func(4));
console.log(res);

// 

res = round(sqrt(2));
function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}
console.log(res);

// 

res = sqrt(sum(2,3,4));

function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
console.log(res);


// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. 
// Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

function func(num) {
    let number = num;
    let count = 0;
   while (number >= 10) {
    number = number/2;
    count++;
   }
   return count;
}
res = func(100);
console.log(res);

// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.
function func(arr) {
    for (let elem of arr) {
        if (elem % 2 != 0) {
            return false;
        } 
    }
    return true;
}
res = func([2, 3, 4, 6]);
console.log(res);

// Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.
function func(num) {
    let str = String(num);
    for (let elem of str) {
        if(elem % 2 == 0) {
            return 'Есть четные цифры';
        }
    }
    return 'Все цифры нечетные'
}
res = func(1357);
console.log(res);

// Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.
function func(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }
    return false;
}
res = func([11, 2, 5, 5, 7, 8]);
console.log(res);

// Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
function func(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
res = func([1,2,3,4,5]);
console.log(res);

// Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.

function func(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}
res = func(458);
console.log(res);

// Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
function func(string) {
    let arr = string.split('');
    return arr;
}
res = func('test');
console.log(res);

// Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
function func(string) {
    let newString = string.split('').reverse().join('');
    return newString;
}
res = func('run');
console.log(res);


// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
function func(string) {
    let upperString = string[0].toUpperCase() + string.slice(1);
    return upperString;
}
res = func('test');
console.log(res);

// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.
function func (string) {
    let arr = string.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
}
res = func('test run');
console.log(res);

// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
function func() {
    let arr = [];
    for(let i = 1; i <= 50; i++) {
        arr.push(i);
    }
    return arr;
}
res = func();
console.log(res);


// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

function func(number){
    let sum = 0;
    let str = String(number); 
    for(let i = 0; i < str.length; i ++) {
        sum += +str[i];
    }
    return sum;
}
res = func(15690);
console.log(res);

// Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
function func(year) {
    if (year % 4 == 0) {
        return year + ' - високосный год';
    } else {
       return false;
    }
}
res = func(2014);
console.log(res);

// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
function func (sek) {
    const sekInDay = 86400;
    let day = sek / sekInDay;
    return day;
}
res = func(15236);
console.log(res);

// Сделайте функцию, которая будет возвращать случайный элемент из массива.
function func(arr) {
    let position = Math.floor(Math.random() * arr.length);
    return arr[position];
}
res = func([13, 342, 23, 54, 35, 126, 700]);
console.log(res);


// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
function func(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return 'Составное число';
        } 
    }
    return 'простое число';
}
res = func(9);
console.log(res);

