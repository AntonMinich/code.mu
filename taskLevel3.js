// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

let number = 12345;
let arr = String(number).split('').map(Number);
if (arr.sort((a,b) => a-b).join('') == number) {
    console.log('Цифры числа расположены по возрастанию');
} else {
    console.log(false);
}

// Удалите из массива все пустые строки.
arr = [1, '', '', 2, 3, '', 5];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == 0) {
        arr.splice(i,1);
        i--;
    }
    
}
console.log(arr);

// Отсортируйте элементы в каждом подмассиве.
arr = [
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
];
for (let i = 0; i < arr.length; i++) {
    arr[i].sort((a,b) => a - b);
}
console.log(arr);

// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
for (let i = arr2.length; i > arr1.length; i--) {
    arr2.splice(i-1,1);
}
console.log(arr2);

// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.
for (let i = 10; i <= 1000; i++) {
    let string = String(i).split('').reverse();
    if(string[1] % 2 == 0) {
        console.log(Number(string[1]));
    }
}


// Дан массив. Удалите из него каждый пятый элемент.
arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let count = 4;
for (let i = count; i < arr.length; i+=count) {
        arr.splice(i,1);
}
console.log(arr);


// Сделайте строку, содержащую столько нулей, сколько указано в переменной. 
let num = 5;
let string = ''
for (let i = 0; i < num; i++) {
    string += '0';
}
console.log(string);


num = 5;
string = '0'.repeat(5);
console.log(string);


// Удалите из этой строки каждое второе слово.
string = 'aaa bbb ccc eee fff';
arr = string.split(' ');
for (let i = 1; i < arr.length; i+=2) {
    arr.splice(i,1);
    i--;
}
console.log(arr.join(' '));


// Найдите сумму элементов этого массива.
arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
let sum = 0;
for (let elem of arr) {
    for (let subElem of elem) {
        sum += subElem;
    }
}
console.log(sum);


// Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.
arr = ['a', 'ab', 'abc', 'abcd', 'abcde'];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
        arr.splice(i,1);
        i--;
    }
}
console.log(arr);

// Проверьте, что все цифры  числа являются нечетными

number = 1357;
arr = String(number).split('').map(Number);
for (let elem of arr) {
    if (elem % 2 == 0) {
        console.log('Есть четные цифры');
        break;
    } 
}


// Проверьте, что это слово читается одинаково с любой стороны.
string = 'abcba';
arr = string.split('');
if (arr == arr.reverse()) {
    console.log(true);
} else {
    console.log(false);
}

// Найдите сумму элементов этого массива.
arr = [
	[
		[11, 12, 13],
		[14, 15, 16],
		[17, 17, 19],
	],
	[
		[21, 22, 23],
		[24, 25, 26],
		[27, 27, 29],
	],
	[
		[31, 32, 33],
		[34, 35, 36],
		[37, 37, 39],
	],
];
sum = 0;
for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
        for(let k = 0; k < arr[i][j].length; k++) {
            sum += arr[i][j][k];
        }
    }
}
console.log(sum);